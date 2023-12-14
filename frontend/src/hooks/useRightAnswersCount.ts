import { useQuery } from '@tanstack/react-query'
import AnswerService from '../services/AnswerService'

export const useRightAnswersCount = (questionID: string | number): number => {
	const { data } = useQuery({
		queryKey: ['get right answers count'],
		queryFn: () => AnswerService.getRightAnswersCount(questionID),
		select: ({ data }) => data
	})

	return data?.count || -1
}

export default useRightAnswersCount
