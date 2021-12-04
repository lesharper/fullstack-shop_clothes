import React from 'react';
import {NavLink} from "react-router-dom";

const NavbarAdmin = (props) => {
    return (
        <section className="navbar">
            <NavLink to="/mans" className="navbar__item">Пользователи</NavLink>
            <NavLink to="/womens" className="navbar__item">Управление магазином</NavLink>
        </section>
    );
}

export default NavbarAdmin;