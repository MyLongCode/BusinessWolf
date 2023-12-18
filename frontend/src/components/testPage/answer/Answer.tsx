import type IAnswer from 'models/IAnswer'
import { clsx } from 'clsx'
import React from 'react'
import styles from './answer.module.css'

function Answer({
	answer,
	isSelected,
	clickHandler,
	isSolo
}: {
	answer: IAnswer
	isSelected: boolean
	clickHandler: (answer_id: number) => void
	isSolo?: boolean
}) {
	return (
		<li
			className={clsx(
				styles.answer,
				isSelected ? styles.answer_selected : null,
				isSolo ? styles.solo : null
			)}
			onClick={() => {
				clickHandler(answer.answer_id)
			}}
		>
			<div className={clsx(styles.toggle, isSelected ? styles.toggle_selected : null)}>
				{isSelected && <div className={styles.toggle__dot} />}
			</div>
			<p>{`${answer.text}`}</p>
		</li>
	)
}

export default React.memo(Answer)
