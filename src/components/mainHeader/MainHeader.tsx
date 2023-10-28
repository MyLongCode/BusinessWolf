import React, {useContext, useEffect, useState} from 'react';
import logo from '../../assets/images/Logo.svg'
import token from '../../assets/images/Token_wolf.svg'
import avatar from '../../assets/images/Avatar.jpg'
import './mainHeader.css'
import {Link, useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

function MainHeader() {
    const [coins, setCoins] = useState(0)
    const navigate = useNavigate()
    const {store} = useContext(Context)

    useEffect(() => {
        const user = store.user || store.getUserFromToken(localStorage.getItem('token') || '');
        setCoins(user.coins || 0)
    }, [store.user]);

    useEffect(() => {
        if(!localStorage.getItem('refresh')) {
            navigate('/authorization');
        }
    }, [navigate]);

    return (
        <motion.header
            className="main-header"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration: 0.8}}
        >
            <Link to={'/main'} className='logo'>
                <img src={logo} alt="Логотип" className="logo__img"/>
                <p className="logo__text">Бизнес<br/>волчонок</p>
            </Link>
            <div className='token'>
                <img src={token} alt="Монеты" className='token__img'/>
                <span className='token__count'>{coins}</span>
            </div>
            <Link to={'/profile'} className='user-avatar' >
                <img src={avatar} alt="Аватар пользователя" className='user-avatar__img'/>
            </Link>
        </motion.header>
    );
}

export default observer(MainHeader);