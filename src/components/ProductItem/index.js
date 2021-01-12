import React from 'react'
import './style.css'

export default ({data, onClick}) => {

    const handleClick = () => {
        onClick(data)
    }

    return (
        <div className="product-item" onClick={handleClick}>
            <div className="product__photo">
                <img src={data.image} />
            </div>
            <div className="product__info">
                <div className="product__name">{data.name}</div>
                <div className="product__price">R$ {data.price}</div>
                <div className="product__ingredients">{data.ingredients}</div>
            </div>
            <div className="product__button">
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
        </div>
    )
}