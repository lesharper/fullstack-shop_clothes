import React from 'react';
import "./style-header.css"
import login_logo from "../../images/login_logo.svg"
import favorites_logo from "../../images/favorites_logo.svg"
import logo_eye from "../../images/logo_eye.svg"

import {Link, NavLink} from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <section className="users-row">
                <div className="login__link">
                    <img src={login_logo} alt="login_logo"/>
                    <li className="users-row__item"><a href="#">Войти</a></li>
                </div>
                <div className="favorites__link">
                    <img src={favorites_logo} alt="favorites_logo"/>
                    <li className="users-row__item"><a href="#">Понравившиеся</a></li>
                </div>
            </section>
            <section className="shop-info-row">
                <Link to="/"><img src={logo_eye} alt="logo"/></Link>
                <section className="navbar">
                    <NavLink to="/mans" className="navbar__item">Мужчины</NavLink>
                    <NavLink to="/womens" className="navbar__item">Женщины</NavLink>
                    <NavLink to="/catalog" className="navbar__item">Каталог</NavLink>
                    <NavLink to="/sale" className="navbar__item">Распродажа</NavLink>
                </section>
            </section>
        </header>
    );
}

export default Header;