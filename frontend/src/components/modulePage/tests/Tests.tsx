import React, {useEffect, useState} from 'react';
import './tests.css'
import {AxiosError} from "axios";
import TestService from "../../../services/TestService";
import ITest from "../../../models/ITest";
import Test from "./test/Test";
import LessonService from "../../../services/LessonService";
import ILesson from "../../../models/ILesson";
import { motion } from 'framer-motion';

function Tests() {
    const [tests, setTests] = useState<ITest[]>([])
    const [lessons, setLessons] = useState<ILesson[]>([]);

    useEffect(() => {
        TestService.fetchTests()
            .then(response => {
                setTests(response.data.sort((a, b) => (a.id > b.id ? 1 : -1)))
            })
            .catch(e => {
                console.log(e as AxiosError);
            })
        LessonService.fetchLessons()
            .then(response => {
                setLessons(response.data)
            })
            .catch(e => {
                console.log(e as AxiosError)
            })
    }, []);

    return (
        <motion.div
            className='tests'
            initial={{opacity: 0.1}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.2}}}
        >
            <ul className='tests__list'>
                {tests.length > 0 && tests.map(test => {
                    return <Test key={test.id} lesson_names={lessons.map(lesson => {
                        return lesson.id === test.lesson ? lesson.chat_text : ''
                    })} test={test}/>
                })}
            </ul>
        </motion.div>
    );
}

export default Tests;