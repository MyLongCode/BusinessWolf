import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/Logo.svg';
import './authorizationPage.css';
import {motion} from 'framer-motion';
import {useNavigate} from "react-router-dom";
import axios from "../../api/axios";
import {AxiosError} from "axios";
import {useForm} from "react-hook-form";
import eye from '../../assets/images/Eye_invisible.svg'

const LOGIN_URL = '/auth/token/login'

interface IFormInputs {
    username: string;
    password: string;
}

function AuthorizationPage() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const {
        register,
        formState: {
            errors,
            isValid,
            touchedFields,
            dirtyFields
        },
        handleSubmit
    } = useForm<IFormInputs>({
        mode: "onChange"
    })
    const [passwordShown, setPasswordShown] = useState(false)


    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/main')
        }
    }, [navigate]);

    const onSubmit = async (data: IFormInputs) => {
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({
                    username: data.username,
                    password: data.password
                }), {
                    headers: {"Content-Type": 'application/json'}
                })
            localStorage.setItem('token', JSON.stringify(response?.data))
            navigate('/main')
        } catch (e) {
            const error = e as AxiosError
            if (error.code === "ERR_BAD_REQUEST") {
                setErrorMessage('Неверный пароль. Попробуйте снова.');
            } else if (error.code === "ERR_NETWORK") {
                setErrorMessage('Сервер не доступен. Попробуйте позже.')
            }
        }
    }

    return (
        <motion.div
            initial={{opacity: 0.1}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            className="auth centered"
        >
            <img src={logo} alt="Логотип" className="auth__logo"/>
            <h1 className="auth__heading">Бизнес волчонок</h1>
            {errorMessage && <div className="auth__error">
                <p className="error-text">{errorMessage}</p>
            </div>}
            <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
                <div className="auth__input-wrapper">
                    <label className='auth__label'>
                        <p className='auth__label__title'>Логин</p>
                        <input
                            className={'auth__label__input' + (dirtyFields?.username ? ' filled' : ' unfilled')}
                            {...register('username', {
                                required: "Поле не должно быть пустым",
                                minLength: {
                                    value: 3,
                                    message: "Длина логина должна быть не меньше 3 символов"
                                }
                            })}
                        />
                    </label>
                    {errors?.username && <p className="error-text">{errors?.username?.message || "Ошибка!"}</p>}
                </div>
                <div className="auth__input-wrapper">
                    <label className='auth__label'>
                        <p className='auth__label__title'>Пароль</p>
                        <input
                            type={passwordShown ? "text" : "password"}
                            className={'auth__label__input' + (dirtyFields?.password ? ' filled' : ' unfilled')}
                            {...register('password', {
                                required: "Поле не должно быть пустым",
                                minLength: {
                                    value: 6,
                                    message: "Длина пароля должна быть не меньше 6 символов"
                                }
                            })}
                        />
                        {touchedFields.password && <img
                            src={eye}
                            alt="Показать пароль"
                            className="password-show"
                            onClick={() => setPasswordShown(!passwordShown)}
                        />}
                    </label>
                    {errors?.password && <p className="error-text">{errors?.password?.message || "Ошибка!"}</p>}
                </div>
                <button disabled={!isValid} className='auth__submit-btn' type="submit">Начать</button>
                <p className="restore-password">
                    Забыли пароль? <a rel="noreferrer" href="https://telegram.org" target="_blank">Напишите боту</a>
                </p>
            </form>
        </motion.div>
    );
}

export default AuthorizationPage;