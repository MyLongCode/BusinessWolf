import ISelectedAnswer from '../../models/ISelectedAnswer'
import IAnswer from '../../models/IAnswer'

export interface IResultProps {
	title: string
	selectedAnswers: ISelectedAnswer[]
	questionExplanation: string
	allAnswers: IAnswer[]
}
