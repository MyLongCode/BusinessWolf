import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import './lessonPage.css'
import IMessage from "../../models/IMessage";
import ModuleLayout from "../../components/layouts/moduleLayout/ModuleLayout";
import {motion} from 'framer-motion';
import LessonChat from "../../components/lessonChat/LessonChat";

type LessonPageParams = {
    id: string,
    moduleID: string,
    courseID: string
}

function LessonPage() {
    const {id, moduleID, courseID} = useParams<LessonPageParams>()
    const [messages, setMessages] = useState<IMessage[]>([]);
    const navigate = useNavigate()

    useEffect(() => {
        setMessages([
            {
                id: 1,
                number: 1,
                text: 'Let’s get lunch! How about pizza? 🍕',
                isUser: true,
                attachmentType: '',
                attachment: ''
            },
            {
                id: 2,
                number: 2,
                text: 'That sounds great! I’m in. What time works for you?',
                isUser: false,
                attachmentType: '',
                attachment: ''
            },
            {
                id: 3,
                number: 3,
                text: 'Let’s say 12pm if it’s fine with you?',
                isUser: true,
                attachmentType: '',
                attachment: ''
            },
            {
                id: 4,
                number: 4,
                text: 'Learn the basics of the language: make new friends, plan a family dinner, go shopping and much more!Learn the basics of the language: make new friends, plan a family dinner, go shopping and much more!мLearn the basics of the langLearn the basics of the language: make new friends, plan a family dinner, go shopping and much more!Learn the basics of the language: \n' +
                    'make new friends, plan a family dinner, go shopping and much more!мLearn the basics of the langLearn the basics of the language: make new friends, plan a family dinner, go shopping and much more!Learn the basics of the language: make new friends, plan a family dinner, go shopping and much more!мLearn the basics of the lang',
                isUser: false,
                attachmentType: '',
                attachment: ''
            },
            {
                id: 5,
                number: 5,
                text: 'Сообщение с видео',
                isUser: false,
                attachmentType: 'video',
                attachment: 'https://www.youtube.com/embed/GzXELHF3BvM?si=Z7yC8QASKyfwKn53'
            },
            {
                id: 6,
                number: 6,
                text: 'Сообщение с изображением',
                isUser: false,
                attachmentType: 'image',
                attachment: 'https://imgholder.ru/1920x1080/8493a8/adb9ca.jpg&text=IMAGE&font=matias'
            }
        ])
    }, []);

    const buttonClickHandler = () => {
        navigate(`/course/${courseID}/module/${moduleID}/lessons`)
    }

    return (
        <ModuleLayout headerTitle={`Урок ${id}`} pageTitle={`Урок ${id}`}>
            <motion.div
                className='lesson-page'
                initial={{opacity: 0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration: 0.2}}
            >
                <LessonChat messages={messages}/>
                <button className="lesson-page__btn btn" onClick={() => buttonClickHandler()}>Прочитано</button>
            </motion.div>
        </ModuleLayout>
    );
}

export default LessonPage;