import ModuleLayout from 'components/layouts/moduleLayout/ModuleLayout'
import QuestionResult from 'components/testPage/questionResult/QuestionResult'
import { motion } from 'framer-motion'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useCompletedTest from 'hooks/useCompletedTest'
import Links from '../../config/links.config'
import { useCompletedTests } from '../../hooks/useCompletedTests'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './testResultPage.css'

function TestResultPage() {
	const { courseID, moduleID, id } = useParams<{
		courseID: string
		moduleID: string
		id: string
	}>()
	const questions = useCompletedTest(id!)
	const { areTestsLoading } = useTypedSelector(state => state.tests)
	const isTestsCompleted: boolean = useCompletedTests().some(test => Number(id!) === test.test)

	console.log(isTestsCompleted)

	return (
		<ModuleLayout headerTitle={`Результат теста ${id}`} pageTitle={`Результат теста ${id}`}>
			{!areTestsLoading && (
				<motion.div
					className='test-result-page'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
				>
					<h3 className='test-result-page__heading'>Давайте проверим ваши ответы</h3>
					<ul className='test-result-page__questions'>
						{questions &&
							questions.map(question => {
								return (
									<QuestionResult
										key={question.id}
										title={question.question.text}
										selectedAnswers={question.selected_answers}
										allAnswers={question.question.answers}
									/>
								)
							})}
					</ul>
					<Link
						className='test-result-page__btn btn'
						to={`${Links.module(courseID, moduleID)}/lessons`}
					>
						Завершить
					</Link>
				</motion.div>
			)}
		</ModuleLayout>
	)
}

export default TestResultPage
