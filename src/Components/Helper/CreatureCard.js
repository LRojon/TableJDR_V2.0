import React, { useRef, useState } from 'react'
import ReactModal from 'react-modal'
import '../../Styles/CreatureCard.css'
import AbilitiesItem from './AbilitiesItem'
import ActionsItem from './ActionsItem'
import Randomizer from './Randomizer'

const CreatureCard = ({ creature, onDeleteClick }) => {

    const [crea, setCrea] = useState(creature)
    const maxHP = useRef(Randomizer(creature.hp.random))
    const [currentHP, setCurrentHP] = useState(maxHP.current)
    const [modalOpen, setModalOpen] = useState(false)

    const _makeSkills = () => {
        let tmp = ''
        crea.senses.forEach(sense => {
            tmp += '<span>' + sense + '</span>'
        })
        crea.skills.forEach(skill => {
            tmp += '<span>' + skill + '</span>'
        })
        return tmp
    }

    const makeLoot = () => {
        let loot = {
            name: crea.name,
            _id: crea._id,
            loot: true
        }

        setCrea(loot)
    }

    const setCurrentHPWithControl = (val) => {
        if(val <= 0) {
            setCurrentHP(val)
            makeLoot()
        }
        else if(val > maxHP.current) {
            setCurrentHP(maxHP.current)
        }
        else {
            setCurrentHP(val)
        }
    }

    // -------------------- Components --------------------

    const CreaCard = () => {
        let skills = ''
        let senses = ''
        let languages = ''

        crea.skills.forEach(skill => {
            skills += skill + '<br/>'
        })
        crea.senses.forEach(sense => {
            senses += sense + '<br/>'
        })
        crea.languages.forEach(language => {
            languages += language + '<br/>'
        })

        return (
            <div className='CreatureCard' >
                <div className="header">
                    <button onClick={() => setModalOpen(true)} > <i className='fas fa-bars'></i> </button>
                    <span>{crea.name}</span>
                    <button onClick={() => onDeleteClick(crea.name)} ><i className='fas fa-times'></i></button>
                </div>
                <div className="body">
                    <div className='hp-input'>
                        <i 
                            className='fas fa-minus'
                            onClick={() => setCurrentHPWithControl(currentHP - 1)}
                        ></i>
                        <input 
                            type='text'
                            value={currentHP + ' / ' + maxHP.current}
                            readOnly
                            disabled
                        />
                        <i 
                            className='fas fa-plus' 
                            onClick={() => setCurrentHPWithControl(currentHP + 1)}
                        ></i>
                    </div>
                    <div>
                        <span>CA: {crea.armor}</span>
                        <span>Vitesse : {crea.speed}</span>
                    </div>
                    <table cellSpacing={0} >
                        <tbody>
                            <tr>
                                <th stat='for' >For</th>
                                <td stat='for' >{crea.stats.str.val} ({crea.stats.str.mod})</td>
                                <td stat='int' >{crea.stats.int.val} ({crea.stats.int.mod})</td>
                                <th stat='int' >Int</th>
                            </tr>
                            <tr>
                                <th stat='dex' >Dex</th>
                                <td stat='dex' >{crea.stats.dex.val} ({crea.stats.dex.mod})</td>
                                <td stat='sag' >{crea.stats.wis.val} ({crea.stats.wis.mod})</td>
                                <th stat='sag' >Sag</th>
                            </tr>
                            <tr>
                                <th stat='con' >Con</th>
                                <td stat='con' >{crea.stats.con.val} ({crea.stats.con.mod})</td>
                                <td stat='cha' >{crea.stats.cha.val} ({crea.stats.cha.mod})</td>
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
                                <input 
                                    type='text'
                                    value={currentHP + ' / ' + maxHP.current}
                                    readOnly
                                    disabled
                                />
                                <i 
                                    className='fas fa-plus' 
                                    onClick={() => setCurrentHPWithControl(currentHP + 1)}
                                ></i>
                            </div>
                        </div>
                        <div>
                            <span>{crea.name}</span>
                            <span>Dangerosité : {crea.dangerousness} ({crea.xp} XP)</span>
                        </div>
                        <div>
                            {crea.type} de taille {crea.size}
                        </div>
                        <div>
                            <span>CA : {crea.armor}</span>
                            <span>Vitesse : {crea.speed}</span>
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
                                        <td>{crea.stats.str.val} ({crea.stats.str.mod > 0 ? '+' + crea.stats.str.mod : crea.stats.str.mod})</td>
                                        <td>{crea.stats.dex.val} ({crea.stats.dex.mod > 0 ? '+' + crea.stats.dex.mod : crea.stats.dex.mod})</td>
                                        <td>{crea.stats.con.val} ({crea.stats.con.mod > 0 ? '+' + crea.stats.con.mod : crea.stats.con.mod})</td>
                                        <td>{crea.stats.int.val} ({crea.stats.int.mod > 0 ? '+' + crea.stats.int.mod : crea.stats.int.mod})</td>
                                        <td>{crea.stats.wis.val} ({crea.stats.wis.mod > 0 ? '+' + crea.stats.wis.mod : crea.stats.wis.mod})</td>
                                        <td>{crea.stats.cha.val} ({crea.stats.cha.mod > 0 ? '+' + crea.stats.cha.mod : crea.stats.cha.mod})</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='abilities'>
                            <span>Capacités</span>
                            <div>
                                {
                                    crea.abilities.map(ability => <AbilitiesItem ability={ability} />)
                                }
                            </div>
                        </div>
                        <div className='actions'>
                            <span>Actions</span>
                            <div>
                                {
                                    crea.actions.map(action => <ActionsItem action={action} />)
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
            <div>
                Coucou
            </div>
        )
    }
    
    if(crea.loot) {
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
