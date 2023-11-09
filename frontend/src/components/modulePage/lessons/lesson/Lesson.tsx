import React from 'react';
import './lesson.css'
import ILesson from "../../../../models/ILesson";

function Lesson(props: ILesson) {
    return (
        <li className='lessons__lesson lesson'>
            <h3 className='lesson__title'>{props.chat_text}</h3>
            <p className='lesson__desc'>{props.abstract_text}</p>
            <p className='lesson__time'>30 мин</p>
        </li>
    );
}

export default Lesson;