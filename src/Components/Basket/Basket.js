import React, {useEffect, useState} from 'react';
import "./style-basket.css"
import basket_logo from "../../images/basket_logo.svg"

import {Link} from "react-router-dom"
import {get_count} from "../../Axios/basket";
const Basket = () => {
    const [quantity, setQuantity] = useState([])

    useEffect(() => {
        get_count(setQuantity)
    },[quantity])
    return (
        <Link className="basket" to="/basket">
            <img src={basket_logo} alt="basket_logo" width="25"/>
                <li className="users-row__item">Корзина<sup>{quantity.count}</sup></li>
        </Link>
    );
}

export default Basket;