import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Links from '../../../../config/links.config'
import type ILesson from '../../../../models/ILesson'
import './lesson.css'

function LessonItem({ lesson }: { lesson: ILesson }) {
	const { courseID, id: moduleID } = useParams<{
		courseID: string
		id: string
	}>()

	return (
		<Link
			to={Links.lesson(courseID, moduleID, lesson.lesson_id)}
			className='test-link'
		>
			<li className='lessons__lesson lesson'>
				<h3 className='lesson__title'>{lesson.name}</h3>
				<p className='lesson__desc'>{lesson.description}</p>
				<p className='lesson__time'>{lesson.duration} мин</p>
			</li>
		</Link>
	)
}

export default React.memo(LessonItem)
