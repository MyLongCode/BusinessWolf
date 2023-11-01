import './profilePage.css'
import avatar from '../../assets/images/Avatar.jpg'
import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Link, useNavigate} from "react-router-dom";
import ProfileDataForm from "../../components/profileForm/ProfileDataForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";

function ProfilePage() {
    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [grade, setGrade] = useState('')
    const {user, isAuth} = useTypedSelector(state => state.auth)

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            setFullName(user.full_name);
            setPhone(user.phone_number);
            setEmail(user.email);
            setAddress(user.address);
            setGrade(user.education_class);
        }
    }, [isAuth]);

    return (
        <motion.div
            className="profile"
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1.25}}}
            exit={{opacity: 0}}
        >
            <Link to='' onClick={() => navigate(-1)} className='profile__back'>
                <span className='profile__back-arrow arrow'/>
                <p className='profile__back-text'>Профиль</p>
            </Link>
            <section className='profile__user user'>
                <img src={avatar} alt="Аватар пользователя" className='user__avatar user-avatar'/>
                <div className='user__info info'>
                    <p className='info__name'>{fullName || 'Фамилия Имя'}</p>
                    <p className='info__grade'>{`${grade} класс`}</p>
                </div>
            </section>
            <section className='profile__courses'>
                <div className='profile__course'/>
            </section>
            <section className='profile__data data'>
                <h2 className='data__heading'>Ваши данные:</h2>
                <p className='data__desc'>Заполните данные и получите <b>5 волчих коинов</b></p>
                <ProfileDataForm name={fullName} phone={phone} email={email} address={address} grade={grade}/>
            </section>
        </motion.div>
    );
}

export default ProfilePage;