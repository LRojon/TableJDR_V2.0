import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Creatures from './Creatures'
import Players from './Players'
import Tools from './Tools'
import '../Styles/Main.css'

library.add(fas)

const Main = ({ className, timeline, updateTimeline }) => {

    const [currentTab, setCurrentTab] = useState('creatures')
    const [user, setUser] = useState(null)

    return (
        <div className={className} >
            <nav>
                <i style={{fontSize: 48, color: 'white'}} className='fal fa-dice-d20' ></i>
                <span onClick={() => setCurrentTab('creatures')} className={currentTab === 'creatures' ? 'selected tab-item' : 'tab-item'} >Créatures</span>
                <span onClick={() => setCurrentTab('players')} className={currentTab === 'players' ? 'selected tab-item' : 'tab-item'} >Joueurs</span>
                <span onClick={() => setCurrentTab('tools')} className={currentTab === 'tools' ? 'selected tab-item' : 'tab-item'} >Outils</span>
                <span name='username' >{user ? 
                    <div>
                        <i className='fas fa-user' ></i>{user.username}
                        <button name='signOut' onClick={() => setUser(null)} >
                            <i className='fas fa-sign-out-alt' ></i>
                        </button>
                    </div> : null}
                </span>
            </nav>
            <Creatures 
                show={currentTab === 'creatures'} 
                timeline={timeline} 
                updateTimeline={updateTimeline} 
            />
            <Players 
                show={currentTab === 'players'} 
                timeline={timeline} 
                updateTimeline={updateTimeline} 
                user={user}
                setUser={setUser}
            />
            <Tools style={{display: currentTab === 'tools' ? 'block' : 'none'}} />
        </div> 
    )
}

export default Main
