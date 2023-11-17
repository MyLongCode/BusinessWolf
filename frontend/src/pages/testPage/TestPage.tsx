import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import './testPage.css';
import Answer from "../../components/answer/Answer";
import {useActions} from "../../hooks/useActions";
import QuestionService from "../../services/QuestionService";
import IQuestion from "../../models/IQuestion";
import {AxiosError} from "axios";
import IAnswer from "../../models/IAnswer";
import AnswerService from "../../services/AnswerService";
import { motion } from 'framer-motion';

type TestParams = {
    id: string
}

function TestPage() {
    const {id} = useParams<TestParams>()
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [answers, setAnswers] = useState<Map<number, IAnswer[]>>(new Map());
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
    const {addQuestion, pushTest} = useActions()
    const [currentQuestion, setCurrentQuestion] = useState<number>(1);
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const shuffle = (array: any[]) => {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array
        }

        let answers: IAnswer[];
        AnswerService.fetchAnswers()
            .then(response => {
                answers = shuffle(response.data)
            })
            .catch(e => {
                console.error(e as AxiosError)
            })

        QuestionService.fetchQuestions()
            .then(response => {
                setQuestions(response.data.filter(item => item.test === Number(id)).map(question => {
                    setAnswers(prevState => prevState.set(
                        question.id,
                        answers.filter(answer => answer.question === question.id)
                    ))
                    return question
                }))
            })
            .catch(e => {
                console.error(e as AxiosError)
            })
    }, []);

    const onAnswerClick = (id: number) => {
        if (!selectedAnswers.includes(id)) {
            setSelectedAnswers(prevState => [...prevState, id])
        } else {
            setSelectedAnswers(prevState => prevState.filter(item => item !== id))
        }
    }

    const onSubmit = async () => {
        addQuestion({answers: selectedAnswers, id: questions[currentQuestion-1].id})
        if (currentQuestion < questions.length) {
            setCurrentQuestion(prevState => prevState + 1)
        } else {
            pushTest(Number(id))
            navigate(`${location.pathname}/result`)
        }
        setSelectedAnswers([])
    }

    return (
        <>
            {questions.length > 0 &&
                <motion.div
                    className='test-page'
                    initial={{opacity: 0.1}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.1}}
                >
                    <p className='test-page__counter'>{`${currentQuestion}/${questions.length}`}</p>
                    <p className='test-page__question'>{questions[currentQuestion - 1].text}</p>
                    <h3 className='test-page__select-text'>Выберите верный ответ</h3>
                    <ul className='test-page__answers answers'>
                        {answers.get(currentQuestion)?.map(answer => {
                            return <Answer key={answer.id} answer={answer}
                                           isSelected={selectedAnswers.includes(answer.id)}
                                           clickHandler={() => onAnswerClick(answer.id)}/>
                        })}
                    </ul>
                    <button className='test-page__answer-btn answer-btn' onClick={() => onSubmit()}>Ответить</button>
                </motion.div>
            }
        </>
    );
}

export default TestPage;