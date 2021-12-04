import React, {useState} from 'react';
import "./style-header.css"
import login_logo from "../../images/login_logo.svg"
import favorites_logo from "../../images/favorites_logo.svg"
import logo_eye from "../../images/logo_eye.svg"

import {Link, NavLink} from "react-router-dom"
import Modal from "../Modal/Modal";
import Validation from "../Validation/Validation";
import NavbarDefault from "../Navbars/NavbarDefault";
import NavbarAdmin from "../Navbars/NavbarAdmin";

const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <header className="header">
            <section className="users-row">
                <div className="login__link">
                    <img src={login_logo} alt="login_logo"/>
                    <li className="users-row__item"><a onClick={() => setModalActive(true)}>Войти</a></li>
                </div>
                <div className="favorites__link">
                    <img src={favorites_logo} alt="favorites_logo"/>
                    <li className="users-row__item"><a href="#">Понравившиеся</a></li>
                </div>
            </section>
            <section className="shop-info-row">
                <Link to="/"><img src={logo_eye} alt="logo"/></Link>
                <NavbarDefault/>
            </section>
            <Modal active={modalActive} setActive={setModalActive}>
                <Validation/>
            </Modal>
        </header>
    );
}

export default Header;