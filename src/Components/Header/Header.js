import React, {useContext, useEffect, useState} from 'react';
import "./style-header.css"
import login_logo from "../../images/login_logo.svg"
import favorites_logo from "../../images/favorites_logo.svg"
import logo_eye from "../../images/logo_eye.svg"
import control_logo from "../../images/control_logo.svg"
import email_logo from "../../images/email_logo.svg"
import balance_logo from "../../images/balance_logo.svg"

import {Link, useNavigate} from "react-router-dom"
import Modal from "../Modal/Modal";
import Validation from "../Validation/Validation";
import NavbarDefault from "../Navbars/NavbarDefault";
import {AdminContext, AuthContext, BalanceContext, EmailContext, IdContext} from "../../Context/Context";
import {get_balance, logout} from "../../Axios/users";

const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const {isAdmin} = useContext(AdminContext)


    const {id, setId} = useContext(IdContext)
    const {email, setEmail} = useContext(EmailContext)
    const {balance, setBalance} = useContext(BalanceContext)

    //
    // useEffect(() => {
    //     get_balance(setBalance)
    // }, [])

    const navigate = useNavigate();
    return (
        <header className="header">
            <section className="users-row">
                <div className="login__link">
                    <img src={login_logo} alt="login_logo"/>
                    {isAuth
                        ?  <li className="users-row__item"><a onClick={() => {
                            logout(setIsAuth)
                            navigate("/")
                        }}>Выйти</a></li>
                        : <li className="users-row__item"><a onClick={() => setModalActive(true)}>Войти</a></li>
                    }
                </div>
                {isAuth ? (
                    <>
                        <div className="favorites__link">
                            <img src={favorites_logo} alt="favorites_logo"/>
                            <li className="users-row__item"><Link to="/liked">Понравившиеся</Link></li>
                        </div>

                        <div className="favorites__link">
                            <img src={email_logo} alt="email_logo"/>
                            <li className="users-row__item"><Link to="/">{email}</Link></li>
                        </div>

                        <div className="favorites__link">
                            <img src={balance_logo} alt="balance_logo"/>
                            <li className="users-row__item"><Link to="/">{balance}</Link></li>
                        </div>
                    </>

                )
                    : ''
                }

                {isAdmin
                ? (
                        <div className="favorites__link">
                            <img src={control_logo} alt="control_logo"/>
                            <li className="users-row__item"><Link to="/admin_control">Управление</Link></li>
                        </div>
                    )
                : ""}

                {isAuth && !isAdmin
                    ? (
                        <div className="favorites__link">
                            <img src={control_logo} alt="control_logo"/>
                            <li className="users-row__item"><Link to="/profile">Профиль</Link></li>
                        </div>
                    )
                    : ""}



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