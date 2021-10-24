import React, { useRef, useState } from 'react'
import '../Styles/Timeline.css'

const Timeline = ({ className, timeline, updateTimeline }) => {

    const [fightStarted, setFightStarted] = useState(false)
    const [currentTurn, setCurrentTurn] = useState(0)
    const elements = useRef([])
    const lineTime = useRef(null)

    const startFight = () => {
        if(timeline.length > 0) { 
            setFightStarted(true)
            timeline.sort((a, b) => b.init - a.init)
        }
    }

    const next = () => {
        let nextTurn = currentTurn + 1 === timeline.length ? 0 : currentTurn + 1
        elements.current[nextTurn].scrollIntoView({ behavior: 'smooth' })
        setCurrentTurn(nextTurn)
    }

    return (
        <div className={className} >
            <div className='header'>
                <button 
                    onClick={() => fightStarted ? (timeline.length > 0 ? next() : setFightStarted(false)) : startFight()}
                >
                    {
                        fightStarted ? 
                            timeline.length > 0 ?
                                'Suivant'
                            :
                                'Fin'
                        :
                            'Lancer le combat'
                    }
                </button>
            </div>
            <div>
                <div ref={lineTime} onClick={() => console.log(lineTime.current.offsetHeight)} >
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
