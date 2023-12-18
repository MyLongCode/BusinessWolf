import React from 'react'
import { useCompletedLessons } from '../../../hooks/useCompletedLessons'
import type ILesson from '../../../models/ILesson'
import LessonItem from './lesson/LessonItem'

function LessonsList({ moduleID, lessons }: { moduleID: number; lessons: ILesson[] }) {
	const completedLessons = useCompletedLessons()

	return (
		<ul className='lessons'>
			{lessons.length > 0 &&
				lessons.map(lesson => {
					return (
						lesson.module === moduleID && (
							<LessonItem
								key={lesson.lesson_id}
								lesson={lesson}
								isCompleted={completedLessons.some(item => item.lesson === lesson.lesson_id)}
							/>
						)
					)
				})}
		</ul>
	)
}

export default LessonsList
