import React, {useEffect} from 'react';
import logo from '../images/Logo.svg'
import token from '../images/Token_wolf.svg'
import avatar from '../images/Avatar.svg'
import '../css/mainHeader.css'
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
            className="main_header"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration: 0.8}}
        >
            <Link to={'/main'}><img src={logo} alt="Логотип" className="logo"/></Link>
            <p className="logo_text">Бизнес<br/>волчонок</p>
            <div className='token_container'>
                <img src={token} alt="Монеты" className='token_img'/>
                <span className='token_count'>5</span>
            </div>
            <button className='user_avatar' onClick={() => console.log(localStorage.getItem('token'))}><img src={avatar} alt="Аватар пользователя"/></button>
        </motion.header>
    );
}

export default MainHeader;