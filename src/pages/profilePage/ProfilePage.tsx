import './profilePage.css'
import avatar from '../../assets/images/Avatar.jpg'
import React from 'react';
import {motion} from 'framer-motion';
import {Link} from "react-router-dom";

function ProfilePage(props: { lastAddress: any }) {
    return (
        <motion.div
            className="profile"
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1.25}}}
            exit={{opacity: 0}}
        >
            <Link to={props.lastAddress} className='profile__back'>
                <span className='profile__back__arrow arrow'/>
                <span className='profile__back__text'>Профиль</span>
            </Link>
            <section className='profile__user'>
                <img src={avatar} alt="Аватар пользователя" className='profile__user__avatar user-avatar'/>
                <div className='profile__user__info'>
                    <p className='profile__user__info__name'>Фамилия Имя</p>
                    <p className='profile__user__info__lvl'>Level: Almost Fluent</p>
                </div>
            </section>
            <section className='profile__courses'>
                <div className='profile__course'/>
            </section>
            <section className='profile__data'>
                <h2 className='profile__data__heading'>Ваши данные:</h2>
                <p>Заполните данные и получите <b>5 волчих коинов</b></p>

                <form className='profile__data__form'>
                    <ul className='profile__data__input__list input__list'>
                        <li>

                        </li>
                    </ul>
                </form>
            </section>
        </motion.div>
    );
}

export default ProfilePage;