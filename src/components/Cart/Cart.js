import React from 'react';
import './Cart.css'

const Cart = ({ cart, chooseAgain, choose1ForMe }) => {

    return (
        <div className='cart'>
            <div className='order-summary'>
                <h2>Order Summary</h2>
            </div>
            <div>
                {
                    cart.map(product =>
                        <div className='selected-item'
                            key={product.id}>
                            <div>
                                <img src={product.picture} alt="" />
                            </div>
                            <div>
                                <h4>{product.name}</h4>
                                <h5>Price: {product.price}</h5>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='btn-cart-container'>
                <button onClick={() => choose1ForMe()} className='btn-cart'><p>Choose 1 For Me</p></button>
                <button onClick={() => chooseAgain()} className='btn-cart'><p>Choose Again</p></button>
            </div>
        </div>
    );
};

export default Cart;