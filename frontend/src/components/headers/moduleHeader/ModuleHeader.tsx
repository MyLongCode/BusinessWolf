import React, {useEffect, useState} from 'react';
import logo from '../../../assets/images/Logo.svg'
import avatar from '../../../assets/images/Avatar.jpg'
import './moduleHeader.css'
import {Link, useLocation} from "react-router-dom";
import {motion} from 'framer-motion';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import ILesson from "../../../models/ILesson";
import LessonService from "../../../services/LessonService";
import {AxiosError} from "axios";

function ModuleHeader() {
    const location = useLocation()
    const [title, setTitle] = useState('');
    const {modules} = useTypedSelector(state => state.modules)
    const [lessons, setLessons] = useState<ILesson[]>([])
    const {fetchModules} = useActions()

    useEffect(() => {
        if (location.pathname.startsWith('/module')) {
            if (modules.length === 0) {
                fetchModules()
            }
            if (modules.length > 0) {
                const moduleID = location.pathname.match('\\d+')?.
                    ["0"]
                const names = modules.map(module => {
                    return module.id
                })
                setTitle(`Модуль ${names.find((elem) => elem === Number(moduleID))}`)
            }
        } else if (location.pathname.startsWith('/test') || location.pathname.startsWith('/lesson')) {
            if (lessons.length === 0) {
                LessonService.fetchLessons()
                    .then(response => {
                        setLessons(response.data)
                    })
                    .catch(e => {
                        console.log(e as AxiosError)
                    })
            }

            if (lessons.length > 0) {
                const testID = location.pathname.match('\\d+')?.
                    ["0"]
                console.log(testID);
                setTitle(`${lessons.find((elem) => elem.id === Number(testID))?.chat_text}`)
            }
        }
        // eslint-disable-next-line
    }, [location, modules.length, lessons.length]);

    return (
        <motion.header
            className='module-header header'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.2}}}
            transition={{duration: 0.8}}
        >
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
        </motion.header>
    );
}

export default ModuleHeader;