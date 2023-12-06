import type IAnswer from './IAnswer'
import type ISelectedAnswer from './ISelectedAnswer'

export default interface ICompletedQuestion {
	id: number
	selected_answers: ISelectedAnswer[]
	question: {
		question_id: number
		answers: IAnswer[]
		text: string
		test: number
	}
	is_right: boolean
	completed_test: number
}
