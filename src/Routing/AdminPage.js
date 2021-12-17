import React, {useState} from 'react';
import "./styles/style-admin-page.css"
import {useInput} from "../Hooks/useInput";
import {add_product} from "../Axios/shop";

const AdminPage = () => {

    const title = useInput("", {isEmpty: true})

    const [category, setCategory] = useState({value: "мужчины"})
    const [family, setFamily] = useState({value: "кроссовки"})

    const description = useInput("", {isEmpty: true})
    const price = useInput("", {isEmpty: true})
    const promo = useInput("", {isEmpty: true})

    const [answer, setAnswer] = useState("")

    const reset = () => {
        title.reset()
        description.reset()
        price.reset()
        promo.reset()
    }
    return (
        <div className="admin__page">
            <div className="admin__title">Добавление товара</div>
            <form className="admin__form">
                <input type="text" placeholder="Название товара" autoFocus value={title.value} onChange={title.onChange} onBlur={title.onBlur}/>
                <textarea type="text" placeholder="Описание товара" value={description.value} onChange={description.onChange} onBlur={description.onBlur}/>
                <label>
                    Категория товара
                    <select value={category.value} onChange={e => setCategory({value: e.target.value})}>
                        <option value="мужчины">мужчины</option>
                        <option value="женщины">женщины</option>
                    </select>
                </label>

                <label>
                    Подкатегория товара
                    <select value={family.value} onChange={e => setFamily({value: e.target.value})}>
                        <option value="кроссовки">кроссовки</option>
                        <option value="джинсы">джинсы</option>
                        <option value="рубашки">рубашки</option>
                        <option value="футболка">футболка</option>
                    </select>
                </label>


                <input type="text" placeholder="Стоимость товара" value={price.value} onChange={price.onChange} onBlur={price.onBlur}/>
                <input type="text" placeholder="Ссылка на изображение" value={promo.value} onChange={promo.onChange} onBlur={promo.onBlur}/>
                <span>{answer}</span>
                <button
                    className="admin-btn"
                    type="button"
                    disabled={
                        !title.inputValid ||
                        !description.inputValid ||
                        !price.inputValid ||
                        !promo.inputValid
                    }
                    onClick={() => {
                        add_product(title.value, description.value, category.value, family.value, promo.value, price.value, setAnswer)
                        reset()
                    }}
                >Создать</button>

            </form>
        </div>
    );
}

export default AdminPage;