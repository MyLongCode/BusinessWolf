import type IAnswer from './IAnswer'

export default interface ISelectedAnswer {
	id: number
	answer: IAnswer
	completed_question: number
}
