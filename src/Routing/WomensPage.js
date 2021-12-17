import React, {useContext, useEffect, useState} from 'react';
import "./styles/style-pages.css"
import {delete_product, womans_products} from "../Axios/shop";
import {AdminContext, AuthContext} from "../Context/Context";
import {add_liked} from "../Axios/liked";
import {Link} from "react-router-dom";
import {add_basket} from "../Axios/basket";

const WomensPage = () =>{

    const [womensProducts, setWomensProducts] = useState([])

    const {isAdmin} = useContext(AdminContext)
    const {isAuth} = useContext(AuthContext)
    const [render, setRender] = useState(false)

    useEffect(() => {
        womans_products(setWomensProducts)
    }, [])

    const products = womensProducts.map(element => {
        return (
            <div className="card">
                <div className="card_header">
                    {isAuth ? <span onClick={() => add_liked(element.id)}>&#10084;</span> : ''}
                    {isAdmin ? <span onClick={() => {
                        delete_product(element.id)
                        setRender(!render)
                    }}>&#10006;</span> : <span></span>}

                </div>
                <img src={element.promo} alt="example-shirt" className="card_image"/>
                <div className="card_info">
                    <span>{element.title}</span>
                    <div className="card_info_price">
                        <span>Стоимость: </span>
                        <span>{element.price}</span>
                    </div>
                    <div>
                        <button><Link to={`/single/${element.id}`}>Подробнее</Link></button>
                        {isAuth ?  <button onClick={() => add_basket(element.id)}>В корзину</button> : ''}
                    </div>

                </div>
            </div>
        )
    })
    return (
        <div className="page_wrapper">
            <div className="page_contents_block">
                {products}
            </div>
        </div>
    );
}

export default WomensPage;