import { useQuery } from '@tanstack/react-query'
import AnswerService from 'services/AnswerService'
import type IAnswer from 'models/IAnswer'
import { useEffect, useState } from 'react'

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
