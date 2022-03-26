import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Cars.css'

const Cars = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='cars-container'>
            <div className='products-container'>
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                    ></Products>)
                }
            </div>
            <div className='cart-container'>
                <h2>haha</h2>
            </div>
        </div>
    );
};

export default Cars;