import './profilePage.css'
import avatar from '../../assets/images/Avatar.jpg'
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import ProfileDataForm from "../../components/profileForm/ProfileDataForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import ProfileCourse from "../../components/profileCourse/ProfileCourse";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";

function ProfilePage() {
    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [grade, setGrade] = useState('')
    const {user, isAuth} = useTypedSelector(state => state.auth)

    const navigate = useNavigate()

    useEffect(() => {
        if (user && isAuth) {
            setFullName(user.full_name);
            setPhone(user.phone);
            setEmail(user.email);
            setAddress(user.address);
            setGrade(user.education_class);
        }
    }, [isAuth, user]);

    return (
        <MainLayout pageTitle={'Профиль'}>
            <div className="profile">
                <Link to='' onClick={() => navigate(-1)} className='profile__back'>
                    <span className='profile__back-arrow arrow'/>
                    <p className='profile__back-text'>Вернуться</p>
                </Link>
                <section className='profile__user user'>
                    <img src={avatar} alt="Аватар пользователя" className='user__avatar user-avatar'/>
                    <div className='user__info info'>
                        <p className='info__name'>{fullName || 'Фамилия Имя'}</p>
                        <p className='info__grade'>{`${grade} класс`}</p>
                    </div>
                </section>
                <section className='profile__courses courses'>
                    <ProfileCourse/>
                </section>
                <section className='profile__data data'>
                    <h2 className='data__heading'>Ваши данные:</h2>
                    <p className='data__desc'>Заполните данные и получите <b>5 волчих коинов</b></p>
                    <ProfileDataForm name={fullName} phone={phone} email={email} address={address} grade={grade}/>
                </section>
            </div>
        </MainLayout>
    );
}

export default ProfilePage;