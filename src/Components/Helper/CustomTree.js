import React from 'react'
import Tree from 'react-animated-tree-v2'

const CustomTree = (props) => (
    <Tree
        icons={{
            plusIcon: (props) => <i {...props} className='fad fa-book' ></i>,
            minusIcon: (props) => <i {...props} className='fad fa-book-open' ></i>,
            closeIcon: props.player ? (props) => <i {...props} className='fad fa-scroll-old' ></i> : (props) => <i {...props} className='fad fa-paw-claws' ></i>
        }}
        {...props}
    />
)

export default CustomTree