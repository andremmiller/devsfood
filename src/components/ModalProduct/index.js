import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import './style.css'

export default ({data, setShowModal}) => { 
    const {dispatch} = useContext(UserContext)
    

    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        setQuantity(1)
    }, [data])

    const handleMinusQt = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handlePlusQt = () => {
        setQuantity(quantity + 1)
    }

    const handleAddToCart = () => {

        dispatch({
            type: 'ADD_PRODUCT', 
            payload: { data, quantity }
        })

        setShowModal(false)
    }

    return (
        <div className="modal-product">
            <div className="product-area">
                <img src={data.image} className="product-photo" />
                <div className="product-info">
                    <div className="product-details">
                        <div className="product-name">{data.name}</div>
                        <div className="product-ingredients">{data.ingredients}</div>
                    </div>
                    <div className="product-details-bottom">
                        <div className="product-quantity">
                            <i className="fa fa-minus qt-button" aria-hidden="true" onClick={handleMinusQt}></i>
                            <div className="product-quantity-text">{quantity}</div>
                            <i className="fa fa-plus qt-button" aria-hidden="true" onClick={handlePlusQt}></i>
                        </div>
                        <div className="product-price"> R$ {(data.price * quantity).toFixed(2)}</div>
                    </div>
                </div>
            </div>
            <div className="product-buttons">
               <button className="product-button small" onClick={() => setShowModal(false)}>Cancelar</button>
               <button className="product-button" onClick={handleAddToCart}>Adicionar ao Carrinho</button>
            </div>
        </div>
    )
}