import React from 'react';
import './lessonMessage.css'
import IMessage from "../../models/IMessage";

function LessonMessage(props: IMessage) {
    return (
        <li className={`message${!props.isUser ? ' message_user' : ' message_not-user'}`}>
            {props.attachment !== '' &&
                <div className="message__attachment">
                    <img src="https://imgholder.ru/1920x1080/8493a8/adb9ca.jpg&text=ATTACHMENT&font=matias"
                         alt="Вложение"/>
                </div>
            }
            <p className='message__text'>{props.text}</p>
        </li>
    );
}

export default LessonMessage;