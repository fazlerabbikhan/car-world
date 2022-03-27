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

    // handle Add to Cart button
    const addToCart = (product) => {
        if (cart.length <= 3 && cart.indexOf(product) === -1) {
            const newCart = [...cart, product];
            setCart(newCart);
            console.log(newCart);
        }
        else if (cart.indexOf(product) !== -1) {
            alert('You have already selected this item.');
        }
        else {
            alert('You can add maximum 4 items.');
        }
    }

    // handle Choose 1 For Me button
    const choose1ForMe = () => {
        if (cart.length !== 0) {
            const randomItem = cart[Math.floor(Math.random() * cart.length)];
            setCart([randomItem]);
            console.log([randomItem]);
        }
    }

    // handle Choose Again button
    const chooseAgain = () => {
        setCart([]);
    }

    return (
        <div className='cars-container'>
            <div className='product-container'>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
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