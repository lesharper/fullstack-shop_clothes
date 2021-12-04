import React, {useState} from 'react';
import {useInput} from "../Hooks/useInput";
import "./style-validation.css"

const Validation = () => {
    const [goAuth, setGoAuth] = useState(false)

    const email = useInput("", {
        isEmpty: true,
        minLength: 5,
        maxLength: 40,
        isEmail: false,
    });
    const password = useInput("", { isEmpty: true, minLength: 7 });

    const swap = () => {
        setGoAuth(!goAuth)
        email.reset()
        password.reset()
    }

    return (
        <>
            <form>
                {!goAuth
                    ?
                    <>
                        <span>Регистрация</span>
                        <hr/>
                        <input type="email" placeholder="Введите почту" className="valid-input" value={email.value} onChange={e => email.onChange(e)}/>
                        <input type="password" placeholder="Введите пароль" className="valid-input" value={password.value} onChange={e => password.onChange(e)}/>
                        <button className="valid-btn">Создать аккаунт</button>
                        <div onClick={() => swap()} className="swap">
                            <span>Войти</span>
                        </div>
                    </>
                    :
                    <>
                        <span>Войти</span>
                        <hr/>
                        <input type="email" placeholder="Введите почту" className="valid-input" value={email.value} onChange={e => email.onChange(e)}/>
                        <input type="password" placeholder="Введите пароль" className="valid-input" value={password.value} onChange={e => password.onChange(e)}/>
                        <button className="valid-btn">Создать аккаунт</button>
                        <div onClick={() => swap()} className="swap">
                            <span>Зарегистрироваться</span>
                        </div>
                    </>
                }

            </form>
        </>
    );
}

export default Validation;