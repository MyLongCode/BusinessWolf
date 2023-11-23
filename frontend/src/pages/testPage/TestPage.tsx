import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import './testPage.css';
import Answer from "../../components/answer/Answer";
import {useActions} from "../../hooks/useActions";
import ModuleLayout from "../../components/layouts/moduleLayout/ModuleLayout";
import {motion} from 'framer-motion';
import {useTestsData} from "../../hooks/useTestsData";
import {useTypedSelector} from "../../hooks/useTypedSelector";

type TestParams = {
    id: string
}

function TestPage() {
    const {id} = useParams<TestParams>()
    const {questions, answers} = useTestsData(Number(id))
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
    const {addQuestion, pushTest} = useActions()
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const navigate = useNavigate()
    const location = useLocation()
    const {questions: addedQuestions} = useTypedSelector(state => state.tests)

    const onAnswerClickHandler = (id: number) => {
        if (!selectedAnswers.includes(id)) {
            setSelectedAnswers(prevState => [...prevState, id])
        } else {
            setSelectedAnswers(prevState => prevState.filter(item => item !== id))
        }
    }

    const onSubmitHandler = async () => {
        addQuestion({answers: selectedAnswers, id: questions[currentQuestion - 1].question_id})
        if (currentQuestion < questions.length) {
            setCurrentQuestion(prevState => prevState + 1)
        }
        setSelectedAnswers([])
    }

    useEffect(() => {
        if(questions.length > 0 && addedQuestions.length === questions.length) {
            pushTest(Number(id))
            navigate(`${location.pathname}/result`)
        }
    }, [addedQuestions.length]);

    return (
        <ModuleLayout headerTitle={`Тест ${id}`} pageTitle={`Тест ${id}`}>
            {questions && questions.length > 0 &&
                <motion.div
                    className='test-page'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                >
                    <p className='test-page__counter'>{`${currentQuestion}/${questions.length}`}</p>
                    <p className='test-page__question'>{questions[currentQuestion - 1].text}</p>
                    <h3 className='test-page__select-text'>Выберите верный ответ</h3>
                    <ul className='test-page__answers answers'>
                        {answers.get(currentQuestion)?.map(answer => {
                            return <Answer key={answer.answer_id} answer={answer}
                                           isSelected={selectedAnswers.includes(answer.answer_id)}
                                           clickHandler={() => onAnswerClickHandler(answer.answer_id)}/>
                        })}
                    </ul>
                    <button disabled={selectedAnswers.length === 0} className='test-page__answer-btn btn'
                            onClick={() => onSubmitHandler()}>Ответить
                    </button>
                </motion.div>
            }
        </ModuleLayout>
    );
}

export default TestPage;