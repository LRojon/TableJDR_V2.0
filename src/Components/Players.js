import React, { useEffect, useState } from 'react'
import Tree from 'react-animated-tree-v2'
import '../Styles/Players.css'
import CustomTree from './Helper/CustomTree'
import loader from '../Assets/Images/loader_white.gif'
import useContextMenu from 'contextmenu'
import 'contextmenu/ContextMenu.css'
import Login from './Helper/Login'
import ReactModal from 'react-modal'
import { useRef } from 'react'

const PartyTree = ({ parties, onAddPlayer, onDeletePlayer }) => {
    const [contextMenu, useCM] = useContextMenu() 

    const _makePlayerMenu = (player) => {
        let config = {}
        config[player.name] = null
        config['Line'] = '---'
        config['Modifier'] = () => console.log('Player modify')
        config['Supprimer'] = () => onDeletePlayer(player)
        return config
    }
    const _makePartyMenu = (party) => {
        let config = {}
        config[party.name] = null
        config['Line'] = '---'
        config['Ajouter personnage'] = () => onAddPlayer(party)
        config['Modifier groupe'] = null//() => console.log('Modify')
        config['Supprimer'] = () => console.log('Delete')
        return config
    }

    const PlayerItem = ({ player }) => {
        return (
            <div key={player._id} onContextMenu={useCM(_makePlayerMenu(player))} >
                <CustomTree 
                    content={player.name} 
                    style={{ cursor: 'pointer' }}
                    player 
                />
            </div>
        )
    }

    const PartyItem = ({ party }) => {
        return (
            <div key={party._id} onContextMenu={useCM(_makePartyMenu(party))} >
                <CustomTree content={party.name}>
                    {
                        party.players.map(player => <PlayerItem player={player} />)
                    }
                </CustomTree>
            </div>
        )
    }

    return (
        <Tree
            icons={{plusIcon: (props) => <i {...props} className='fad fa-books' ></i>, minusIcon: (props) => <i {...props} className='fad fa-books' ></i>}} 
            content='Personnages'
            open
        >
            {
                parties.map(party => <PartyItem party={party} />)
            }
            {contextMenu}
        </Tree>
    )
}

const Players = ({ show, timeline, updateTimeline, user, setUser }) => {

    const [parties, setParties] = useState([])
    const [partiesIsLoading, setPartiesIsLoading] = useState(false)
    const [partiesChange, setPartiesChange] = useState(false)

    const [partyModal, setPartyModal] = useState(false)
    const partyName = useRef(null)

    const [playerModal, setPlayerModal] = useState(false)
    const [newPlayerParty, setNewPlayerParty] = useState(null)
    const [playerStats, setPlayerStats] = useState({
        for: {
            val: 10,
            mod: 0
        },
        dex: {
            val: 10,
            mod: 0
        },
        con: {
            val: 10,
            mod: 0
        },
        int: {
            val: 10,
            mod: 0
        },
        sag: {
            val: 10,
            mod: 0
        },
        cha: {
            val: 10,
            mod: 0
        }
    })
    const playerName = useRef(null)
    const lvl = useRef(null)
    const hp = useRef(null)
    const speed = useRef(null)
    const armor = useRef(null)
    const mastery = useRef(null)

    useEffect(() => {
        if(user !== null) {
            setPartiesIsLoading(true)
            fetch('https://table.lrojon.fr/parties/get/all', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    token: user.token
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.forEach(party => {
                    let tmpPlayers = [...party.players]
                    party.players = []
                    tmpPlayers.forEach(player => {
                        fetch('https://table.lrojon.fr/players/get/name/' + player, {
                            method: 'POST',
                            headers: {
                                'Content-type' : 'application/json'
                            },
                            body: JSON.stringify({
                                token: user.token
                            })
                        })
                        .then(res => res.json())
                        .then(d => {
                            party.players.push(d)
                        })
                    })
                })
                setParties(data)
                setPartiesIsLoading(false)
            })
        }
    }, [user, partiesChange])

    const _createParty = () => {
        let body = {
            token: user.token,
            party: {
                    name: partyName.current.value,
                    players: []
            }
        }
        fetch('https://table.lrojon.fr/parties/set/one', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(async res => {
            alert(await res.text()); 
            setPartiesChange(!partiesChange); 
            setPartyModal(false)
        })
    }

    const _createPlayer = () => {
        let body = {
            token: user.token,
            character: {
                name: playerName.current.value,
                lvl: lvl.current.value,
                hp: hp.current.value,
                speed: speed.current.value,
                armor: armor.current.value,
                mastery: mastery.current.value.split('\n'),
                stats: {
                    str: {
                        val: parseInt(playerStats.for.val),
                        mod: playerStats.for.mod
                    },
                    dex: {
                        val: parseInt(playerStats.dex.val),
                        mod: playerStats.dex.mod
                    },
                    con: {
                        val: parseInt(playerStats.con.val),
                        mod: playerStats.con.mod
                    },
                    int: {
                        val: parseInt(playerStats.int.val),
                        mod: playerStats.int.mod
                    },
                    wis: {
                        val: parseInt(playerStats.sag.val),
                        mod: playerStats.sag.mod
                    },
                    cha: {
                        val: parseInt(playerStats.cha.val),
                        mod: playerStats.cha.mod
                    }
                }
            }
        }

        fetch('https://table.lrojon.fr/players/set/one', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(async res => {
            alert(await res.text())

            let tmp = {...newPlayerParty}
            tmp.players.push(playerName.current.value)
            console.log({
                token : user.token,
                party: newPlayerParty
            });
            fetch('https://table.lrojon.fr/parties/set/one', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    token : user.token,
                    party: newPlayerParty
                })
            })
            .then(res => {
                setPlayerModal(false)
                setPartiesChange(!partiesChange)
            })
        })
    }

    if(user) {
        return (
            <div className={ show ? 'Player show' : 'Player' } >
                <div className="tree" >
                    <div className="header">
                        <button onClick={() => setPartyModal(true)} >Ajouter un groupe</button>
                    </div>
                    <div>
                        {
                            partiesIsLoading ?
                                <img src={loader} style={{color: 'white', width: 235, height: 235}} alt='Loading...' />
                            :
                                <PartyTree 
                                    parties={parties}
                                    onAddPlayer={(party) => {
                                        setNewPlayerParty(party)
                                        setPlayerModal(true)
                                    }}
                                    onDeletePlayer={(player) => console.log(player)}
                                />
                        }
                    </div>
                </div>
                <div className='focus'>

                </div>
                <ReactModal
                    isOpen={partyModal}
                    onRequestClose={() => setPartyModal(false)}
                    style={{
                        overlay: { backgroundColor: '#0008' }
                    }}
                    className='modal custom'
                >
                    <div className='partyModal'>
                        <div className='header' >
                            <h2>Ajouter un groupe</h2>
                            <button onClick={() => setPartyModal(false)}><i className='fas fa-times'></i></button>
                        </div>
                        <div className='body' >
                            <input
                                placeholder='Nom du groupe'
                                ref={partyName}
                            />
                        </div>
                        <div className='footer'>
                            <button onClick={() => _createParty()} >Créer</button>
                        </div>
                    </div>
                </ReactModal>
                <ReactModal
                    isOpen={playerModal}
                    onRequestClose={() => setPlayerModal(false)}
                    style={{
                        overlay: { backgroundColor: '#0008' }
                    }}
                    className='modal custom'
                >
                    <div className='playerModal' >
                        <div className='header'>
                            <h2>Ajouter un personnage</h2>
                            <button onClick={() => setPlayerModal(false)}><i className='fas fa-times'></i></button>
                        </div>
                        <div className='body'>
                            <div className='simple'>
                                <div>
                                    <input 
                                        ref={playerName} 
                                        type='text' 
                                        placeholder='Nom' 
                                    />
                                </div>
                                <div>
                                    <input 
                                        ref={lvl} 
                                        type='number' 
                                        placeholder='Niveau' 
                                    />
                                </div>
                                <div>
                                    <input 
                                        ref={hp} 
                                        type='number' 
                                        placeholder='PV Max' 
                                    />
                                </div>
                                <div>
                                    <input 
                                        ref={speed} 
                                        type='text' 
                                        placeholder='Vitesse' 
                                        onBlur={(e) => speed.current.value = e.target.value.split('m')[0] + 'm (' + Math.ceil(parseInt(e.target.value.split('m')[0]) / 1.5) + ' cases)'} 
                                    />
                                </div>
                                <div>
                                    <input 
                                        ref={armor} 
                                        type='number' 
                                        placeholder='CA' 
                                    />
                                </div>
                            </div>
                            <div className='complex'>
                                <div className='stats' >
                                    {
                                        ['for', 'dex', 'con', 'int', 'sag', 'cha'].map(el => {
                                            return (
                                                <div name={el} key={el}>
                                                    <div>{el.toUpperCase()}</div>
                                                    <div>
                                                        <input 
                                                            value={playerStats[el].val} 
                                                            onChange={(e) => {
                                                                let tmp = {...playerStats }
                                                                tmp[el].val = e.target.value
                                                                tmp[el].mod = Math.floor((e.target.value - 10) / 2)
                                                                setPlayerStats(tmp)
                                                            }}
                                                            type='number'
                                                        />
                                                        <input value={playerStats[el].mod} type='text' disabled readOnly />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <textarea ref={mastery} className='mastery' placeholder='Maîtrise' />
                            </div>
                        </div>
                        <div className='footer'>
                            <button onClick={() => _createPlayer()} >Ajouter</button>
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
    else {
        return (
            <div className={ show ? 'Player show' : 'Player' } >
                <Login setUser={setUser} />
            </div>
        )
    }
}

export default Players
