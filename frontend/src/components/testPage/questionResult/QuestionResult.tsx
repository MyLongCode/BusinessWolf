import { clsx } from 'clsx'
import React, { useMemo } from 'react'
import type { IResultProps } from '../../../pages/testResultPage/testResultPage.interface'
import './questionResult.css'
import ResultAnswersList from './resultAnswersList/ResultAnswersList'

function QuestionResult({ selectedAnswers, allAnswers, title }: IResultProps) {
	const userAnswers = useMemo(() => selectedAnswers.map(answer => answer.answer), [selectedAnswers])
	const rightAnswers = useMemo(() => allAnswers.filter(answer => answer.is_right), [allAnswers])
	const isCorrect = useMemo(
		() =>
			selectedAnswers.every(selAnswer =>
				rightAnswers.map(rAnswer => rAnswer.answer_id).includes(selAnswer.answer.answer_id)
			),
		[selectedAnswers, rightAnswers]
	)

	return (
		<li className='question-result'>
			<h4 className='question-result__title'>{title}</h4>
			<h5 className='question-result__heading'>Ваш ответ:</h5>
			<ResultAnswersList answers={userAnswers} />
			{!isCorrect && (
				<>
					<h5 className='question-result__heading question-result__heading_right'>
						Правильный ответ:
					</h5>
					<ResultAnswersList answers={rightAnswers} />
				</>
			)}

			<div className='question-result__explanation-wrapper'>
				<h5 className='question-result__explanation-heading'>Пояснение</h5>
				{allAnswers.map(answer => {
					return (
						<p key={answer.answer_id} className={clsx('question-result__explanation')}>
							{answer.text} - {answer.explanation}
						</p>
					)
				})}
			</div>
		</li>
	)
}

export default React.memo(QuestionResult)
