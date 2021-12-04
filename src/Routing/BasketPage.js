import React, {useState} from 'react';
import "./styles/style-basket.css"
import mir from "../images/cards/mir.svg"
import mastercard from "../images/cards/mastercard.svg"
import paypal from "../images/cards/paypal.svg"
import visa from "../images/cards/visa.svg"
import {Link} from "react-router-dom";



const BasketPage = () => {
    const [resultPrice, setResultPrice] = useState(0)

    return (
        <>
            <main className="basket-page">

                <section className="BP_productsInfo">
                    <div className="title-basket">Корзина</div>
                    <hr className="line-title"/>
                    <div className="BP_productsInfo__info">

                        <span>Ваша корзина пуста!</span>
                        <Link to="/catalog">Пора исправлять..</Link>

                    </div>
                </section>
                <section className="BP_payInfo">

                    <div className="BP_payInfo__price-block">
                        <span><p>Итого к оплате:</p><p>{resultPrice}</p></span>
                        <button className="btn-buy">Оплатить</button>
                    </div>
                    <div className="BP_payInfo__card-block">

                        <span>Доступные платежные системы</span>
                        <hr className="line-title"/>
                        <div className="cards">
                            <img src={mir} alt="mir"/>
                            <img src={mastercard} alt="mastercard"/>
                            <img src={paypal} alt="paypal"/>
                            <img src={visa} alt="visa"/>
                        </div>
                        <input type="text" placeholder="Сумма"/>
                        <button className="btn_add-price">Пополнить баланс</button>
                    </div>

                </section>
            </main>
        </>
    );
}

export default BasketPage;