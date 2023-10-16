import React from 'react';
import logo from '../images/Logo.svg';
import '../css/authorizationPage.css';
import useInput from "../hooks/useInput";
import CustomInput from "../components/CustomInput";
import {motion} from 'framer-motion';
import {useNavigate} from "react-router-dom";

function AuthorizationPage() {
    const navigate = useNavigate()

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

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        navigate('/main')
    }

    const formValid = login.isValid && password.isValid

    return (
        <motion.form
            onSubmit={submitHandler}
            className="authorize_form centered"
            initial={{opacity: 0.1}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <img src={logo} alt="Логотип" className="auth_logo"/>
            <h1>Бизнес волчонок</h1>
            <CustomInput
                title='Логин'
                type='text'
                name='login'
                id='login'
                autoComplete='username'
                maxLength={16}
                validation={login}
                isPassword={false}
            />
            <CustomInput
                title='Пароль'
                type='password'
                name='password'
                id='password'
                autoComplete='current-password'
                maxLength={16}
                validation={password}
                isPassword={true}
            />
            <button disabled={!formValid} type="submit">Начать</button>
            <p className="restore_password">
                Забыли пароль? <a rel="noreferrer" href="https://telegram.org" target="_blank">Напишите боту</a>
            </p>
        </motion.form>
    );
}

export default AuthorizationPage;