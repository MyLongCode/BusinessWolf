import React from 'react';
import './testResultPage.css'
import QuestionResult from "../../components/questionResult/QuestionResult";
import {Link, useParams} from 'react-router-dom';
import ModuleLayout from "../../components/layouts/moduleLayout/ModuleLayout";
import useCompletedTest from "../../hooks/useCompletedTest";

function TestResultPage() {
    const {courseID, moduleID, id} = useParams<{ courseID: string, moduleID: string, id: string }>()
    const questions = useCompletedTest()

    return (
        <ModuleLayout headerTitle={`Результат теста ${id}`} pageTitle={`Результат теста ${id}`}>
            <div className='test-result-page'>
                <h3 className='test-result-page__heading'>Давайте проверим ваши ответы</h3>
                <ul className='test-result-page__questions'>
                    {questions && questions.map(question => {
                        return <QuestionResult key={question.id} title={question.question.text}
                                                      selectedAnswers={question.selected_answers}
                                                      questionExplanation={'Объяснение'}
                                                      allAnswers={question.question.answers}/>
                    })}
                </ul>
                {/*<button className="test-result-page__btn btn">Завершить</button>*/}
                <Link to={`/course/${courseID}/module/${moduleID}`}>Завершить</Link>
            </div>
        </ModuleLayout>
    );
}

export default TestResultPage;