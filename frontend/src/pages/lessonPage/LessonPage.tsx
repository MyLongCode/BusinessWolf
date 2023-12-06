import { motion } from 'framer-motion'
import wolf from 'assets/images/lesson-wolf.png'
import React from 'react'
import { useParams } from 'react-router-dom'
import ModuleLayout from '../../components/layouts/moduleLayout/ModuleLayout'
import LessonChat from '../../components/testPage/lessonChat/LessonChat'
import './lessonPage.css'
import type { LessonPageParams } from './lessonPage.types'

function LessonPage() {
	const { id } = useParams<LessonPageParams>()

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
				<img
					src={wolf}
					alt=''
					width={420}
					height={1010}
					className='lesson-page__wolf'
				/>
			</motion.div>
		</ModuleLayout>
	)
}

export default LessonPage
