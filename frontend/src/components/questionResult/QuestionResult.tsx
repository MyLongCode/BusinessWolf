import React, { useMemo } from 'react'
import './questionResult.css'
import IAnswer from '../../models/IAnswer'
import ISelectedAnswer from '../../models/ISelectedAnswer'

interface IResultProps {
	title: string
	selectedAnswers: ISelectedAnswer[]
	questionExplanation: string
	allAnswers: IAnswer[]
}

function QuestionResult({
	selectedAnswers,
	allAnswers,
	title,
	questionExplanation
}: IResultProps) {
	const userAnswers = useMemo(
		() => selectedAnswers.map(answer => answer.answer),
		[selectedAnswers]
	)
	const rightAnswers = useMemo(
		() => allAnswers.filter(answer => answer.is_right),
		[allAnswers]
	)
	const isCorrect = useMemo(
		() =>
			selectedAnswers.every(selAnswer =>
				rightAnswers
					.map(rAnswer => rAnswer.answer_id)
					.includes(selAnswer.answer.answer_id)
			),
		[selectedAnswers, rightAnswers]
	)

	return (
		<li className='question-result'>
			<h4 className='question-result__title'>{title}</h4>
			<p
				className={`question-result__your-answer your-answer your-answer_${
					isCorrect ? 'good' : 'bad'
				}`}
			>
				{userAnswers.map(answer => answer.text).join(', ')}
			</p>
			{!isCorrect && (
				<>
					<h5 className='question-result__right-title'>Правильный ответ:</h5>
					<p className='question-result__right-answer right-answer'>
						{rightAnswers.map(answer => answer.text).join(', ')}
					</p>
				</>
			)}
			<p className='question-result__answer'>{questionExplanation}</p>
		</li>
	)
}

export default React.memo(QuestionResult)
