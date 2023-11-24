import IAnswer from '../models/IAnswer'
import { useEffect, useState } from 'react'
import useAnswers from './useAnswers'
import { useQuestions } from './useQuestions'
import IQuestion from '../models/IQuestion'

const shuffle = <T>(array: T[]): T[] => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		let temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
	return array
}

export const useTestsData = (): {
	questions: IQuestion[]
	answers: Map<number, IAnswer[]>
} => {
	const answersData = useAnswers()
	const questionsData = useQuestions()

	const [questions, setQuestions] = useState<IQuestion[]>([])
	const [answers, setAnswers] = useState<Map<number, IAnswer[]>>(new Map())

	useEffect(() => {
		if (
			questionsData.length > 0 &&
			answersData.length > 0 &&
			answers.size === 0
		) {
			for (const question of questionsData) {
				setAnswers(prevState =>
					prevState.set(
						question.question_id,
						shuffle(answersData).filter(
							answer => answer.question === question.question_id
						)
					)
				)
			}
			setQuestions(questionsData)
		}
	}, [questionsData, answersData, answers])

	return { questions, answers }
}
