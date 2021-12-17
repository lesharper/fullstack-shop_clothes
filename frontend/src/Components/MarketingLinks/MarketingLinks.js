import React from 'react';
import "./style-marketing-links.css"
import {Link} from "react-router-dom"
const MarketingLinks = ({slogan}) => {
    return (
        <section className="marketing-links">
            <div className="marketing-links__title">{slogan}</div>
            <div>
                <Link to="/mans" className="links_item">Мужчины</Link>
                <Link to="/womens" className="links_item">Женщины</Link>
                <Link to="/catalog" className="links_item">Каталог</Link>
                <Link to="/sale" className="links_item">Распродажа</Link>
            </div>
        </section>
    );
}

export default MarketingLinks;