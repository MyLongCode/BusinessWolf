import React from 'react';
import logo from '../images/Logo.svg'
import token from '../images/Token_wolf.svg'
import avatar from '../images/Avatar.svg'
import '../css/mainHeader.css'

function MainHeader() {
    return (
        <header className="main_header">
            <img src={logo} alt="Логотип" className="logo"/>
            <p className="logo_text">Бизнес<br/>волчонок</p>
            <div className='token_container'>
                <img src={token} alt="Монеты" className='token_img'/>
                <p className='token_count'>5</p>
            </div>
            <img src={avatar} alt="Аватар пользователя" className='user_avatar'/>
        </header>
    );
}

export default MainHeader;