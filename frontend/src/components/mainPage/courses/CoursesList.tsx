import React from 'react'
import type ICourse from '../../../models/ICourse'
import CourseItem from './course/CourseItem'

function CoursesList({ courses }: { courses: ICourse[] }) {
	return (
		<ul className='courses'>
			{courses.map(course => {
				return <CourseItem course={course} key={course.course_id} />
			})}
		</ul>
	)
}

export default CoursesList
