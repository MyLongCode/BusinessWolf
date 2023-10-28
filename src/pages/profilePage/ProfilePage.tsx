import './profilePage.css'
import avatar from '../../assets/images/Avatar.jpg'
import React, {useContext, useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

interface IFormInputs {
    name: string,
    phone: string,
    email: string,
    address: string,
    grade: string
}

function ProfilePage() {
    const [fullName, setFullName] = useState('')

    const {store} = useContext(Context)
    const user = store.user
    const navigate = useNavigate()

    useEffect(() => {
        setFullName(user.full_name)
    }, [user]);

    const {
        register,
        formState: {
            errors
        }
    } = useForm<IFormInputs>({
        mode: "onChange"
    })

    return (
        <motion.div
            className="profile"
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1.25}}}
            exit={{opacity: 0}}
        >
            <Link to='' onClick={() => navigate(-1)} className='profile__back'>
                <span className='profile__back__arrow arrow'/>
                <p className='profile__back__text'>Профиль</p>
            </Link>
            <section className='profile__user'>
                <img src={avatar} alt="Аватар пользователя" className='profile__user__avatar user-avatar'/>
                <div className='profile__user__info'>
                    <p className='profile__user__info__name'>{fullName || 'Фамилия Имя'}</p>
                    <p className='profile__user__info__lvl'>Level: Almost Fluent</p>
                </div>
            </section>
            <section className='profile__courses'>
                <div className='profile__course'/>
            </section>
            <section className='profile__data'>
                <h2 className='profile__data__heading'>Ваши данные:</h2>
                <p className='profile__data__desc'>Заполните данные и получите <b>5 волчих коинов</b></p>

                <form className='profile__data__form data'>
                    <div className="data__input-wrapper">
                        <label className='data__label label'>
                            <p className='label__title'>ФИО</p>
                            <input
                                disabled={true}
                                // className={'label__input' + (dirtyFields?.name ? ' filled' : ' unfilled') +
                                // (errors?.name ? ' invalid' : '')}
                                className={'label__input unfilled'}
                                {...register('name')}
                                value={fullName || ''}
                                autoComplete='off'
                            />
                        </label>
                        {errors?.name && <p className="error-text">{errors?.name?.message || "Ошибка!"}</p>}
                    </div>
                </form>
            </section>
        </motion.div>
    );
}

export default observer(ProfilePage);