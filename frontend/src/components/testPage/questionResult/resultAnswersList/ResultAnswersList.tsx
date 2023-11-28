import { clsx } from 'clsx'
import React from 'react'
import IAnswer from '../../../../models/IAnswer'

const ResultAnswersList = ({ answers }: { answers: IAnswer[] }) => {
	return (
		<>
			{answers.map(answer => (
				<p
					className={clsx('question-result__answer', 'answer', {
						answer_good: answer.is_right,
						answer_bad: !answer.is_right
					})}
				>
					{answer.text}
				</p>
			))}
		</>
	)
}

export default ResultAnswersList
