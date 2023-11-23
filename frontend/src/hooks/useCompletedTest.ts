import { useTypedSelector } from './useTypedSelector'
import { useEffect, useState } from 'react'
import ICompletedQuestion from '../models/ICompletedQuestion'

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
