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
        // eslint-disable-next-line
    }, [isAuth,]);

    useEffect(() => {
        if(allModules.length !== 0) {
            const modulesToAdd = []
            for (const module of allModules) {
                if(module.course === Number(id)) {
                    modulesToAdd.push(module)
                }
            }
            setCourseModules(modulesToAdd)
        }
        // eslint-disable-next-line
    }, [allModules]);

    return (
        <motion.div
            className='course-page'
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.75}}}
            exit={{opacity: 0}}
        >
            <div className="greeting">
                <h1 className='greeting__heading'>Hello, bro</h1>
                <span className='what-to-learn'>What do you want to learn?</span>
            </div>
            <section className='course-page__modules modules'>
                <ul className='modules__list'>
                    {modules.map(module => {
                        return <Module key={module.id} id={module.id} courseNumber={module.number}
                                       completeLessons={2} totalLessons={12}/>
                    })}
                </ul>
            </section>
            <section className='course-page__about about'>
                <h2 className='about__heading section-heading'>Об этом курсе</h2>
                <p className='about__text'>
                    Learn the basics of the language: make new friends, plan a family dinner, go shopping and much
                    more!Learn the basics of the language: make new friends, plan a family dinner, go shopping and much
                    more!мLearn the basics of the lang
                </p>
            </section>
            <section className='course-page__about about'>
                <h2 className='about__heading section-heading'>Почему этот курс для тебя</h2>
                <p className='about__text'>
                    Learn the basics of the language: make new friends, plan a family dinner, go shopping and much
                    more!Learn the basics of the language: make new friends, plan a family dinner, go shopping and much
                    more!мLearn the basics of the langLearn the basics of the language: make new friends, plan a family
                    dinner, go shopping and much more!Learn the basics of the language: make new friends, plan a family
                    dinner, go shopping and much more!мLearn the basics of the langLearn the basics of the language:
                    make new friends, plan a family dinner, go shopping and much more!Learn the basics of the language:
                    make new friends, plan a family dinner, go shopping and much more!мLearn the basics of the lang
                </p>
            </section>
            <section className='course-page__reviews reviews'>
                <h2 className='reviews__heading section-heading'>Отзывы</h2>
                <ul className='reviews__list'>
                    <li className='reviews__item'>
                        <Review review='Learn the basics of the language:
                         make new friends, plan a family dinner, go shopping and much more!'/>
                    </li>
                    <li className='reviews__item'>
                        <Review review='Learn the basics of the language:
                         make new friends, plan a family dinner, go shopping and much more!'/>
                    </li>
                    <li className='reviews__item'>
                        <Review review='Learn the basics of the language:
                         make new friends, plan a family dinner, go shopping and much more!'/>
                    </li>
                </ul>
            </section>
        </motion.div>
    );
}

export default CoursePage;