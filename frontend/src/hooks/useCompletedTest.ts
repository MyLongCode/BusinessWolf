import type ICompletedQuestion from 'models/ICompletedQuestion'
import { useEffect, useState } from 'react'
import { useTypedSelector } from './useTypedSelector'

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
