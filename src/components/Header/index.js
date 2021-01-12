import React, { useState } from 'react'
import './style.css'

export default ({ search, onSearch }) => {
    const [inputFocused, setInputFocused] = useState(search !== '')

    const handleInputFocus = () => {
        setInputFocused(true)
    }

    const handleInputBlur = () => {
        if(search ==='') {
            setInputFocused(false)
        }
    }

    return (
        <div className="header">
            <img src="/assets/logo.png" className="header__logo" />
            <input 
                className={`header__input ${inputFocused ? 'header__input-active' : ''}`} 
                placeholder="Digite um produto..." 
                onFocus={handleInputFocus} 
                onBlur={handleInputBlur}
                value={search}
                onChange={(e) => onSearch(e.target.value)} 
            />
        </div>
    )
}