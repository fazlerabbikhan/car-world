import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, price, picture } = product;

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-addtocart'>
                <p>Add to Cart 🛒</p>
            </button>
        </div >
    );
};

export default Product;