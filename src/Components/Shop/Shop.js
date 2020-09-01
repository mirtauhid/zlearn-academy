import React, { useState, useEffect } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import { Row } from 'react-bootstrap'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('product added',product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    useEffect(() => {
        fetch('http://www.json-generator.com/api/json/get/cemJupeCuW?indent=2')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data.handleAddProduct.product);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="shop-container">
            <div className="product-container">
                <Row>
                    {
                        products.map(pd => <Product
                            handleAddProduct={handleAddProduct}
                            product={pd}>
                            </Product>)
                    }
                </Row>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;