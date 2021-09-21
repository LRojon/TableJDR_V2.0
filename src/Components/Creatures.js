import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Tree from 'react-animated-tree'
import '../Styles/Creatures.css'

const Creatures = ({ show }) => {
    return (
        <div className={show ? 'Creature show' : 'Creature'} >
            <div className='tree' >
                <Tree content="Créatures" type={<FontAwesomeIcon style={{fontSize: 14}} icon='dragon' />} open>
                    <Tree content="Goblinoïdes" type={<FontAwesomeIcon style={{fontSize: 14}} icon='dragon' />} >
                        <Tree content="Gobelin" type={<FontAwesomeIcon style={{fontSize: 14}} icon='scroll' />} />
                        <Tree content="Hobgobelin" type={<FontAwesomeIcon style={{fontSize: 14}} icon='scroll' />} />
                    </Tree>
                    <Tree content="Humanoïdes" type={<FontAwesomeIcon style={{fontSize: 14}} icon='dragon' />} >
                        <Tree content="Bandit" type={<FontAwesomeIcon style={{fontSize: 14}} icon='scroll' />} />
                        <Tree content="Marchand" type={<FontAwesomeIcon style={{fontSize: 14}} icon='scroll' />} />
                    </Tree>
                </Tree>
            </div>
            <div className='focus' >
                Focus content
            </div>
        </div>
    )
}

export default Creatures
