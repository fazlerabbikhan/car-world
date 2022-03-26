import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let name;
    let picture;
    let price;
    for (const product of cart) {
        name = product.name;
        picture = product.picture;
        price = product.price;
    }

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <div className='selected-item'>
                {
                    cart.map(product =>
                        <div key={product.id}>
                            <img src={picture} alt="" />
                            <h3>{name}</h3>
                            <h3>Price: {price}</h3>
                        </div>
                    )
                }
            </div>
            <button className='cart-buttons'>Choose 1 For Me</button>
            <button className='cart-buttons'>Choose Again</button>
        </div>
    );
};

export default Cart;