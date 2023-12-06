import React, {useEffect} from 'react';
import logo from '../../assets/images/Logo.svg';
import './authorizationPage.css';
import {motion} from 'framer-motion';
import {useNavigate} from "react-router-dom";
import IAuthInputs from "../../models/IAuthInputs";
import AuthForm from "../../components/authForm/AuthForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

function AuthorizationPage() {
    const navigate = useNavigate()
    const {isAuth} = useTypedSelector(state => state.auth)
    const {login} = useActions()

    useEffect(() => {
        if (isAuth) {
            navigate('/main')
        }
    }, [isAuth]);

    useEffect(() => {
        if (localStorage.getItem('refresh_token')) {
            navigate('/main')
        }
    }, []);

    const onSubmit = async (data: IAuthInputs) => {
        login(data.username, data.password)
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
            <AuthForm onSubmit={onSubmit}/>
        </motion.div>
    );
}

export default AuthorizationPage;