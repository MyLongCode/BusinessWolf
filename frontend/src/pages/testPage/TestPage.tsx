import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import './testPage.css';
import Answer from "../../components/answer/Answer";
import {useActions} from "../../hooks/useActions";
import ModuleLayout from "../../components/layouts/moduleLayout/ModuleLayout";
import {motion} from 'framer-motion';
import useQuestions from "../../hooks/useQuestions";

type TestParams = {
    id: string
}

function TestPage() {
    const {id} = useParams<TestParams>()
    const {answers, questions} = useQuestions(Number(id))
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
    const {addQuestion, pushTest} = useActions()
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const navigate = useNavigate()
    const location = useLocation()

    const onAnswerClickHandler = (id: number) => {
        if (!selectedAnswers.includes(id)) {
            setSelectedAnswers(prevState => [...prevState, id])
        } else {
            setSelectedAnswers(prevState => prevState.filter(item => item !== id))
        }
    }

    const onSubmitHandler = async () => {
        addQuestion({answers: selectedAnswers, id: questions[currentQuestion - 1].id})
        if (currentQuestion < questions.length) {
            setCurrentQuestion(prevState => prevState + 1)
        } else {
            pushTest(Number(id))
            navigate(`${location.pathname}/result`)
        }
        setSelectedAnswers([])
    }

    return (
        <ModuleLayout headerTitle={`Тест ${id}`}>
            {questions.length > 0 &&
                <motion.div
                    className='test-page'
                    initial={{opacity: 0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{duration: 0.2}}
                >
                    <p className='test-page__counter'>{`${currentQuestion}/${questions.length}`}</p>
                    <p className='test-page__question'>{questions[currentQuestion - 1].text}</p>
                    <h3 className='test-page__select-text'>Выберите верный ответ</h3>
                    <ul className='test-page__answers answers'>
                        {answers.get(currentQuestion)?.map(answer => {
                            return <Answer key={answer.id} answer={answer}
                                           isSelected={selectedAnswers.includes(answer.id)}
                                           clickHandler={() => onAnswerClickHandler(answer.id)}/>
                        })}
                    </ul>
                    <button className='test-page__answer-btn answer-btn' onClick={() => onSubmitHandler()}>Ответить
                    </button>
                </motion.div>
            }
        </ModuleLayout>
    );
}

export default TestPage;