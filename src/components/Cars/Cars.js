import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Cars.css'
import Cart from '../Cart/Cart';

const Cars = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        if (cart.length <= 3) {
            const newCart = [...cart, product];
            setCart(newCart);
            console.log(newCart);
        }
    }

    const chooseAgain = () => {
        setCart([]);
    }

    const choose1ForMe = () => {
        const randomItem = cart[Math.floor(Math.random() * cart.length)];
        setCart([randomItem]);
        console.log([randomItem]);
    }

    return (
        <div className='cars-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    chooseAgain={chooseAgain}
                    choose1ForMe={choose1ForMe}
                ></Cart>
            </div>
        </div>
    );
};

export default Cars;