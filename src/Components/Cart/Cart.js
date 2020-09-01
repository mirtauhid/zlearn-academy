import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total, prd) => total + prd.price, 0)
    let vat = total / 100;
    let grandTotal = total + vat;

    const fixNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="OrderArea">
            <h4>Order Summery</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: ${fixNumber(total)}</p>
            <p>Vat: ${fixNumber(vat)}</p>
            <p>Order Total: ${fixNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;