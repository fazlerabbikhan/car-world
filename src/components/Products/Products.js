import React from 'react';
import './Products.css'

const Products = (props) => {
    const { name, price, picture } = props.product;

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <h3>{price}</h3>
            </div>
            <button className='btn-addtocart'>
                <p>Add to Cart 🛒</p>
            </button>
        </div >
    );
};

export default Products;