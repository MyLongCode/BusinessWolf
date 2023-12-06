import IAnswer from '../../models/IAnswer'
import ISelectedAnswer from '../../models/ISelectedAnswer'

export interface IResultProps {
	title: string
	selectedAnswers: ISelectedAnswer[]
	questionExplanation: string
	allAnswers: IAnswer[]
}
