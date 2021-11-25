import React from 'react';
import "./styles/style-basket.css"
import mir from "../images/cards/mir.svg"
import mastercard from "../images/cards/mastercard.svg"
import paypal from "../images/cards/paypal.svg"
import visa from "../images/cards/visa.svg"

const BasketPage = (props) => {
    return (
        <>
            <div className="title-basket">Корзина</div>

            <main className="basket-page">
                <section className="BP_productsInfo">
                </section>
                <section className="BP_payInfo">

                    {/*<img src={mir} alt="mir"/>*/}
                    {/*<img src={mastercard} alt="mastercard"/>*/}
                    {/*<img src={paypal} alt="paypal"/>*/}
                    {/*<img src={visa} alt="visa"/>*/}
                </section>
            </main>
        </>
    );
}

export default BasketPage;