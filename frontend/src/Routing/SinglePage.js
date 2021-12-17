import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {single_products} from "../Axios/shop";
import "./styles/style-single.css"
import {add_basket} from "../Axios/basket";

const SinglePage = () => {
    const {id} = useParams()

    const [single, setSingle] = useState([])

    useEffect(() => {
        single_products(id, setSingle)
    }, [])

    const single_page = single.map(element => {
        return (
            <div className="single_wrapper">
                <div className="single_title">{element.title} ({element.family})</div>
                <div className="single-price">Стоимость: {element.price}</div>

                <div className="single_info">
                    <img src={element.promo} alt="promo" className="single_promo"/>
                    <div className="single_description">
                        <span>{element.description}</span>
                        <div>
                            <button onClick={() => add_basket(element.id)}>В корзину</button>
                        </div>
                    </div>

                </div>

            </div>

        )
    })
    return (
        <>
            {single_page}
        </>
    );
}

export default SinglePage;