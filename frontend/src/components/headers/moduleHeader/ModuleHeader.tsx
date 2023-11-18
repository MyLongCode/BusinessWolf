import React, {useEffect, useState} from 'react';
import logo from '../../../assets/images/Logo.svg'
import avatar from '../../../assets/images/Avatar.jpg'
import './moduleHeader.css'
import {Link} from "react-router-dom";

interface ModuleHeaderProps {
    title: string
}

function ModuleHeader(props: ModuleHeaderProps) {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(props.title)
        // eslint-disable-next-line
    }, []);

    return (
        <header className='module-header header'>
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
                <h2 className='hm__name'>{title}</h2>
                <p className='hm_desc'>Learn the basics of the language: make new friends, plan a family dinner, go
                    shopping and much more!</p>
            </div>
        </header>
    );
}

export default ModuleHeader;