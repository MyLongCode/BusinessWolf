import React from 'react'
import './testResultPage.css'
import QuestionResult from '../../components/questionResult/QuestionResult'
import { Link, useParams } from 'react-router-dom'
import ModuleLayout from '../../components/layouts/moduleLayout/ModuleLayout'
import useCompletedTest from '../../hooks/useCompletedTest'
import { motion } from 'framer-motion'

function TestResultPage() {
	const { courseID, moduleID, id } = useParams<{
		courseID: string
		moduleID: string
		id: string
	}>()
	const questions = useCompletedTest()

	return (
		<ModuleLayout
			headerTitle={`Результат теста ${id}`}
			pageTitle={`Результат теста ${id}`}
		>
			<motion.div
				className='test-result-page'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				<h3 className='test-result-page__heading'>
					Давайте проверим ваши ответы
				</h3>
				<ul className='test-result-page__questions'>
					{questions &&
						questions.map(question => {
							return (
								<QuestionResult
									key={question.id}
									title={question.question.text}
									selectedAnswers={question.selected_answers}
									questionExplanation={`Объяснения ответа и почему он верный и тд
									 .... ake new friends, plan a family dinner, go shopping and much
									  more!мLearn the basics of the langLearn the basics of the language`}
									allAnswers={question.question.answers}
								/>
							)
						})}
				</ul>
				{/*<button className="test-result-page__btn btn">Завершить</button>*/}
				<Link
					className='test-result-page__btn btn'
					to={`/course/${courseID}/module/${moduleID}`}
				>
					Завершить
				</Link>
			</motion.div>
		</ModuleLayout>
	)
}

export default TestResultPage
