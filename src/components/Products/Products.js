import React from 'react';
import './Products.css'

const Products = ({ product, handleAddToCart }) => {
    const { name, price, picture } = product;

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <h3>Price: {price}</h3>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-addtocart'>
                <p>Add to Cart 🛒</p>
            </button>
        </div >
    );
};

export default Products;