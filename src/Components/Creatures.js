import React, { useState } from 'react'
import Tree from 'react-animated-tree-v2'
import '../Styles/Creatures.css'
import creatures from '../Data/Creatures'
import CreatureCard from './Helper/CreatureCard'

const CustomTree = (props) => (
    <Tree
        icons={{
            plusIcon: (props) => <i {...props} className='fad fa-book' ></i>,
            minusIcon: (props) => <i {...props} className='fad fa-book-open' ></i>,
            closeIcon: props.player ? (props) => <i {...props} className='fad fa-scroll-old' ></i> : (props) => <i {...props} className='fad fa-paw-claws' ></i>
        }}
        {...props}
    />
)

const Creatures = ({ show }) => {

    const [treeSort, setTreeSort] = useState('name')
    const [tmpCreatures, setTmpCreatures] = useState(creatures)
    const [isSearch, setIsSearch] = useState(false)

    const makeTree = (sort) => {
        let categories = []

        switch(sort) {
            case 'name':
                categories = tmpCreatures.reduce((prev, current) => prev.includes(current.name.substring(0, 1)) ? prev : [...prev, current.name.substring(0, 1)], [])
                categories.sort((a, b) => a < b ? -1 : 1 )
                break;
            case 'size':
                categories = ['Très petite', 'Petite', 'Moyenne', 'Grande', 'Très grande', 'Gigantesque']
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
                        return <CustomTree content={elem} >
                            {
                                tmpCreatures.filter(creature => isInCategory(sort, creature, elem))
                                .sort((a, b) => a.name < b.name ? -1 : 1)
                                .map(el => {
                                    return (
                                        <CustomTree content={el.name} />
                                    )
                                })
                            }
                        </CustomTree>
                    })
                }
            </Tree>
        )
    }

    const isInCategory = (sort, creature, category) => {
        switch(sort) {
            case 'name':
                return creature.name.substring(0, 1) === category
            default:
                return creature[sort] === category
        }
    }

    const searchByName = (name) => {
        name = name !== '' && name !== null ? name : ''
        name = name.trim().toLowerCase()
        if(name !== '') {
            console.log(name)
            let tmp = []
            creatures.forEach(crea => {
                if(crea.name.toLowerCase().includes(name)) { tmp.push(crea) }
            })
            setTmpCreatures(tmp)
        }
        else {
            console.log('name to search is empty')
            setTmpCreatures(creatures)
        }
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
                        <option value='name' >Nom</option>
                        <option value='type' >Type</option>
                        <option value='dangerousness' >Dangerosité</option>
                        <option value='armor' >Classe d'armure</option>
                        <option value='size' >Taille</option>
                        <option value='xp' >Points d'XP donné</option>
                    </select>
                </div>
                <div>
                    {
                        makeTree(treeSort)
                    }
                </div>
            </div>
            <div className='focus' >
                <CreatureCard creature={creatures[0]} />
            </div>
        </div>
    )
}

export default Creatures
