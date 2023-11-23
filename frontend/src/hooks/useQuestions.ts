import IQuestion from '../models/IQuestion'
import QuestionService from '../services/QuestionService'
import { useQuery } from '@tanstack/react-query'

export const useQuestions = (): IQuestion[] => {
	const { data } = useQuery({
		queryKey: ['get questions'],
		queryFn: () => QuestionService.fetchQuestions(),
		select: ({ data }) => data
	})

	return data || ([] as IQuestion[])
}
