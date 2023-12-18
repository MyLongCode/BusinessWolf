import type IAnswer from 'models/IAnswer'
import type IQuestion from 'models/IQuestion'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import Links from '../../../../config/links.config'
import { useCompletedTests } from '../../../../hooks/useCompletedTests'
import Answer from '../Answer'

const AnswersList = ({
	testID,
	answers,
	questions,
	rightCount
}: {
	testID: string
	answers: IAnswer[]
	questions: IQuestion[]
	rightCount: number
}) => {
	const { courseID, moduleID } = useParams<{ courseID: string; moduleID: string }>()
	const navigate = useNavigate()
	const location = useLocation()
	const { questions: addedQuestions } = useTypedSelector(state => state.tests)
	const { pushTest } = useActions()
	const [selected, setSelected] = useState<number[]>([])
	const { selectAnswer, setSelectedAnswers } = useActions()
	const isCompleted = useCompletedTests().some(test => test.test === Number(testID))

	useEffect(() => {
		if (isCompleted) {
			navigate(Links.testResult(courseID, moduleID, testID))
		}
		// eslint-disable-next-line
	}, [isCompleted, courseID, moduleID, testID])

	useEffect(() => {
		if (questions.length > 0 && addedQuestions.length === questions.length) {
			pushTest(Number(testID))
			navigate(Links.testResult(courseID, moduleID, testID))
		}
		// eslint-disable-next-line
	}, [addedQuestions.length, testID, location.pathname, questions.length])

	const clickHandler = (id: number) => {
		if (rightCount > 1) {
			if (!selected.includes(id)) {
				setSelected(prevState => [...prevState, id])
				selectAnswer(id)
			} else {
				setSelected(prevState => prevState.filter(item => item !== id))
				selectAnswer(id)
			}
		} else {
			setSelectedAnswers([id])
			setSelected([id])
		}
	}

	return (
		<ul className='test-page__answers answers'>
			{answers.map(answer => {
				return (
					<Answer
						key={answer.answer_id}
						answer={answer}
						isSelected={selected.includes(answer.answer_id)}
						clickHandler={() => clickHandler(answer.answer_id)}
						isSolo={rightCount === 1}
					/>
				)
			})}
		</ul>
	)
}

export default AnswersList
