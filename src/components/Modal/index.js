import React from 'react'
import './style.css'

export default ({children, show, setShow}) => {

    const handleModalHide = (e) => {
        if(e.target.classList.contains('modal')) {
            setShow(false)
        }
    }

    return (
        <div className={`modal ${!show ? 'modal__hide' : ''}`} onClick={handleModalHide}>
            <div className="modal__body">
                {children}
            </div>
        </div>  
    )
}