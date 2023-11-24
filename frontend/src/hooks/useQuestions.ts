import IQuestion from '../models/IQuestion'
import QuestionService from '../services/QuestionService'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useQuestions = (): IQuestion[] => {
	const [questions, setQuestions] = useState<IQuestion[]>([])

	const { data } = useQuery({
		queryKey: ['get questions'],
		queryFn: async () => await QuestionService.fetchQuestions(),
		select: ({ data }) => data
	})

	useEffect(() => {
		if (data) {
			setQuestions(data)
		}
	}, [data])

	return questions
}
