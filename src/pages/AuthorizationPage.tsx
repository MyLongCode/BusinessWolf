import React, {useState} from 'react';
import logo from '../images/Logo.svg';
import '../css/authorizationPage.css';
import eye from '../images/Eye_invisible.svg'
import useInput from "../hooks/useInput";

function AuthorizationPage() {
    const [passwordShown, setPasswordShown] = useState(false)

    const login = useInput(
        '',
        {
            isEmpty: true,
            minLength: 3
        },
        {
            emptyError: "Логин не должен быть пустым",
            minLengthError: "Длина логина должна быть не меньше 3 символов"
        }
    )
    const password = useInput(
        '',
        {
            isEmpty: true,
            minLength: 6
        },
        {
            emptyError: "Пароль не должен быть пустым",
            minLengthError: "Длина пароля должна быть больше 6 символов"
        })

    const formValid = login.isValid && password.isValid

    return (
        <form className="authorize_form centered">
            <img src={logo} alt="Логотип" className="auth_logo"/>
            <h1>Бизнес волчонок</h1>
            <div className="input_container">
                <p className="input_title">Логин</p>
                <input
                    onBlur={() => login.onBlur()}
                    onChange={e => login.onChange(e)}
                    value={login.value}
                    type="text"
                    name="login"
                    id="login"
                    autoComplete="login"
                    maxLength={16}
                    className={(login ? "filled" : "unfilled") + (login.errorMessage ? " input_error" : "")}
                />
                {(login.isDirty && login.errorMessage) && <p className="error_text">{login.errorMessage}</p>}
            </div>
            <div className="input_container">
                <p className="input_title">Пароль</p>
                <input
                    onBlur={() => password.onBlur()}
                    onChange={e => password.onChange(e)}
                    value={password.value}
                    type={passwordShown ? "text" : "password"}
                    name="pass"
                    id="pass"
                    autoComplete="current-password"
                    maxLength={16}
                    className={(password ? "filled" : "unfilled") + (password.errorMessage ? " input_error" : "")}
                />
                {password.isDirty &&
                    <img
                        src={eye}
                        alt="Показать пароль"
                        className="password_show"
                        onClick={() => setPasswordShown(!passwordShown)}
                    />}
                {(password.isDirty && password.errorMessage) && <p className="error_text">{password.errorMessage}</p>}
            </div>
            <button disabled={!formValid} type="submit">Начать</button>
            <p className="restore_password">
                Забыли пароль? <a rel="noreferrer" href="https://telegram.org" target="_blank">Напишите боту</a>
            </p>
        </form>
    );
}

export default AuthorizationPage;