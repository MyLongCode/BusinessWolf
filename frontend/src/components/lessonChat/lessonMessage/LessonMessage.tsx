import React from 'react';
import './lessonMessage.css'
import IMessage from "../../../models/IMessage";

function LessonMessage({message}: { message: IMessage }) {
    return (
        <li className={`message${!message.isUser ? ' message_user' : ' message_not-user'}`}>
            {message.attachment !== '' &&
                <div className="message__attachment">
                    {message.attachmentType === 'image' ?
                        <img src={message.attachment}
                             alt="Вложение"/>
                        : <iframe width="600" height="340"
                                  src={message.attachment}
                                  title="YouTube video player"
                                  allowFullScreen></iframe>
                    }
                </div>
            }
            <p className='message__text'
               style={message.attachment !== '' ? {paddingBottom: '12px', paddingTop: '5px'} : {}}>{message.text}</p>
        </li>
    );
}

export default React.memo(LessonMessage);