import React, {useContext, useEffect, useState} from 'react';
import "./styles/style-basket.css"
import mir from "../images/cards/mir.svg"
import mastercard from "../images/cards/mastercard.svg"
import paypal from "../images/cards/paypal.svg"
import visa from "../images/cards/visa.svg"
import {Link} from "react-router-dom";
import {delete_basket, get_basket, get_sum} from "../Axios/basket";
import {add_liked} from "../Axios/liked";
import {delete_product} from "../Axios/shop";
import {AdminContext, AuthContext, BalanceContext} from "../Context/Context";
import {useInput} from "../Hooks/useInput";
import {add_money, buy} from "../Axios/users";


const BasketPage = () => {
    const [resultPrice, setResultPrice] = useState(0)
    const [basket, setBasket] = useState([])

    const {isAdmin} = useContext(AdminContext)
    const {isAuth} = useContext(AuthContext)
    const [render, setRender] = useState(false)

    const {balance, setBalance} = useContext(BalanceContext)

    const _balance = useInput("", {isEmpty: true})
    useEffect(() => {
        get_basket(setBasket)
    }, [render])


    useEffect(() => {
        get_sum(setResultPrice)
    }, [basket])


    const basket_list = basket.map(element => {
        return (
            <div className="card">
                <div className="card_header">
                    {isAuth ? <span onClick={() => add_liked(element.id)}>&#10084;</span> : <span></span>}
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
                        <button onClick={() => {
                            delete_basket(element.id)
                            setRender(!render)
                        }}>Удалить из корзины
                        </button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <main className="basket-page">

                <section className="BP_productsInfo">
                    <div className="title-basket">Корзина</div>
                    <hr className="line-title"/>
                    <div className="BP_productsInfo__info">
                        {basket_list.length !== 0 ? <div>{basket_list}</div>
                            : (
                                <>
                                    <span>Ваша корзина пуста!</span>
                                </>

                            )
                        }

                    </div>
                </section>
                <section className="BP_payInfo">

                    <div className="BP_payInfo__price-block">
                        <span><p>Итого к оплате:</p><p>{resultPrice.sum}</p></span>
                        <button
                            className="btn-buy"
                            disabled={
                                resultPrice.sum > balance
                            }
                            onClick={() => buy(resultPrice.sum)
                            }>Оплатить</button>
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
                        <input type="text"
                               placeholder="Введите сумму"
                               className="valid-input"
                               value={_balance.value}
                               onChange={e => _balance.onChange(e)}
                               onBlur={e => _balance.onBlur()}
                        />
                        <button
                            className="btn_add-price"
                            disabled={!_balance.inputValid}
                            onClick={() => {
                                add_money(_balance.value)
                                setBalance(null)
                                _balance.reset()
                            }}
                        >Пополнить баланс</button>
                    </div>

                </section>
            </main>
        </>
    );
}

export default BasketPage;