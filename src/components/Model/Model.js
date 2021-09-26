import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Model.css'

const Model = (props) => {
    const { name, ocupation, age, salary, country, img } = props.model;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="model">
            <img src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>Ocupation: {ocupation}</p>
            <p>Age: {age}</p>
            <p>Country:{country}</p>
            <p>Salary:${salary}</p>
            <button onClick={() => props.handleAddToCart(props.model)} className="btn-cart">{cartIcon} Add to cart</button>
        </div>
    );
};

export default Model;