import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    console.log(props);
    const { url, name, by, price } = props.product;
    return (
        <div className="products  justify-content">
            <div class="cards" >
                <img class="card-img-top" src={url} alt="Card cap" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{by}</p>
                    <h4>${price}</h4>
                    <button onClick={() => props.handleAddProduct(props.product)} class="btn btn-primary"><FontAwesomeIcon icon={faCartPlus} /> Enroll now</button>
                </div>
            </div>
        </div>
    )
};

export default Product;