import React, { useRef, useState } from 'react'
import '../../Styles/CreatureCard.css'
import Randomizer from './Randomizer'

const CreatureCard = ({ creature, onDeleteClick }) => {

    const maxHP = useRef(Randomizer(creature.hp.random))
    const [currentHP, setCurrentHP] = useState(maxHP.current)

    const _makeSkills = () => {
        let tmp = ''
        creature.senses.forEach(sense => {
            tmp += '<span>' + sense + '</span>'
        })
        creature.skills.forEach(skill => {
            tmp += '<span>' + skill + '</span>'
        })
        console.log(tmp)
        return tmp
    }

    return (
        <div className='CreatureCard'>
            <div className="header">
                <span>{creature.name}</span>
                <button onClick={() => onDeleteClick()} ><i className='fas fa-times'></i></button>
            </div>
            <div className="body">
                <div>
                    <i 
                        className='fas fa-minus'
                        onClick={() => setCurrentHP(currentHP !== 0 ? currentHP - 1 : 0)}
                    ></i>
                    <input 
                        type='text'
                        value={currentHP + ' / ' + maxHP.current}
                        readOnly
                        disabled
                    />
                    <i 
                        className='fas fa-plus' 
                        onClick={() => setCurrentHP(currentHP !== maxHP.current ? currentHP + 1 : maxHP.current)}
                    ></i>
                </div>
                <div>
                    <span>CA: {creature.armor}</span>
                    <span>Vitesse : {creature.speed}</span>
                </div>
                <table cellSpacing={0} >
                    <tbody>
                        <tr>
                            <th stat='for' >For</th>
                            <td stat='for' >{creature.stats.str.val} ({creature.stats.str.mod})</td>
                            <td stat='int' >{creature.stats.int.val} ({creature.stats.int.mod})</td>
                            <th stat='int' >Int</th>
                        </tr>
                        <tr>
                            <th stat='dex' >Dex</th>
                            <td stat='dex' >{creature.stats.dex.val} ({creature.stats.dex.mod})</td>
                            <td stat='sag' >{creature.stats.wis.val} ({creature.stats.wis.mod})</td>
                            <th stat='sag' >Sag</th>
                        </tr>
                        <tr>
                            <th stat='con' >Con</th>
                            <td stat='con' >{creature.stats.con.val} ({creature.stats.con.mod})</td>
                            <td stat='cha' >{creature.stats.cha.val} ({creature.stats.cha.mod})</td>
                            <th stat='cha' >Cha</th>
                        </tr>
                    </tbody>
                </table>
                <div dangerouslySetInnerHTML={ {__html: _makeSkills()} } />
            </div>
        </div>
    )
}

export default CreatureCard
