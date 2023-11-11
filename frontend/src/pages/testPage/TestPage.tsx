import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './testPage.css';
import Answer from "../../components/answer/Answer";

type TestParams = {
    id: string
}

function TestPage() {
    const {id} = useParams<TestParams>()
    const [questions, setQuestions] = useState([]);
    const selectedAnswers: number[] = []

    const onAnswerClick = (id: number) => {
        if(!selectedAnswers.includes(id)) {
            selectedAnswers.push(id);
        } else {
            const index = selectedAnswers.indexOf(id);
            if(index > -1){
                selectedAnswers.splice(index, 1);
            }
        }

        console.log(selectedAnswers);
    }

    return (
        <div className='test-page'>
            <p className='test-page__counter'>{`${1}/${20}`}</p>
            <p className='test-page__question'>Tool yang dapat digunakan untuk memanipulasi dua objek atau lebih atau
                lebih Pada Adobe Illustrator disebut ...</p>
            <h3 className='test-page__select-text'>Выберите верный ответ</h3>
            <ul className='test-page__answers answers'>
                <Answer id={1} clickHandler={(id: number) => onAnswerClick(id)}/>
                <Answer id={2} clickHandler={(id: number) => onAnswerClick(id)}/>
                <Answer id={3} clickHandler={(id: number) => onAnswerClick(id)}/>
                <Answer id={4} clickHandler={(id: number) => onAnswerClick(id)}/>
            </ul>
            <button className='test-page__answer-btn answer-btn'>Ответить</button>
        </div>
    );
}

export default TestPage;