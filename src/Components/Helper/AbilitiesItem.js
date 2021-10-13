import React from 'react'
import '../../Styles/AbilitiesItem.css'

const AbilitiesItem = ({ ability }) => {
    return (
        <div className='AbilitiesItem' >
            <span>&emsp;&emsp;{ability.name}</span>
            <div dangerouslySetInnerHTML={{__html: '&emsp;' + ability.effect}} ></div>
        </div>
    )
}

export default AbilitiesItem
