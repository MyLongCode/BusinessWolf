import React from 'react';
import './questionResult.css'
import IAnswer from "../../models/IAnswer";

interface IResultProps {
    question_id: number,
    question_explanation: string,
    answers: IAnswer[],
    is_correct: boolean
}

function QuestionResult(props: IResultProps) {
    return (
        <li className='question-result'>
            <h4 className='question-result__title'>{props.question_id} вопрос</h4>
            <p className={`question-result__your-answer your-answer your-answer_${props.is_correct ? 'good' : 'bad'}`}>
                Ваш ответ
            </p>
            <p className='question-result__answer'>{props.question_explanation}</p>
        </li>
    );
}

export default React.memo(QuestionResult);