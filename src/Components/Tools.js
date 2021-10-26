import React, { useState } from 'react'
import Tree from 'react-animated-tree-v2'
import '../Styles/Tools.css'

const CustomTree = (props) => {
    return(
        <Tree
            style={{
                cursor: 'pointer'
            }}
            icons={{
                plusIcon: (props) => <i {...props} className='fad fa-toolbox' ></i>,
                minusIcon: (props) => <i {...props} className='fad fa-toolbox' ></i>,
                closeIcon: (props) => <i {...props} className='fad fa-tools' ></i>
            }}
            {...props}
        />
    )
}

const Tools = ({ show }) => {

    const [tool, setTool] = useState('')

    return (
        <div className={ show ? 'Tools show' : 'Tools' } >
            <div className='tree' >
                <div>
                    <CustomTree open content='Outils' >
                        <CustomTree open content='Générateur'>
                            <CustomTree 
                                content='Nom' 
                                onItemClick={() => setTool('https://www.generation-jdr.fr/index.php?page=nomevolue')} 
                            />
                            <CustomTree 
                                content='Ville' 
                                onItemClick={() => setTool('https://www.generation-jdr.fr/index.php?page=dd3/ville')} 
                            />
                            <CustomTree 
                                content='Auberge' 
                                onItemClick={() => setTool('https://www.generation-jdr.fr/index.php?page=aubergedetail')} 
                            />
                        </CustomTree>
                        <CustomTree open content='Bibliothèque'>
                            <CustomTree 
                                content='Sorts' 
                                onItemClick={() => setTool('https://hnd.lrojon.fr/spellbook/')}
                            />
                        </CustomTree>
                    </CustomTree>
                </div>
            </div>
            <div className='focus'>
                { tool !== '' ? <iframe src={tool} /> : null }
            </div>
        </div>
    )
}

export default Tools
