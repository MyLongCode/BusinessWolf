import ModuleLayout from 'components/layouts/moduleLayout/ModuleLayout'
import AnswersList from 'components/testPage/answer/AnswersList/AnswersList'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useActions } from 'hooks/useActions'
import { useTestsData } from 'hooks/useTestsData'
import { useTypedSelector } from 'hooks/useTypedSelector'
import AnswerService from '../../services/AnswerService'
import './testPage.css'
import type { TestParams } from './testPage.types'


function TestPage() {
	const { id } = useParams<TestParams>()
	const { selectedAnswers } = useTypedSelector(state => state.tests)
	const { addQuestion } = useActions()
	const { questions, answers } = useTestsData(id!)
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [rightCount, setRightCount] = useState(-1)

	useEffect(() => {
		if (questions.length > 0) {
			AnswerService.getRightAnswersCount(questions[currentQuestion].question_id).then(response => {
				setRightCount(response.data.count)
			})
		}
	}, [currentQuestion, questions])

	const onSubmitHandler = async () => {
		addQuestion({
			answers: selectedAnswers,
			id: questions[currentQuestion].question_id
		})
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(prevState => prevState + 1)
		}
	}

	return (
		<ModuleLayout headerTitle={`Тест ${id}`} pageTitle={`Тест ${id}`}>
			{answers.size > 0 && (
				<motion.div
					className='test-page'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
				>
					<p className='test-page__counter'>{`${currentQuestion + 1}/${questions.length}`}</p>
					<p className='test-page__question'>{questions[currentQuestion].text}</p>
					<h3 className='test-page__select-text'>
						Выберите {rightCount === 1 ? 'верный ответ' : 'верные ответы'}
					</h3>
					<AnswersList
						testID={id || ''}
						answers={answers.get(questions[currentQuestion].question_id) || []}
						questions={questions}
						rightCount={rightCount}
					/>
					<button
						disabled={selectedAnswers.length === 0}
						className='test-page__answer-btn btn'
						onClick={() => onSubmitHandler()}
					>
						Ответить
					</button>
				</motion.div>
			)}
		</ModuleLayout>
	)
}

export default TestPage