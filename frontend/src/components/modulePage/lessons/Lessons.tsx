import React, {useEffect, useState} from 'react';
import './lessons.css'
import Lesson from "./lesson/Lesson";
import ILesson from "../../../models/ILesson";
import LessonService from "../../../services/LessonService";
import {AxiosError} from "axios";
import {motion} from 'framer-motion';

function Lessons(props: { moduleID: number }) {
    const [lessons, setLessons] = useState<ILesson[]>([])

    useEffect(() => {
        LessonService.fetchLessons()
            .then(response => {
                setLessons(response.data.sort((a, b) => (a.number > b.number ? 1 : -1)))
            })
            .catch(e => {
                console.log(e as AxiosError);
            })
    }, []);

    return (
        <motion.div
            className='lessons'
            initial={{opacity: 0.1}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.2}}}
        >
            <ul className='lessons__list'>
                {lessons.length > 0 && lessons.map(lesson => {
                    return lesson.module === props.moduleID &&
                        <Lesson key={lesson.id} id={lesson.id} number={lesson.number} chat_text={lesson.chat_text}
                                abstract_text={lesson.abstract_text} module={lesson.module}/>
                })}
            </ul>
        </motion.div>
    );
}

export default Lessons;