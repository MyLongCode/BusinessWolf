import { useQuery } from '@tanstack/react-query'
import type IAnswer from 'models/IAnswer'
import AnswerService from 'services/AnswerService'
import { useEffect, useState } from 'react'

/**
 * @description
 * Это хук для получения ответов для тестов
 */
const useAnswers = (): IAnswer[] => {
	const [answers, setAnswers] = useState<IAnswer[]>([])

	const { data } = useQuery({
		queryKey: ['get answers'],
		queryFn: async () => await AnswerService.fetchAnswers(),
		select: ({ data }) => data
	})

	useEffect(() => {
		if (data) {
			setAnswers(data)
		}
	}, [data])

	return answers
}

export default useAnswers
