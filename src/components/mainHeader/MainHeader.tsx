import React, {useEffect} from 'react';
import logo from '../../assets/images/Logo.svg'
import token from '../../assets/images/Token_wolf.svg'
import avatar from '../../assets/images/Avatar.svg'
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
            <Link to={'/main'}><img src={logo} alt="Логотип" className="logo"/></Link>
            <p className="logo__text">Бизнес<br/>волчонок</p>
            <div className='token'>
                <img src={token} alt="Монеты" className='token__img'/>
                <span className='token__count'>5</span>
            </div>
            <button className='user-avatar' onClick={() => console.log(localStorage.getItem('token'))}><img src={avatar} alt="Аватар пользователя"/></button>
        </motion.header>
    );
}

export default MainHeader;