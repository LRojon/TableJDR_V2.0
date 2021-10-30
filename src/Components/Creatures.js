import React, { useState } from 'react'
import Tree from 'react-animated-tree-v2'
import '../Styles/Creatures.css'
import creatures from '../Data/Creatures'
import CreatureCard from './Helper/CreatureCard'
import CustomTree from './Helper/CustomTree'
import { makeHoardLoot, makeIndividualLoot } from './Helper/Loot'
import Randomizer from './Helper/Randomizer'

const Creatures = ({ show, timeline, updateTimeline }) => {

    const [treeSort, setTreeSort] = useState('type')
    const [tmpCreatures, setTmpCreatures] = useState(creatures)
    const [isSearch, setIsSearch] = useState(false)
    const [focus, setFocus] = useState([])
    const [hoardLvl, setHoardLvl] = useState(0)

    const makeTree = (sort) => {
        let categories = []

        switch(sort) {
            case 'name':
                categories = tmpCreatures.reduce((prev, current) => prev.includes(current.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 1)) ? prev : [...prev, current.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 1)], [])
                categories.sort((a, b) => a.normalize("NFD").replace(/[\u0300-\u036f]/g, "") < b.normalize("NFD").replace(/[\u0300-\u036f]/g, "") ? -1 : 1 )
                break;
            case 'dangerousness':
                categories = tmpCreatures.reduce((prev, current) => prev.includes(current[sort]) ? prev : [...prev, current[sort]], [])
                categories.sort((a, b) => parseInt(a) < parseInt(b) ? -1 : 1 )
                break;
            case 'type':
                categories = tmpCreatures.reduce((prev, current) => prev.includes(current[sort].split(' (')[0]) ? prev : [...prev, current[sort].split(' (')[0]], [])
                categories.sort((a, b) => a.normalize("NFD").replace(/[\u0300-\u036f]/g, "") < b.normalize("NFD").replace(/[\u0300-\u036f]/g, "") ? -1 : 1 )
                break;
            default:
                categories = tmpCreatures.reduce((prev, current) => prev.includes(current[sort]) ? prev : [...prev, current[sort]], [])
                categories.sort((a, b) => a < b ? -1 : 1 )
                break;
        }

        return (
            <Tree 
                icons={{plusIcon: (props) => <i {...props} className='fad fa-books' ></i>, minusIcon: (props) => <i {...props} className='fad fa-books' ></i>}} 
                content={`Créatures (${tmpCreatures.length})`} 
                open
            >
                {
                    categories.map(elem => {
                        return (
                            <CustomTree key={elem} content={elem} >
                                {
                                    tmpCreatures.filter(creature => isInCategory(sort, creature, elem))
                                    .sort((a, b) => a.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "") < b.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "") ? -1 : 1)
                                    .map(el => {
                                        return (
                                            <CustomTree 
                                                key={el.name}
                                                style={{cursor: 'pointer'}}
                                                onItemClick={() => addToFocus(el.name)} 
                                                content={el.name} 
                                            />
                                        )
                                    })
                                }
                            </CustomTree>
                        )
                    })
                }
            </Tree>
        )
    }

    const isInCategory = (sort, creature, category) => {
        switch(sort) {
            case 'name':
                return creature.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 1) === category
            case 'type':
                return creature.type.split(' (')[0] === category
            default:
                return creature[sort] === category
        }
    }

    const searchByName = (name) => {
        name = name !== '' && name !== null ? name : ''
        name = name.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if(name !== '') {
            let tmp = []
            creatures.forEach(crea => {
                if(crea.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(name)) { tmp.push(crea) }
            })
            setTmpCreatures(tmp)
        }
        else {
            setTmpCreatures(creatures)
        }
    }

    const addToFocus = (name) => {
        let crea = {
            ...creatures.find(elem => elem.name === name), 
            loot: [], 
            dead: false, 
            init: Randomizer('1d20+' + creatures.find(elem => elem.name === name).stats.dex.mod)
        }
        updateTimeline(([...timeline, crea]).sort((a, b) => b.init - a.init))
        setHoardLvl(hoardLvl + eval(crea.dangerousness))
        if(focus.filter(elem => elem._id === crea._id).length === 0) { crea.name += ' 1' }
        else { 
            let n = 2
            focus.forEach(elem => {
                const number = parseInt(elem.name.split(' ')[elem.name.split(' ').length - 1])
                if(n <= number) { n = number + 1 }
            })
            crea.name += ' ' + n 
        }
        let allDead = focus.filter(e => e.dead).sort((a, b) => a.name > b.name ? 1 : -1)
        let other = focus.filter(e => !e.dead)
        other.push(crea)
        setFocus(other.concat(allDead))
    }

    const delFromFocus = (name) => {
        if(name === 'Loot') {
            setHoardLvl(0)
            setFocus([])
            updateTimeline([])
        }
        else {
            setHoardLvl(hoardLvl - eval(focus.find(elem => elem.name === name).dangerousness))
            setFocus(focus.filter(elem => elem.name !== name))
            updateTimeline(timeline.filter(elem => elem.name !== name))
        }
    }

    const onDeath = (crea) => {
        crea.loot = makeIndividualLoot(eval(crea.dangerousness))
        crea.dead = true
        let tmp = [...focus]
        tmp[tmp.findIndex(e => e.name === crea.name)] = crea

        let allDead = tmp.filter(e => e.dead).sort((a, b) => a.name > b.name ? 1 : -1)
        let other = tmp.filter(e => !e.dead)
        let loot = null
        if(other.length === 0) {
            loot = {
                ...crea,
                name: "Loot",
                dead: true,
                loot: makeHoardLoot(Math.ceil(hoardLvl))
            }
            other.push(loot)
        }
        setFocus(other.concat(allDead))
        updateTimeline(timeline.filter(elem => elem.name !== crea.name))
    }

    const _makeFocus = () => {
        return (
            <div className='focus' >
                {
                    focus.map(elem => {
                        return (
                            <CreatureCard
                                key={elem.name}
                                creature={elem}
                                onDeleteClick={(name) => delFromFocus(name)}
                                onDeath={(crea) => onDeath(crea)}
                            />
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={show ? 'Creature show' : 'Creature'} >
            <div className='tree' >
                <div>
                    <input 
                        type='text' 
                        defaultValue={''}
                        onChange={ (e) => { 
                            setIsSearch(!isSearch)
                            searchByName(e.target.value)
                        } }
                        placeholder='Recherche...'
                    />
                </div>
                <div className='sort'>
                    <select value={treeSort} onChange={(e) => setTreeSort(e.target.value)} >
                        <option value='type' >Type</option>
                        <option value='name' >Nom</option>
                        <option value='dangerousness' >Dangerosité</option>
                        <option value='armor' >Classe d'armure</option>
                        <option value='xp' >Points d'XP donné</option>
                    </select>
                </div>
                <div>
                    {
                        makeTree(treeSort)
                    }
                </div>
            </div>
            {
                _makeFocus()
            }
        </div>
    )
}

export default Creatures
