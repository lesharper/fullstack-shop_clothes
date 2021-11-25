import React from 'react';
import "./style-newoutfit-list.css"
import example_jeans from "../../images/example_jeans.jpg"
import example_shirt from "../../images/example_shirt.jpg"
import example_tshirt from "../../images/example_tshirt.jpg"
import example_sneakers from "../../images/example_sneakers.jpg"
const NewOutfitList = () => {
    return (
        <section className="new_outfit">
            <div className="new_outfit__title">Актуальные</div>
            <hr className="line-title"/>
                <div className="new_outfit__list">
                    <div className="new_outfit__item">
                        <img src={example_shirt} alt="example-shirt"/>
                        <div className="example-text">
                            Рубашка заебись
                        </div>
                    </div>
                    <div className="new_outfit__item">
                        <img src={example_jeans} alt="example-jeans"/>
                        <div className="example-text">
                            Джинсы топ
                        </div>
                    </div>

                    <div className="new_outfit__item">
                        <img src={example_tshirt} alt="example-tshirt"/>
                        <div className="example-text">
                            Футболки заебись
                        </div>
                    </div>

                    <div className="new_outfit__item">
                        <img src={example_sneakers} alt="example-sneakers"/>
                        <div className="example-text">
                            Ботинки заебись
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default NewOutfitList;