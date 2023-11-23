import ICompletedQuestion from '../ICompletedQuestion'

export default interface IFullCompletedTestResponse {
	id: number
	completed_questions: ICompletedQuestion[]
	user: number
	test: number
}
