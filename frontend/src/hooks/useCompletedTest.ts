import type ICompletedQuestion from 'models/ICompletedQuestion'
import { useEffect, useState } from 'react'
import { useTypedSelector } from './useTypedSelector'

/**
 * @description
 * Это хук для получения последнего завершенного теста
 */
export const useCompletedTest = () => {
	const { completedTest } = useTypedSelector(state => state.tests)
	const [questions, setQuestions] = useState<ICompletedQuestion[]>([])

	useEffect(() => {
		if (completedTest) {
			setQuestions(completedTest.completed_questions)
		}
	}, [completedTest])

	return questions
}

export default useCompletedTest
