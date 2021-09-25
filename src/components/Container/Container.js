import React, { useEffect, useState } from 'react';
import Model from '../Model/Model';
import './Container.css'

const Container = () => {
    const [models, setModels] = useState([])
    useEffect(() => {
        fetch('./models.json')
            .then(res => res.json())
            .then(data => setModels(data))
    }, [])
    return (
        <div className="container">
            <div className="models-container">

                {models.map(model => <Model
                    key={model.name}
                    model={model}></Model>)}
            </div>
            <div className="cart-container">
                <h3>Here is cart</h3>
            </div>
        </div>
    );
};

export default Container;