import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;


    let addedModel = '';
    let total = 0;
    for (const model of cart) {
        total = total + model.salary;
        addedModel = addedModel + ' ' + model.name;
    }
    return (
        <div className="cart">
            <h3>Model Added:{cart.length}</h3>
            <h3>Total:${total}</h3>
            <h5>Added Model: {addedModel}</h5>
        </div>
    );
};

export default Cart;