import React, { useRef, useState } from 'react'
import '../Styles/Timeline.css'
import Randomizer from './Helper/Randomizer'

const Timeline = ({ className, timeline, updateTimeline }) => {

    const [fightStarted, setFightStarted] = useState(false)
    const [currentTurn, setCurrentTurn] = useState(0)
    const elements = useRef([])
    const [mobNumber, setMobNumber] = useState(timeline.filter(e => !e.player).length)

    const _logTimeline = () => {
        let ret = '--- Timeline ---\nFightStarted: ' + fightStarted + '\n'
        for(const elem of timeline) {
            ret += elem.name + ' | ' + elem.init + '\n'
        }
        console.log(ret)
    }

    const startFight = () => {
        setMobNumber(timeline.filter(e => !e.player).length)
        if(mobNumber > 0) { 
            setFightStarted(true)

            let tmp = [...timeline]
            for(const elem of tmp) {
                if(elem.player) {
                    elem.init = Randomizer("1d20+0") + elem.stats.dex.mod
                }
            }

            timeline.sort((a, b) => b.init - a.init)
            _logTimeline()
        }
    }

    const next = () => {
        setMobNumber(timeline.filter(e => !e.player).length)
        if(timeline.filter(e => !e.player).length > 0) {
            setFightStarted(true)
            let nextTurn = currentTurn > timeline.length - 1 ? 0 : (currentTurn === timeline.length - 1 ? 0 : currentTurn + 1)
            elements.current[nextTurn].scrollIntoView({ behavior: 'smooth' })
            setCurrentTurn(nextTurn)
        }
        _logTimeline()
    }

    const endFight = () => {
        setFightStarted(false)
        setCurrentTurn(0)
        _logTimeline()
    }

    return (
        <div className={className} >
            <div className='header'>
                <button 
                    onClick={() => fightStarted ? (mobNumber > 0 ? next() : endFight()) : startFight()}
                >
                    {
                        fightStarted ? 
                            mobNumber > 0 ?
                                'Suivant'
                            :
                                'Fin'
                        :
                            'Lancer le combat'
                    }
                </button>
            </div>
            <div>
                <div>
                    <span className='line-time'>&emsp;</span>
                    {
                        timeline.map((elem, index) => {
                            return (
                                <div 
                                    ref={ref => elements.current[index] = ref} 
                                    key={elem.name} 
                                    className={ 'elem' + (fightStarted && currentTurn === index ? ' selected' : '') + (elem.player ? ' player' : '') }
                                >
                                    <span type='name' >{elem.name}</span>
                                    <span type='armor' >CA : {elem.armor}</span>
                                    <span type='speed' >Vitesse : {elem.speed}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Timeline
