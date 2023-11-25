import IAnswer from '../models/IAnswer'
import { useEffect, useState } from 'react'
import IQuestion from '../models/IQuestion'
import { useQuery } from '@tanstack/react-query'
import AnswerService from '../services/AnswerService'
import QuestionService from '../services/QuestionService'

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
	const [questions, setQuestions] = useState<IQuestion[]>([])
	const [answers, setAnswers] = useState<Map<number, IAnswer[]>>(new Map())

	const { data, isSuccess } = useQuery({
		queryKey: ['get tests data'],
		queryFn: async () => {
			const answersResponse = await AnswerService.fetchAnswers()
			const questionsResponse = await QuestionService.fetchQuestions()

			return {
				questionsResponse: questionsResponse,
				answersResponse: answersResponse
			}
		},
		select: ({ questionsResponse, answersResponse }) => {
			return {
				questionsData: questionsResponse.data,
				answersData: answersResponse.data
			}
		}
	})

	useEffect(() => {
		if (isSuccess) {
			setQuestions(data.questionsData)

			data.questionsData.forEach(question => {
				setAnswers(prevState =>
					prevState.set(
						question.question_id,
						shuffle(data.answersData).filter(
							answer => answer.question === question.question_id
						)
					)
				)
			})
		}
	}, [isSuccess])

	return { questions, answers }
}
