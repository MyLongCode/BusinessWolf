import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './lessonPage.css'
import ModuleLayout from '../../components/layouts/moduleLayout/ModuleLayout'
import { motion } from 'framer-motion'
import LessonChat from '../../components/lessonChat/LessonChat'
import useLessons from '../../hooks/useLessons'

type LessonPageParams = {
	id: string
	moduleID: string
	courseID: string
}

function LessonPage() {
	const { id, moduleID, courseID } = useParams<LessonPageParams>()
	const navigate = useNavigate()

	const buttonClickHandler = () => {
		navigate(`/course/${courseID}/module/${moduleID}/lessons`)
	}

	return (
		<ModuleLayout headerTitle={`Урок ${id}`} pageTitle={`Урок ${id}`}>
			<motion.div
				className='lesson-page'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				<LessonChat />
				<button
					className='lesson-page__btn btn'
					onClick={() => buttonClickHandler()}
				>
					Прочитано
				</button>
			</motion.div>
		</ModuleLayout>
	)
}

export default LessonPage
