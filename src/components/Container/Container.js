import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Model from '../Model/Model';
import './Container.css'

const Container = () => {
    const [models, setModels] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./models.json')
            .then(res => res.json())
            .then(data => setModels(data))
    }, []);
    const handleAddToCart = (model) => {
        if (!cart.includes(model)) {
            const newCart = [...cart, model];
            setCart(newCart);
        }


    }
    return (
        <div className="container">
            <div className="models-container">

                {models.map(model => <Model
                    handleAddToCart={handleAddToCart}
                    key={model.name}
                    model={model}></Model>)}
            </div>
            <div className="cart-container">

                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Container;