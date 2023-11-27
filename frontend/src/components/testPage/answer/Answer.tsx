import type IAnswer from 'models/IAnswer'
import React from 'react'
import './answer.css'

function Answer({
	answer,
	isSelected,
	clickHandler
}: {
	answer: IAnswer
	isSelected: boolean
	clickHandler: (answer_id: number) => void
}) {
	return (
		<li
			className={`answer ${isSelected && 'answer_selected'}`}
			onClick={() => {
				clickHandler(answer.answer_id)
			}}
		>
			<div
				className={`answer__toggle toggle ${isSelected && 'toggle_selected'}`}
			>
				{isSelected && <div className='toggle__dot' />}
			</div>
			<p className='answer__text'>{`${answer.text}`}</p>
		</li>
	)
}

export default React.memo(Answer)
