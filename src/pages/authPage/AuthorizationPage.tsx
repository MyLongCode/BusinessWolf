import React, {useContext, useEffect, useState} from 'react';
import logo from '../../assets/images/Logo.svg';
import './authorizationPage.css';
import {motion} from 'framer-motion';
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import IAuthInputs from "../../models/IAuthInputs";
import AuthForm from "../../components/authForm/AuthForm";

function AuthorizationPage() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const {store} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('refresh')) {
            navigate('/main')
        }
    }, [store.isAuth, navigate]);

    const onSubmit = async (data: IAuthInputs) => {
        store.login(data.username, data.password).catch(((error: AxiosError) => {
            if (error.code === "ERR_BAD_REQUEST") {
                setErrorMessage('Неверный пароль. Попробуйте снова.');
            } else if (error.code === "ERR_NETWORK") {
                setErrorMessage('Сервер не доступен. Попробуйте позже.')
            }
        }))
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
            <AuthForm onSubmit={onSubmit}/>
        </motion.div>
    );
}

export default observer(AuthorizationPage);