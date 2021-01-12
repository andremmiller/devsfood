import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './style.css'

export default ({ icon, link, title }) => {
    const history = useHistory()
    const location = useLocation()

    let isActive = location.pathname === link

    const handleClick = (e) => {
        e.preventDefault()
        history.push(link)
    }

    return (
        <a data-tip={title} data-for="tip-right" className={`menu-item ${isActive ? 'menu-item__active' : ''}` } href={link} onClick={handleClick}>
            <i className={icon} aria-hidden="true"></i>
        </a>
    )
}