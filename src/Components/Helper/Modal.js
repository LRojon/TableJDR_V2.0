import React from 'react'

const Modal = ({ title, show, children }) => {
    return (
        <div className={show ? 'modal show' : 'modal'} >
            <div>
                <h1>{title}</h1>
                <button><i className='fas fa-times'></i></button>
            </div>
            <div className='body' >
                {children}
            </div>
        </div>
    )
}

export default Modal
