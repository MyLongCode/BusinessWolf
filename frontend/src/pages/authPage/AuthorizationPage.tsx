import React, {useEffect} from 'react';
import logo from '../../assets/images/Logo.svg';
import './authorizationPage.css';
import {useLocation, useNavigate} from "react-router-dom";
import IAuthInputs from "../../models/IAuthInputs";
import AuthForm from "../../components/authForm/AuthForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {motion} from 'framer-motion';

function AuthorizationPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const {isAuth} = useTypedSelector(state => state.auth)
    const {login, checkAuth} = useActions()

    useEffect(() => {
        if (isAuth) {
            console.log(location.state?.from)
            navigate(location.state?.from?.pathname || '/main')
        }
        // eslint-disable-next-line
    }, [isAuth]);

    useEffect(() => {
        if (localStorage.getItem('refresh_token')) {
            checkAuth()
        }
        // eslint-disable-next-line
    }, []);

    const onSubmit = async (data: IAuthInputs) => {
        login(data.username, data.password)
    }

    return (
        <motion.div
            className="auth centered"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >
            <img src={logo} alt="Логотип" className="auth__logo"/>
            <h1 className="auth__heading">Бизнес волчонок</h1>
            <AuthForm onSubmit={onSubmit}/>
        </motion.div>
    );
}

export default AuthorizationPage;