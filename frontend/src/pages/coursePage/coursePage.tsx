import React, {useEffect} from 'react';
import './coursePage.css'
import {useNavigate, useParams} from "react-router-dom";
import Review from "../../components/review/Review";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import ModulesList from "../../components/modules/ModulesList";

type CourseParams = {
    id: string
}

function CoursePage() {
    const {id} = useParams<CourseParams>()
    const navigate = useNavigate()
    const {modules} = useTypedSelector(state => state.modules)
    const {isAuth} = useTypedSelector(state => state.auth)
    const {fetchModules} = useActions()

    if (id && Number.isNaN(Number(id))) {
        navigate('/main')
    }

    useEffect(() => {
        if (isAuth && modules.length === 0) {
            fetchModules()
        }
        // eslint-disable-next-line
    }, [isAuth, modules.length,]);

    return (
        <MainLayout pageTitle={`Курс ${id}`}>
            <div className='course-page'>
                <section className='course-page__modules modules'>
                    <ModulesList modules={modules.filter(module => module.course === Number(id))}/>
                </section>
                <section className='course-page__about about'>
                    <h2 className='about__heading section-heading'>Об этом курсе</h2>
                    <p className='about__text'>
                        Learn the basics of the language: make new friends, plan a family dinner, go shopping and much
                        more!Learn the basics of the language: make new friends, plan a family dinner, go shopping and
                        much
                        more!мLearn the basics of the lang
                    </p>
                </section>
                <section className='course-page__about about'>
                    <h2 className='about__heading section-heading'>Почему этот курс для тебя</h2>
                    <p className='about__text'>
                        Learn the basics of the language: make new friends, plan a family dinner, go shopping and much
                        more!Learn the basics of the language: make new friends, plan a family dinner, go shopping and
                        much
                        more!мLearn the basics of the langLearn the basics of the language: make new friends, plan a
                        family
                        dinner, go shopping and much more!Learn the basics of the language: make new friends, plan a
                        family
                        dinner, go shopping and much more!мLearn the basics of the langLearn the basics of the language:
                        make new friends, plan a family dinner, go shopping and much more!Learn the basics of the
                        language:
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
            </div>
        </MainLayout>
    );
}

export default CoursePage;