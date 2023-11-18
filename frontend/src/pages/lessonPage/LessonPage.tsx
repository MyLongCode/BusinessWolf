import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './lessonPage.css'
import LessonMessage from "../../components/lessonMessage/LessonMessage";
import IMessage from "../../models/IMessage";
import ModuleLayout from "../../components/layouts/moduleLayout/ModuleLayout";
import { motion } from 'framer-motion';

type LessonPageParams = {
    id: string
}

function LessonPage() {
    const {id} = useParams<LessonPageParams>()
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        setMessages([
            {
                id: 1,
                number: 1,
                text: 'Let’s get lunch! How about pizza? 🍕',
                isUser: true,
                attachment: ''
            },
            {
                id: 2,
                number: 2,
                text: 'That sounds great! I’m in. What time works for you?',
                isUser: false,
                attachment: ''
            },
            {
                id: 3,
                number: 3,
                text: 'Let’s say 12pm if it’s fine with you?',
                isUser: true,
                attachment: ''
            },
            {
                id: 4,
                number: 4,
                text: 'Learn the basics of the language: make new friends, plan a family dinner, go shopping and much more!Learn the basics of the language: make new friends, plan a family dinner, go shopping and much more!мLearn the basics of the langLearn the basics of the language: make new friends, plan a family dinner, go shopping and much more!Learn the basics of the language: \n' +
                    'make new friends, plan a family dinner, go shopping and much more!мLearn the basics of the langLearn the basics of the language: make new friends, plan a family dinner, go shopping and much more!Learn the basics of the language: make new friends, plan a family dinner, go shopping and much more!мLearn the basics of the lang',
                isUser: false,
                attachment: ''
            },
            {
                id: 5,
                number: 5,
                text: 'Сообщение с вложением',
                isUser: false,
                attachment: 'a'
            }
        ])
    }, []);


    return (
        <ModuleLayout headerTitle={`Урок ${id}`}>
            <motion.div
                className='lesson-page'
                initial={{opacity: 0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration: 0.2}}
            >
                <ul className='lesson-page__messages'>
                    {messages.map(message => {
                        return <LessonMessage
                            key={message.id}
                            id={message.id}
                            number={message.number}
                            text={message.text}
                            isUser={message.isUser}
                            attachment={message.attachment}
                        />
                    })}
                </ul>
                <button className="lesson-page__btn">Прочитано</button>
            </motion.div>
        </ModuleLayout>
    );
}

export default LessonPage;