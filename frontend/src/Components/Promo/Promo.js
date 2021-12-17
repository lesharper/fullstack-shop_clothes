import React from 'react';
import "./style-promo.css"
import clothes from "../../images/clothes.png"
const Promo = () => {
    return (
        <section className="banner-promo">
            <section className="promo__text">
                <div>
                    <span className="text-title">Совершество в мелочах</span>
                    <hr className="line-title"/>
                        <span className="text-desc">С нами вы сможете взглянуть на себя по-новому. Красивый и утонченный стиль вровень с комфортом и надежностью!</span>
                </div>
            </section>
            <img src={clothes} alt="" className="banner-promo__image"/>
        </section>
    );
}

export default Promo;