import React from 'react';
import avatar from "../../assets/images/Avatar.jpg";
import {Link} from "react-router-dom";
import './profileMenu.css'

const ProfileMenu = () => {
    return (
        <Link to={'/profile'} className='user-avatar'>
            <img src={avatar} alt="Аватар пользователя" className='user-avatar__img'/>
        </Link>
    );
};

export default ProfileMenu;