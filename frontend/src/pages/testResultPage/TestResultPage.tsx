import React from 'react';
import './testResultPage.css'
import QuestionResult from "../../components/questionResult/QuestionResult";
import {Link, useParams} from 'react-router-dom';

function TestResultPage() {
    const {courseID, moduleID} = useParams<{courseID: string, moduleID: string}>()

    return (
        <div className='test-result-page'>
            <h3 className='test-result-page__heading'>Давайте проверим ваши ответы</h3>
            <ul className='test-result-page__questions'>
                <QuestionResult question_id={0}
                                question_explanation={'Объяснения ответа и почему он верный и тд .... ake new friends, plan a family dinner, go shopping and much more!мLearn the basics of the langLearn the basics of the language'}
                                answers={[]} is_correct={true}/>
            </ul>
            {/*<button className="test-result-page__btn">Завершить</button>*/}
            <Link to={`/course/${courseID}/module/${moduleID}`}>Завершить</Link>
        </div>
    );
}

export default TestResultPage;