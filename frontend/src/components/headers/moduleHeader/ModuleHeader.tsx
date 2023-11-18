import React, {useEffect, useState} from 'react';
import logo from '../../../assets/images/Logo.svg'
import avatar from '../../../assets/images/Avatar.jpg'
import './moduleHeader.css'
import {Link, useLocation} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import ILesson from "../../../models/ILesson";
import LessonService from "../../../services/LessonService";
import {AxiosError} from "axios";

interface ModuleHeaderProps {
    title: string
}

function ModuleHeader(props: ModuleHeaderProps) {
    const location = useLocation()
    const [title, setTitle] = useState('');
    const {modules} = useTypedSelector(state => state.modules)
    const [lessons, setLessons] = useState<ILesson[]>([])
    const {fetchModules} = useActions()

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