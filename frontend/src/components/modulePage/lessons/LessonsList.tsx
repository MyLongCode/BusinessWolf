import React from 'react'
import type ILesson from '../../../models/ILesson'
import LessonItem from './lesson/LessonItem'

function LessonsList({
	moduleID,
	lessons
}: {
	moduleID: number
	lessons: ILesson[]
}) {
	return (
		<ul className='lessons'>
			{lessons.length > 0 &&
				lessons.map(lesson => {
					return (
						lesson.module === moduleID && (
							<LessonItem key={lesson.lesson_id} lesson={lesson} />
						)
					)
				})}
		</ul>
	)
}

export default LessonsList
