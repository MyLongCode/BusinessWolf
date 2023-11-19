import React, {useEffect, useState} from 'react';
import logo from '../../../assets/images/Logo.svg'
import avatar from '../../../assets/images/Avatar.jpg'
import './mainHeader.css'
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import Coins from "../../coins/Coins";

function MainHeader() {
    const [coins, setCoins] = useState(0)
    const {user, isAuth} = useTypedSelector(state => state.auth)

    useEffect(() => {
        if (user) {
            setCoins(user.coins)
        }
    }, [isAuth, user]);

    return (
        <header className='main-header header'>
            <div className="header__nav">
                <Link to={'/main'} className='header__logo logo'>
                    <img src={logo} alt="Логотип" className="logo__img"/>
                    <p className="logo__text">Бизнес<br/>волчонок</p>
                </Link>
                <Coins coins={coins}/>
                <Link to={'/profile'} className='header__user-avatar user-avatar'>
                    <img src={avatar} alt="Аватар пользователя" className='user-avatar__img'/>
                </Link>
            </div>
        </header>
    );
}

export default React.memo(MainHeader);