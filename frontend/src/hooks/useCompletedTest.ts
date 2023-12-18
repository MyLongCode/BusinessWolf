import type ICompletedQuestion from 'models/ICompletedQuestion'
import { useEffect, useState } from 'react'
import TestService from '../services/TestService'
import { useTypedSelector } from './useTypedSelector'

/**
 * @description
 * Это хук для получения последнего завершенного теста
 */
export const useCompletedTest = (id: string | number) => {
	const { completedTest } = useTypedSelector(state => state.tests)
	const [questions, setQuestions] = useState<ICompletedQuestion[]>([])

	useEffect(() => {
		if (completedTest) {
			setQuestions(completedTest.completed_questions)
		} else {
			TestService.getCompletedTestResult(id).then(response => {
				setQuestions(response.data.completed_questions)
			})
		}
	}, [completedTest, questions, id])

	return questions
}

export default useCompletedTest
