import React from 'react'
import './style.css'

export default ({data, activeCategory, setActiveCategory}) => {
    return (
        <div data-tip={data.name} data-for="tip-top" className={`category-item ${activeCategory === data.id ? 'category-item-active' : ''}`} onClick={() => setActiveCategory(data.id)}>
            <img src={data.image} className="category-image" />
        </div>
    )
}