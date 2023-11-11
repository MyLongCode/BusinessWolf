import React from 'react';
import logo from '../../../assets/images/Logo.svg'
import avatar from '../../../assets/images/Avatar.jpg'
import './moduleHeader.css'
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';

function ModuleHeader() {
    return (
        <motion.header
            className='module-header header'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition:{duration: 0.2}}}
            transition={{duration: 0.8}}
        >
            <div className="header__wrapper">
                <Link to={'/main'} className='header__logo logo'>
                    <img src={logo} alt="Логотип" className="logo__img"/>
                    <p className="logo__text">Бизнес<br/>волчонок</p>
                </Link>
                <Link to={'/profile'} className='header__user-avatar user-avatar'>
                    <img src={avatar} alt="Аватар пользователя" className='user-avatar__img'/>
                </Link>
            </div>
            <div className="header__module hm">
                <h2 className='hm__name'>Название модуля</h2>
                <p className='hm_desc'>Learn the basics of the language: make new friends, plan a family dinner, go
                    shopping and much more!</p>
            </div>
        </motion.header>
    );
}

export default ModuleHeader;