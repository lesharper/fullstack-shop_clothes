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
                    <div className="card">
                        <div className="card_header">Куколд</div>
                        <img src={example_shirt} alt="example-shirt" className="card_image"/>
                        <div className="card_info">
                            Рубашка
                        </div>
                    </div>
                    {/*<div className="new_outfit__item">*/}
                    {/*    <img src={example_jeans} alt="example-jeans"/>*/}
                    {/*    <div className="example-text">*/}
                    {/*        Джинсы*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="new_outfit__item">*/}
                    {/*    <img src={example_tshirt} alt="example-tshirt"/>*/}
                    {/*    <div className="example-text">*/}
                    {/*        Футболка*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="new_outfit__item">*/}
                    {/*    <img src={example_sneakers} alt="example-sneakers"/>*/}
                    {/*    <div className="example-text">*/}
                    {/*        Кроссовки*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
        </section>
    );
}

export default NewOutfitList;