import React from 'react'
import '../../Styles/ActionsItem.css'
import AbilitiesItem from './AbilitiesItem'

const ActionsItem = ({ action }) => {

    if(action.effect.attack) {
        return (
            <div className="ActionsItem" >
                <span>&emsp;&emsp;{action.name}</span>
                <div><i>{action.effect.attack.split(' : ')[0]}</i> : {action.effect.attack.split(' : ')[1]}</div>
                <div>&emsp;<i>{action.effect.dmg.split(' : ')[0]}</i> : {action.effect.dmg.split(' : ')[1]}</div>
            </div>
        )
    }
    else {
        return (
            <AbilitiesItem ability={action} />
        )
    }
}

export default ActionsItem
