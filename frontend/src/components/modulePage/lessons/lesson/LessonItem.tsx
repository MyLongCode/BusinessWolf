import React from 'react';
import './lesson.css'
import ILesson from "../../../../models/ILesson";
import {Link, useLocation} from "react-router-dom";

function LessonItem({lesson}: {lesson: ILesson}) {
    const location = useLocation()

    return (
        <Link to={`${location.pathname}/${lesson.id}`} className='test-link'>
        <li className='lessons__lesson lesson'>
            <h3 className='lesson__title'>{lesson.chat_text}</h3>
            <p className='lesson__desc'>{lesson.abstract_text}</p>
            <p className='lesson__time'>30 мин</p>
        </li>
        </Link>
    );
}

export default React.memo(LessonItem);