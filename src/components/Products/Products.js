import React from 'react';
import './Products.css'

const Products = (props) => {
    const { id, name, price, picture } = props.product;

    return (
        <div className='product'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Products;