import React from 'react'
import '../../Styles/ActionsItem.css'
import AbilitiesItem from './AbilitiesItem'

const ActionsItem = ({ action }) => {

    if(action.dmg) {
        return (
            <div className="ActionsItem" >
                <span>&emsp;&emsp;{action.name}</span>
                <div>{action.effect.name}</div>
                <div>
                    &emsp;{action.effect.accuracy > 0 ? '+' + action.effect.accuracy : action.effect.accuracy} pour touché,&nbsp;
                    portée {action.effect.range}m,&nbsp;
                    {action.effect.numTarget} cible{action.effect.numTarget > 1 ? 's.' : '.'}
                </div>
                <div
                    dangerouslySetInnerHTML={
                        {
                            __html: '&emsp;Si touché : ' + 
                            action.dmg.stable + '(' + action.dmg.random + '),&nbsp;' + 
                            action.dmg.type + '&nbsp;' + 
                            (action.dmg.effect !== '' && action.dmg.effect !== null ? ':' + action.dmg.effect : null)
                        }
                    }
                />
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
