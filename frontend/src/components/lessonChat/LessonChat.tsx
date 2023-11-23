import React from 'react';
import LessonMessage from "./lessonMessage/LessonMessage";
import {useParams} from "react-router-dom";
import useLessons from "../../hooks/useLessons";

function LessonChat() {
    const {id} = useParams<{id: string}>()
    const lesson = useLessons(id as string)

    return (
        <ul className='lesson-page__messages'>
            {lesson?.chat_text?.list.map(message => {
                return <LessonMessage key={lesson.chat_text.list.indexOf(message)} message={message}/>
            })}
        </ul>
    );
}

export default LessonChat;