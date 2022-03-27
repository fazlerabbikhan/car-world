import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, addToCart }) => {
    const { name, price, picture } = product;

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
            </div>
            <button onClick={() => addToCart(product)} className='btn-addtocart'>
                <p className='btn-addtocart-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div >
    );
};

export default Product;