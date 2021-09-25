import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;



    let total = 0;
    for (const model of cart) {
        total = total + model.salary;
    }
    return (
        <div className="cart">
            <h3>Model Added:{cart.length}</h3>
            <h3>Total:{total}</h3>
        </div>
    );
};

export default Cart;