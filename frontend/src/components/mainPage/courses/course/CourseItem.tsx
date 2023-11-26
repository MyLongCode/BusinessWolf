import React from 'react'
import './course.css'
import * as wolfs from 'assets/images/wolfes'
import type ICourse from '../../../../models/ICourse'
import { Link } from 'react-router-dom'
import Links from '../../../../config/links.config'

const images = [wolfs.wolf_1, wolfs.wolf_2, wolfs.wolf_3, wolfs.wolf_4]

function CourseItem({ course }: { course: ICourse }) {
	return (
		<li className='courses__course course'>
			<div className='course__content'>
				<h2 className='course__title'>{course.name}</h2>
				<p className='course__description'>{course.description}</p>
				<Link
					to={Links.course(course.course_id)}
					className='course__continue-btn btn'
				>
					Продолжить
				</Link>
			</div>
			<img
				src={images[course.course_id % images.length].default}
				alt='Волк'
				className='course__img'
			/>
		</li>
	)
}

export default React.memo(CourseItem)
