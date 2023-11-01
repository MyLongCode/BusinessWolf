import React, {useEffect, useState} from 'react';
import './coursePage.css'
import Module from "../../components/module/Module";
import {useNavigate, useParams} from "react-router-dom";
import Review from "../../components/review/Review";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import IModule from "../../models/IModule";
import {useActions} from "../../hooks/useActions";
import { motion } from 'framer-motion';

type CourseParams = {
    id: string
}

function CoursePage() {
    const {id} = useParams<CourseParams>()
    const [modules, setCourseModules] = useState<IModule[]>([])
    const navigate = useNavigate()
    const {modules: allModules} = useTypedSelector(state => state.modules)
    const {isAuth} = useTypedSelector(state => state.auth)
    const {fetchModules} = useActions()

    if (id && Number.isNaN(Number(id))) {
        navigate('/main')
    }

    useEffect(() => {
        if(isAuth && allModules.length === 0) {
            fetchModules()
        }
    }, [isAuth,]);

    useEffect(() => {
        if(allModules.length !== 0) {
            const modulesToAdd = []
            for (const module of allModules) {
                if(module.course_id === Number(id)) {
                    modulesToAdd.push(module)
                }
            }
            setCourseModules(modulesToAdd)
        }
    }, [allModules]);

    return (
        <motion.div
            className='course-page'
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1.25}}}
            exit={{opacity: 0}}
        >
            <div className="greeting">
                <h1 className='greeting__heading'>Hello, bro</h1>
                <span className='what-to-learn'>What do you want to learn?</span>
            </div>
            <section className='course-page__modules modules'>
                <ul className='modules__list'>
                    {modules.map(module => {
                        return <Module key={module.module_id} courseNumber={module.module_number}
                                       completeLessons={2} totalLessons={12}/>
                    })}
                </ul>
            </section>
            <section className='course-page__about'>
                <h2 className='course-page__about__heading'>Об этом курсе</h2>
                <p className='course-page__about__text'>
                    Learn the basics of the language: make new friends, plan a family dinner, go shopping and much
                    more!Learn the basics of the language: make new friends, plan a family dinner, go shopping and much
                    more!мLearn the basics of the lang
                </p>
            </section>
            <section className='course-page__about'>
                <h2 className='course-page__about__heading'>Почему этот курс для тебя</h2>
                <p className='course-page__about__text'>
                    Learn the basics of the language: make new friends, plan a family dinner, go shopping and much
                    more!Learn the basics of the language: make new friends, plan a family dinner, go shopping and much
                    more!мLearn the basics of the langLearn the basics of the language: make new friends, plan a family
                    dinner, go shopping and much more!Learn the basics of the language: make new friends, plan a family
                    dinner, go shopping and much more!мLearn the basics of the langLearn the basics of the language:
                    make new friends, plan a family dinner, go shopping and much more!Learn the basics of the language:
                    make new friends, plan a family dinner, go shopping and much more!мLearn the basics of the lang
                </p>
            </section>
            <section className='course-page__reviews'>
                <h2 className='course-page__reviews__heading'>Отзывы</h2>
                <ul className='course-page__reviews__list'>
                    <li className='course-page__reviews__list__item'>
                        <Review review='Learn the basics of the language:
                         make new friends, plan a family dinner, go shopping and much more!'/>
                    </li>
                    <li className='course-page__reviews__list__item'>
                        <Review review='Learn the basics of the language:
                         make new friends, plan a family dinner, go shopping and much more!'/>
                    </li>
                    <li className='course-page__reviews__list__item'>
                        <Review review='Learn the basics of the language:
                         make new friends, plan a family dinner, go shopping and much more!'/>
                    </li>
                </ul>
            </section>
        </motion.div>
    );
}

export default CoursePage;