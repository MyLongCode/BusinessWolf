import React from 'react';
import './lessonMessage.css'
import IMessage from "../../../models/IMessage";

function LessonMessage({message}: {message: IMessage}) {
    return (
        <li className={`message${!message.isUser ? ' message_user' : ' message_not-user'}`}>
            {message.attachment !== '' &&
                <div className="message__attachment">
                    <img src="https://imgholder.ru/1920x1080/8493a8/adb9ca.jpg&text=ATTACHMENT&font=matias"
                         alt="Вложение"/>
                </div>
            }
            <p className='message__text'>{message.text}</p>
        </li>
    );
}

export default LessonMessage;