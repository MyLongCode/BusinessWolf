import type ISelectedAnswer from './ISelectedAnswer'
import type IAnswer from './IAnswer'

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
