import React, {useEffect, useState} from 'react';
import logo from '../../../assets/images/Logo.svg'
import token from '../../../assets/images/Token_wolf.svg'
import avatar from '../../../assets/images/Avatar.jpg'
import './mainHeader.css'
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';
import {useTypedSelector} from "../../../hooks/useTypedSelector";

function MainHeader(props: { isGreetingVisible: boolean }) {
    const [coins, setCoins] = useState(0)
    const {user, isAuth} = useTypedSelector(state => state.auth)

    useEffect(() => {
        if (user) {
            setCoins(user.coins)
        }
    }, [isAuth, user]);

    return (
        <motion.header
            className='main-header header'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.8}}
        >
            <Link to={'/main'} className='header__logo logo'>
                <img src={logo} alt="Логотип" className="logo__img"/>
                <p className="logo__text">Бизнес<br/>волчонок</p>
            </Link>
            <div className='header__token token'>
                <img src={token} alt="Монеты" className='token__img'/>
                <p className='token__count'>{coins}</p>
            </div>
            {props.isGreetingVisible && <div className="header__greeting greeting">
                <h1 className='greeting__heading'>Hello, bro</h1>
                <span className='what-to-learn'>What do you want to learn?</span>
            </div>}
        </motion.header>
    );
}

export default MainHeader;