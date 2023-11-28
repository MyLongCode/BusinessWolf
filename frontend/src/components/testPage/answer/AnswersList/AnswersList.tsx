import type IAnswer from 'models/IAnswer'
import type IQuestion from 'models/IQuestion'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import Answer from '../Answer'

const AnswersList = ({
	testID,
	answers,
	questions
}: {
	testID: string
	answers: IAnswer[]
	questions: IQuestion[]
}) => {
	const navigate = useNavigate()
	const location = useLocation()
	const { questions: addedQuestions } = useTypedSelector(state => state.tests)
	const { pushTest } = useActions()
	const [selected, setSelected] = useState<number[]>([])
	const { selectAnswer } = useActions()

	useEffect(() => {
		if (questions.length > 0 && addedQuestions.length === questions.length) {
			pushTest(Number(testID))
			navigate(`${location.pathname}/result`)
		}
		// eslint-disable-next-line
	}, [addedQuestions.length, testID, location.pathname, questions.length])

	const clickHandler = (id: number) => {
		if (!selected.includes(id)) {
			setSelected(prevState => [...prevState, id])
			selectAnswer(id)
		} else {
			setSelected(prevState => prevState.filter(item => item !== id))
			selectAnswer(id)
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
					/>
				)
			})}
		</ul>
	)
}

export default AnswersList
