import CourseService from 'services/CourseService'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Links from '../../../config/links.config'
import useCourses from '../../../hooks/useCourses'
import './profileCourseProgress.css'
import { ProfileCourseProgressProps } from './profileCourseProgress.types'

function ProfileCourseProgress({ courseID }: ProfileCourseProgressProps) {
	const [progress, setProgress] = useState(0)
	const course = useCourses(courseID)
	const [lessonsCount, setLessonsCount] = useState(0)
	const [testsCount, setTestsCount] = useState(0)
	const [completedLessonsCount, setCompletedLessonsCount] = useState(0)
	const [completedTestsCount, setCompletedTestsCount] = useState(0)

	useEffect(() => {
		if (courseID) {
			CourseService.fetchCourseProgress(courseID).then(({ data }) => {
				const percent = data.progress * 100
				setProgress(Math.round(percent))
				setLessonsCount(data.lessons)
				setCompletedLessonsCount(data.completed_lessons)
				setTestsCount(data.tests)
				setCompletedTestsCount(data.completed_tests)
			})
		}
	}, [courseID])

	return (
		<Link to={Links.course(courseID)} className='profile-course'>
			<div className='profile-course__top-container top-container'>
				<h2 className='top-container__title'>{course?.name}</h2>
				<div className='top-container__info'>
					<p className='top-container__lessons-count'>{`${completedLessonsCount}/${lessonsCount} конспектов`}</p>
					<p className='top-container__tests-count'>{`${completedTestsCount}/${testsCount} тестов`}</p>
				</div>
			</div>
			<div className='profile-course__progress-bar progress-bar'>
				<label htmlFor='course-progress' className='progress-bar__percents'>
					{progress + '%'}
				</label>
				<progress
					id='course-progress'
					className='progress-bar__progress'
					max={100}
					value={progress}
				/>
			</div>
		</Link>
	)
}

export default React.memo(ProfileCourseProgress)
