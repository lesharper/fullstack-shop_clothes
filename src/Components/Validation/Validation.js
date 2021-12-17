import React, {useState} from 'react';
import {useInput} from "../../Hooks/useInput";
import "./style-validation.css"
import {authorization, registration} from "../../Axios/users";

const Validation = () => {
    const [goAuth, setGoAuth] = useState(false)
    const [answer, setAnswer] = useState("");
    const [valid, setValid] = useState(false)

    const email = useInput("", {
        isEmpty: true,
        minLength: 5,
        maxLength: 40,
        isEmail: false,
    });
    const password = useInput("", {isEmpty: true, minLength: 7});

    const swap = () => {
        setGoAuth(!goAuth)
        setValid(false)
        setAnswer("")
        email.reset()
        password.reset()
    }

    const reset = () => {
        setValid(false)
        setAnswer("")
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

                        {email.isDirty && email.isEmpty && <div className="error">Поле не может быть пустым</div>}
                        {email.isDirty && email.minLengthError && <div className="error">Некорректная длина</div>}
                        {email.isDirty && email.maxLengthError && (
                            <div className="error">Слишком длинная почта</div>
                        )}
                        {email.isDirty && email.emailError && <div className="error">Введите корректную почту</div>}
                        <input type="email"
                               placeholder="Введите почту"
                               className="valid-input"
                               value={email.value}
                               onChange={e => email.onChange(e)}
                               onBlur={e => email.onBlur(e)}/>

                        {password.isDirty && password.isEmpty && (
                            <div className="error">Поле не может быть пустым</div>
                        )}
                        {password.isDirty && password.minLengthError && (
                            <div className="error">Некорректная длина</div>
                        )}
                        <input type="password"
                               placeholder="Введите пароль"
                               className="valid-input"
                               value={password.value}
                               onChange={e => password.onChange(e)}
                               onBlur={e => password.onBlur(e)}/>
                        <span className="answer">{answer}</span>
                        <button className="valid-btn"
                                disabled={
                                    !email.inputValid ||
                                    !password.inputValid
                                }
                                onClick={(e) => {
                                    registration(e,setAnswer,email.value,password.value)
                                    reset()
                                }}>Создать аккаунт
                        </button>
                        <div onClick={() => swap()} className="swap">
                            <span>Войти</span>
                        </div>
                    </>
                    :
                    <>
                        <span>Авторизация</span>
                        <hr/>

                        {email.isDirty && email.isEmpty && <div className="error">Поле не может быть пустым</div>}
                        {email.isDirty && email.minLengthError && <div className="error">Некорректная длина</div>}
                        {email.isDirty && email.maxLengthError && (
                            <div className="error">Слишком длинная почта</div>
                        )}
                        {email.isDirty && email.emailError && <div className="error">Введите корректную почту</div>}
                        <input
                            type="email"
                            placeholder="Введите почту"
                            className="valid-input"
                            value={email.value}
                            onChange={e => email.onChange(e)}
                            onBlur={e => email.onBlur(e)}/>

                        {password.isDirty && password.isEmpty && (
                            <div className="error">Поле не может быть пустым</div>
                        )}
                        {password.isDirty && password.minLengthError && (
                            <div className="error">Некорректная длина</div>
                        )}
                        <input
                            type="password"
                            placeholder="Введите пароль"
                            className="valid-input"
                            value={password.value} onChange={e => password.onChange(e)}
                            onBlur={e => password.onBlur(e)}/>
                        <span className="answer">{answer}</span>
                        <button className="valid-btn"
                                disabled={
                                    !email.inputValid ||
                                    !password.inputValid
                                }
                                onClick={e => {
                                    authorization(e, setAnswer, email.value, password.value)
                                    reset()
                                }}>Войти
                        </button>
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