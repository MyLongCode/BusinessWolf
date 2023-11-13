import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './testPage.css';
import Answer from "../../components/answer/Answer";
import {useActions} from "../../hooks/useActions";
import QuestionService from "../../services/QuestionService";
import IQuestion from "../../models/IQuestion";
import {AxiosError} from "axios";

type TestParams = {
    id: string
}

function TestPage() {
    const {id} = useParams<TestParams>()
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
    const {addAnswers} = useActions()
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    useEffect(() => {
        QuestionService.fetchQuestions()
            .then(response => {
                setQuestions(response.data.filter(item => item.test === Number(id)))
            })
            .catch(e => {
                console.log(e as AxiosError)
            })
    }, []);

    const onAnswerClick = (id: number) => {
        if (!selectedAnswers.includes(id)) {
            setSelectedAnswers(prevState => [...prevState, id])
        } else {
            setSelectedAnswers(prevState => prevState.filter(item => item !== id))
        }
    }

    const onSubmit = () => {
        if(currentQuestion + 1 < questions.length) {
            addAnswers(selectedAnswers)
            setCurrentQuestion(prevState => prevState + 1)
            setSelectedAnswers([])
        } else {
            alert('Ответы отправлены на сервер')
        }
    }

    return (
        <>
            { questions.length > 0 &&
                <div className='test-page'>
                    <p className='test-page__counter'>{`${currentQuestion + 1}/${questions.length}`}</p>
                    <p className='test-page__question'>Tool yang dapat digunakan untuk memanipulasi dua objek atau lebih atau
                        lebih Pada Adobe Illustrator disebut ...</p>
                    <h3 className='test-page__select-text'>Выберите верный ответ</h3>
                    <ul className='test-page__answers answers'>
                        <Answer id={currentQuestion * 4 + 1} isSelected={selectedAnswers.includes(currentQuestion * 4 + 1)}
                                clickHandler={(id: number) => onAnswerClick(id)}/>
                        <Answer id={currentQuestion * 4 + 2} isSelected={selectedAnswers.includes(currentQuestion * 4 + 2)}
                                clickHandler={(id: number) => onAnswerClick(id)}/>
                        <Answer id={currentQuestion * 4 + 3} isSelected={selectedAnswers.includes(currentQuestion * 4 + 3)}
                                clickHandler={(id: number) => onAnswerClick(id)}/>
                        <Answer id={currentQuestion * 4 + 4} isSelected={selectedAnswers.includes(currentQuestion * 4 + 4)}
                                clickHandler={(id: number) => onAnswerClick(id)}/>
                    </ul>
                    <button className='test-page__answer-btn answer-btn' onClick={() => onSubmit()}>Ответить</button>
                </div>
            }
        </>
    );
}

export default TestPage;