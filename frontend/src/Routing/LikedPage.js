import React, {useContext, useEffect, useState} from 'react';
import "./styles/style-pages.css"
import {all_products, delete_product} from "../Axios/shop";
import {add_liked, delete_like, get_liked} from "../Axios/liked";
import {AdminContext, AuthContext} from "../Context/Context";
import {Link} from "react-router-dom";
import {add_basket} from "../Axios/basket";

const LikedPage = () => {
    const [likeProducts, setLikeProducts] = useState([])
    const {isAdmin} = useContext(AdminContext)
    const {isAuth} = useContext(AuthContext)
    const [render, setRender] = useState(false)

    useEffect(() => {
        get_liked(setLikeProducts)
    }, [render])

    const products = likeProducts.map(element => {
        return (
            <div className="card">
                <div className="card_header">
                    {isAuth ? <span  style={{color:"red"}} onClick={() => {
                        delete_like(element.id)
                        setRender(!render)
                    }}>&#10084;</span> : ''}
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
                {products.length !== 0 ?  <div>{products}</div>
                    : (
                        <>
                            <span>Список понравившегося пуст!</span>
                        </>

                    )
                }

            </div>
        </div>
    );
}

export default LikedPage;