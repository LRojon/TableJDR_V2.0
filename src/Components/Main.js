import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Creatures from './Creatures'
import Players from './Players'
import Tools from './Tools'
import '../Styles/Main.css'

library.add(fas)

const Main = ({ className }) => {

    const [currentTab, setCurrentTab] = useState('creatures')

    return (
        <div className={className} >
            <nav>
                <FontAwesomeIcon style={{fontSize: 48, color: 'white'}} icon='dice-d20' />
                <span onClick={() => setCurrentTab('creatures')} className={currentTab === 'creatures' ? 'selected tab-item' : 'tab-item'} >Créatures</span>
                <span onClick={() => setCurrentTab('players')} className={currentTab === 'players' ? 'selected tab-item' : 'tab-item'} >Joueurs</span>
                <span onClick={() => setCurrentTab('tools')} className={currentTab === 'tools' ? 'selected tab-item' : 'tab-item'} >Outils</span>
            </nav>
            <Creatures style={{display: currentTab === 'creatures' ? 'block' : 'none'}} />
            <Players style={{display: currentTab === 'players' ? 'block' : 'none'}} />
            <Tools style={{display: currentTab === 'tools' ? 'block' : 'none'}} />
        </div> 
    )
}

export default Main
