import React, { useState } from 'react'
import ReactModal from 'react-modal'
import '../../Styles/PlayerCard.css'

const PlayerCard = ({ player, onEditPlayer, onDeleteClick }) => {

    const [modal, setModal] = useState(false)
    const [hp, setHp] = useState(player.hp)
    const [lvl, setLvl] = useState(player.lvl)
    const [speed, setSpeed] = useState(player.speed)
    const [armor, setArmor] = useState(player.armor)
    const [stats, setStats] = useState(player.stats)
    const [mastery, setMastery] = useState(player.mastery.join('\n'))

    const _modifyPlayer = () => {
        let newPlayer = {
            name: player.name,
            hp: parseInt(hp),
            lvl: parseInt(lvl),
            speed: speed,
            armor: parseInt(armor),
            stats: stats,
            mastery: mastery.split('\n')
        }
        onEditPlayer(newPlayer)
        setModal(false)
    }

    return (
        <div className='PlayerCard' >
            <div className='header' >
                <button onClick={() => setModal(true)} ><i className='fas fa-edit'></i></button>
                <span>{player.name}&nbsp;({player.lvl})</span>
                <button onClick={() => onDeleteClick()} ><i className='fas fa-times'></i></button>
            </div>
            <div className='body' >
                <div>
                    <span>PV Max : {player.hp}</span>
                    <span>CA : {player.armor}</span>
                </div>
                <div>Vitesse : {player.speed}</div>
                <div className='stats' >
                    <div>
                        <div name='str' >
                            <div className='label' >For</div>
                            <div>
                                <span>{player.stats.str.val}</span>
                                <span>{player.stats.str.mod >= 0 ? '+' + player.stats.str.mod : player.stats.str.mod}</span>
                            </div>
                        </div>
                        <div name='dex' >
                            <div className='label' >Dex</div>
                            <div>
                                <span>{player.stats.dex.val}</span>
                                <span>{player.stats.dex.mod >= 0 ? '+' + player.stats.dex.mod : player.stats.dex.mod}</span>
                            </div>
                        </div>
                        <div name='con' >
                            <div className='label' >Con</div>
                            <div>
                                <span>{player.stats.con.val}</span>
                                <span>{player.stats.con.mod >= 0 ? '+' + player.stats.con.mod : player.stats.con.mod}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div name='int' >
                            <div>
                                <span>{player.stats.int.val}</span>
                                <span>{player.stats.int.mod >= 0 ? '+' + player.stats.int.mod : player.stats.int.mod}</span>
                            </div>
                            <div className='label reverse' >Int</div>
                        </div>
                        <div name='wis' >
                            <div>
                                <span>{player.stats.wis.val}</span>
                                <span>{player.stats.wis.mod >= 0 ? '+' + player.stats.wis.mod : player.stats.wis.mod}</span>
                            </div>
                            <div className='label reverse' >Sag</div>
                        </div>
                        <div name='cha' >
                            <div>
                                <span>{player.stats.cha.val}</span>
                                <span>{player.stats.cha.mod >= 0 ? '+' + player.stats.cha.mod : player.stats.cha.mod}</span>
                            </div>
                            <div className='label reverse' >Cha</div>
                        </div>
                    </div>
                </div>
                <div className='mastery' >
                    {
                        player.mastery.map(el => <div className='masteryItem' >{el}</div>)
                    }
                </div>
            </div>
            <ReactModal
                isOpen={modal}
                onRequestClose={() => setModal(false)}
                style={{
                    overlay: { backgroundColor: '#0008' }
                }}
                className='modal custom'
            >
                <div className='playerModal' >
                    <div className='header'>
                        <h2>Ajouter un personnage</h2>
                        <button onClick={() => setModal(false)}><i className='fas fa-times'></i></button>
                    </div>
                    <div className='body'>
                        <div className='simple'>
                            <div>
                                <input 
                                    value={player.name}
                                    readOnly
                                    disabled
                                    type='text' 
                                    placeholder='Nom' 
                                />
                            </div>
                            <div>
                                Niveau :&nbsp;
                                <input 
                                    value={lvl}
                                    onChange={(e) => setLvl(parseInt(e.target.value))}
                                    type='number' 
                                    placeholder='Niveau' 
                                />
                            </div>
                            <div>
                                PV Max :&nbsp;
                                <input 
                                    value={hp}
                                    onChange={(e) => setHp(parseInt(e.target.value))}
                                    type='number' 
                                    placeholder='PV Max' 
                                />
                            </div>
                            <div>
                                Vitesse :&nbsp;
                                <input 
                                    value={speed} 
                                    type='text' 
                                    placeholder='Vitesse' 
                                    onChange={(e) => setSpeed(e.target.value)}
                                    onBlur={(e) => setSpeed(e.target.value.split('m')[0] + 'm (' + Math.ceil(parseInt(e.target.value.split('m')[0]) / 1.5) + ' cases)')} 
                                />
                            </div>
                            <div>
                                CA :&nbsp;
                                <input 
                                    value={armor}
                                    onChange={(e) => setArmor(parseInt(e.target.value))}
                                    type='number' 
                                    placeholder='CA' 
                                />
                            </div>
                        </div>
                        <div className='complex'>
                            <div className='stats' >
                                {
                                    ['str', 'dex', 'con', 'int', 'wis', 'cha'].map(el => {
                                        let statToDisplay = el === 'str' ? 'for' : (el === 'wis' ? 'sag' : el)
                                        return (
                                            <div name={el} key={el}>
                                                <div>{statToDisplay.toUpperCase()}</div>
                                                <div>
                                                    <input 
                                                        value={stats[el].val} 
                                                        onChange={(e) => {
                                                            let tmp = {...stats }
                                                            tmp[el].val = e.target.value
                                                            tmp[el].mod = Math.floor((e.target.value - 10) / 2)
                                                            setStats(tmp)
                                                        }}
                                                        type='number'
                                                    />
                                                    <input value={stats[el].mod} type='text' disabled readOnly />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <textarea value={mastery} onChange={(e) => setMastery(e.target.value)} className='mastery' placeholder='Maîtrise' />
                        </div>
                    </div>
                    <div className='footer'>
                        <button onClick={() => _modifyPlayer()} >Modifier</button>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default PlayerCard
