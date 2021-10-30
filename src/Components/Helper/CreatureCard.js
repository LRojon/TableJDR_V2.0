import React, { useRef, useState } from 'react'
import ReactModal from 'react-modal'
import '../../Styles/CreatureCard.css'
import '../../Styles/LootCard.css'
import AbilitiesItem from './AbilitiesItem'
import ActionsItem from './ActionsItem'
import Randomizer from './Randomizer'

const CreatureCard = ({ creature, onDeleteClick, onDeath }) => {

    const crea = useRef({...creature})
    const maxHP = useRef(Randomizer(creature.hp.random))
    const [currentHP, setCurrentHP] = useState(maxHP.current)
    const [modalOpen, setModalOpen] = useState(false)

    const _makeSkills = () => {
        let tmp = ''
        crea.current.senses.forEach(sense => {
            tmp += '<span>' + sense + '</span>'
        })
        crea.current.skills.forEach(skill => {
            tmp += '<span>' + skill + '</span>'
        })
        return tmp
    }

    const setCurrentHPWithControl = (val) => {
        if(!crea.current.dead) {
            if(val <= 0) {
                setCurrentHP(val)
                setModalOpen(false)
                onDeath(crea.current)
            }
            else if(val > maxHP.current) {
                setCurrentHP(maxHP.current)
            }
            else {
                setCurrentHP(val)
            }
        }
    }

    // -------------------- Components --------------------

    const CreaCard = () => {
        let skills = ''
        let senses = ''
        let languages = ''

        crea.current.skills.forEach(skill => {
            skills += skill + '<br/>'
        })
        crea.current.senses.forEach(sense => {
            senses += sense + '<br/>'
        })
        crea.current.languages.forEach(language => {
            languages += language + '<br/>'
        })

        return (
            <div className='CreatureCard' >
                <div className="header">
                    <button onClick={() => setModalOpen(true)} > <i className='fas fa-bars'></i> </button>
                    <span>{crea.current.name}</span>
                    <button onClick={() => onDeleteClick(crea.current.name)} ><i className='fas fa-times'></i></button>
                </div>
                <div className="body">
                    <div className='hp-input'>
                        <i 
                            className='fas fa-minus'
                            onClick={() => setCurrentHPWithControl(currentHP - 1)}
                        ></i>
                        <i 
                            className='fas fa-minus'
                            onClick={() => setCurrentHPWithControl(currentHP - 10)}
                        > 10</i>
                        <input 
                            type='text'
                            value={currentHP + ' / ' + maxHP.current}
                            readOnly
                            disabled
                        />
                        <i 
                            className='fas fa-plus' 
                            onClick={() => setCurrentHPWithControl(currentHP + 10)}
                        > 10</i>
                        <i 
                            className='fas fa-plus' 
                            onClick={() => setCurrentHPWithControl(currentHP + 1)}
                        ></i>
                    </div>
                    <div>
                        <span>CA: {crea.current.armor}</span>
                        <span>Vitesse : {crea.current.speed}</span>
                    </div>
                    <table cellSpacing={0} >
                        <tbody>
                            <tr>
                                <th stat='for' >For</th>
                                <td stat='for' >{crea.current.stats.str.val} ({crea.current.stats.str.mod})</td>
                                <td stat='int' >{crea.current.stats.int.val} ({crea.current.stats.int.mod})</td>
                                <th stat='int' >Int</th>
                            </tr>
                            <tr>
                                <th stat='dex' >Dex</th>
                                <td stat='dex' >{crea.current.stats.dex.val} ({crea.current.stats.dex.mod})</td>
                                <td stat='sag' >{crea.current.stats.wis.val} ({crea.current.stats.wis.mod})</td>
                                <th stat='sag' >Sag</th>
                            </tr>
                            <tr>
                                <th stat='con' >Con</th>
                                <td stat='con' >{crea.current.stats.con.val} ({crea.current.stats.con.mod})</td>
                                <td stat='cha' >{crea.current.stats.cha.val} ({crea.current.stats.cha.mod})</td>
                                <th stat='cha' >Cha</th>
                            </tr>
                        </tbody>
                    </table>
                    <div dangerouslySetInnerHTML={ {__html: _makeSkills()} } />
                </div>
                <ReactModal
                    isOpen={modalOpen}
                    onRequestClose={() => setModalOpen(false)}
                    style={{
                        overlay: { backgroundColor: '#0008' }
                    }}
                    className='modal'
                >
                    <div className='left' >
                        <div>
                            <button onClick={() => setModalOpen(false)} > <i className='fas fa-times'></i> </button>
                            <div className='hp-input'>
                                <i 
                                    className='fas fa-minus'
                                    onClick={() => setCurrentHPWithControl(currentHP - 1)}
                                ></i>
                                <i 
                                    className='fas fa-minus'
                                    onClick={() => setCurrentHPWithControl(currentHP - 10)}
                                > 10</i>
                                <input 
                                    type='text'
                                    value={currentHP + ' / ' + maxHP.current}
                                    readOnly
                                    disabled
                                />
                                <i 
                                    className='fas fa-plus' 
                                    onClick={() => setCurrentHPWithControl(currentHP + 10)}
                                > 10</i>
                                <i 
                                    className='fas fa-plus' 
                                    onClick={() => setCurrentHPWithControl(currentHP + 1)}
                                ></i>
                            </div>
                        </div>
                        <div>
                            <span>{crea.current.name}</span>
                            <span>Dangerosité : {crea.current.dangerousness} ({crea.current.xp} XP)</span>
                        </div>
                        <div>
                            {crea.current.type} de taille {crea.current.size}
                        </div>
                        <div>
                            <span>CA : {crea.current.armor}</span>
                            <span>Vitesse : {crea.current.speed}</span>
                        </div>
                        <div>
                            <span>Compétences</span>
                            <div
                                dangerouslySetInnerHTML={{__html: skills}}
                            />
                        </div>
                        <div>
                            <span>Sens</span>
                            <div
                                dangerouslySetInnerHTML={{__html: senses}}
                            />
                        </div>
                        <div>
                            <span>Langue</span>
                            <div
                                dangerouslySetInnerHTML={{__html: languages}}
                            />
                        </div>
                    </div>
                    <div className='right' >
                        <div className='stats'>
                            <table cellSpacing={0} >
                                <tbody>
                                    <tr>
                                        <th>For</th>
                                        <th>Dex</th>
                                        <th>Con</th>
                                        <th>Int</th>
                                        <th>Sag</th>
                                        <th>Cha</th>
                                    </tr>
                                    <tr>
                                        <td>{crea.current.stats.str.val} ({crea.current.stats.str.mod > 0 ? '+' + crea.current.stats.str.mod : crea.current.stats.str.mod})</td>
                                        <td>{crea.current.stats.dex.val} ({crea.current.stats.dex.mod > 0 ? '+' + crea.current.stats.dex.mod : crea.current.stats.dex.mod})</td>
                                        <td>{crea.current.stats.con.val} ({crea.current.stats.con.mod > 0 ? '+' + crea.current.stats.con.mod : crea.current.stats.con.mod})</td>
                                        <td>{crea.current.stats.int.val} ({crea.current.stats.int.mod > 0 ? '+' + crea.current.stats.int.mod : crea.current.stats.int.mod})</td>
                                        <td>{crea.current.stats.wis.val} ({crea.current.stats.wis.mod > 0 ? '+' + crea.current.stats.wis.mod : crea.current.stats.wis.mod})</td>
                                        <td>{crea.current.stats.cha.val} ({crea.current.stats.cha.mod > 0 ? '+' + crea.current.stats.cha.mod : crea.current.stats.cha.mod})</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='abilities'>
                            <span>Capacités</span>
                            <div>
                                {
                                    crea.current.abilities.map(ability => <AbilitiesItem ability={ability} />)
                                }
                            </div>
                        </div>
                        <div className='actions'>
                            <span>Actions</span>
                            <div>
                                {
                                    crea.current.actions.map(action => <ActionsItem action={action} />)
                                }
                            </div>
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }

    const LootCard = () => {
        return (
            <div className='LootCard' >
                <div className="header">
                    <button > <i className='fas fa-bars'></i> </button>
                    <span>{crea.current.name}</span>
                    <button onClick={() => onDeleteClick(crea.current.name)} ><i className='fas fa-times'></i></button>
                </div>
                <div className="body" dangerouslySetInnerHTML={{__html: crea.current.loot.join('<br/>')}} >
                </div>
            </div>
        )
    }
    
    if(crea.current.dead) {
        return (
            <LootCard />
        )
    }
    else {
        return (
            <CreaCard />
        )
    }
}

export default CreatureCard
