import React, {useState} from 'react';
import "./style-basket.css"
import basket_logo from "../../images/basket_logo.svg"

import {Link} from "react-router-dom"
const Basket = () => {
    const [quantity, setQuantity] = useState(1)
    return (
        <Link className="basket" to="/basket">
            <img src={basket_logo} alt="basket_logo" width="25"/>
                <li className="users-row__item">Корзина<sup>{quantity}</sup></li>
        </Link>
    );
}

export default Basket;