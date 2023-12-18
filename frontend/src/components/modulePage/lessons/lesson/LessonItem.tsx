import { clsx } from 'clsx'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Links from '../../../../config/links.config'
import type ILesson from '../../../../models/ILesson'
import './lesson.css'

function LessonItem({ lesson, isCompleted }: { lesson: ILesson; isCompleted: boolean }) {
	const { courseID, id: moduleID } = useParams<{
		courseID: string
		id: string
	}>()

	return (
		<Link to={Links.lesson(courseID, moduleID, lesson.lesson_id)} className='test-link'>
			<li
				className={clsx('lessons_lesson', 'lesson', {
					lesson_completed: isCompleted
				})}
			>
				<div className='lesson__wrapper'>
					<h3 className='lesson__title'>{lesson.name}</h3>
					{isCompleted && <p className='lesson__completed-text'>Пройдено</p>}
				</div>
				<p className='lesson__desc'>{lesson.description}</p>
				<p className='lesson__time'>{lesson.duration} мин</p>
			</li>
		</Link>
	)
}

export default React.memo(LessonItem)
