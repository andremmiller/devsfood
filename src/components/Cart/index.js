import React, { useContext, useState } from 'react'
import './style.css'
import {UserContext} from '../../contexts/UserContext'

export default () => {
    const [showCart, setShowCart] = useState(false)
    const {state: user, dispatch} = useContext(UserContext)

    const handleProductChange = (key, operation) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {key, operation}
        })
        console.log('Executei!')
    }

    return (
       <div className="cart">
           <div className="cart__header" onClick={() => setShowCart(!showCart)}>
               <i className="fa fa-cart-arrow-down"></i>
               <div className="cart__headerText">Meu Carrinho ({user.cart.products.length})</div>
               {showCart && <i class="fa fa-angle-down arrow_down" aria-hidden="true"></i>}
           </div>
           <div className={`cart__body ${!showCart ? 'cart__hide' : ''}`}>
                <div className="cart__products">
                    {user.cart.products.map((item, index) => (
                        <div className="cart__product-item" key={index}>
                            <img className="cart__product-photo" src={item.image} />
                            <div className="cart__product-info">
                                <div className="cart__product-name">{item.name}</div>
                                <div className="cart__product-price">R$ {item.price.toFixed(2)}</div>
                            </div>
                            <div className="cart__product-quantityarea">
                                <i className="fa fa-minus cart__qt-button" aria-hidden="true" onClick={() => handleProductChange(index, '-')}></i>
                                <div className="cart__product-quantity-text">{item.quantity}</div>
                                <i className="fa fa-plus cart__qt-button" aria-hidden="true" onClick={() => handleProductChange(index, '+')}></i>
                            </div>
                        </div>
                    ))}
                </div>
           </div>
       </div>
   )
}