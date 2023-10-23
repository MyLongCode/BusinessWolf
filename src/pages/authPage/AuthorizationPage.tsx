import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/Logo.svg';
import './authorizationPage.css';
import useInput from "../../hooks/useInput";
import CustomInput from "../../components/CustomInput";
import {motion} from 'framer-motion';
import {useNavigate} from "react-router-dom";
import axios from "../../api/axios";
import {AxiosError} from "axios";

const LOGIN_URL = '/auth/token/login'

function AuthorizationPage() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/main')
        }
    }, [navigate]);

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
            minLengthError: "Длина пароля должна быть не меньше 6 символов"
        })

    const submitHandler = async (event: any) => {
        event.preventDefault()
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({
                    password: password.value,
                    username: login.value
                }),
                {
                    headers: {'Content-Type': 'application/json'}
                });
            localStorage.setItem('token', JSON.stringify(response?.data))
            navigate('/main')
        } catch (e) {
            const error = e as AxiosError
            if(error.code === "ERR_BAD_REQUEST") {
                setErrorMessage('Неверный пароль. Попробуйте снова.');
            } else if(error.code === "ERR_NETWORK") {
                setErrorMessage('Сервер не доступен. Попробуйте позже.')
            }
        }
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
            {errorMessage && <div className="auth_error">
                <p className="error_text">{errorMessage}</p>
            </div>}
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