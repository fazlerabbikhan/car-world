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
            <section className='quesAns'>
                <h3>Q1: How React works?</h3>
                <h4>Ans: Instead of using the traditional DOM class, React uses className.
                    JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.
                    In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.</h4>

                <h3>Q2: What are the differences between Props and States?</h3>
                <h4>Ans: In Props, the data is passed from one component to another but in State the data is passed within the component only.
                    Props are immutable, States are mutable.
                    Props can be used with state and functional components, State can be used only with the state components/class component.
                    Props are read-only, State is both read and write.
                </h4>

                <h3>Q3: How useState works?</h3>
                <h4>Ans: useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</h4>
            </section>
        </div>
    );
};

export default Cars;