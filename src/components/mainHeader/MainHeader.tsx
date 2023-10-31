import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/Logo.svg'
import token from '../../assets/images/Token_wolf.svg'
import avatar from '../../assets/images/Avatar.jpg'
import './mainHeader.css'
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';
import {useTypedSelector} from "../../hooks/useTypedSelector";

function MainHeader() {
    const [coins, setCoins] = useState(0)
    const {user, isAuth} = useTypedSelector(state => state.auth)

    useEffect(() => {
        if (user) {
            setCoins(user.coins)
        }
    }, [isAuth]);

    return (
        <motion.header
            className="main-header"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
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
            <Link to={'/profile'} className='user-avatar'>
                <img src={avatar} alt="Аватар пользователя" className='user-avatar__img'/>
            </Link>
        </motion.header>
    );
}

export default MainHeader;