import React from 'react';
import IMessage from "../../models/IMessage";
import LessonMessage from "./lessonMessage/LessonMessage";

function LessonChat({messages}: { messages: IMessage[] }) {
    return (
        <ul className='lesson-page__messages'>
            {messages.map(message => {
                return <LessonMessage key={message.id} message={message}/>
            })}
        </ul>
    );
}

export default LessonChat;