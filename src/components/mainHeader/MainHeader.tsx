import React, {useEffect} from 'react';
import logo from '../../assets/images/Logo.svg'
import token from '../../assets/images/Token_wolf.svg'
import avatar from '../../assets/images/Avatar.jpg'
import './mainHeader.css'
import {Link, useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';

function MainHeader() {
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigate('/authorization')
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
                <span className='token__count'>5</span>
            </div>
            <Link to={'/profile'} className='user-avatar' >
                <img src={avatar} alt="Аватар пользователя" className='user-avatar__img'/>
            </Link>
        </motion.header>
    );
}

export default MainHeader;