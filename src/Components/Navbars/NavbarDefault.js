import React from 'react';
import {NavLink} from "react-router-dom";

const NavbarDefault = (props) => {
    return (
        <section className="navbar">
            <NavLink to="/mans" className="navbar__item">Мужчины</NavLink>
            <NavLink to="/womens" className="navbar__item">Женщины</NavLink>
            <NavLink to="/catalog" className="navbar__item">Каталог</NavLink>
            <NavLink to="/sale" className="navbar__item">Распродажа</NavLink>
        </section>
    );
}

export default NavbarDefault;