import MainLayout from 'components/layouts/mainLayout/MainLayout'
import CoursesList from 'components/mainPage/courses/CoursesList'
import { motion } from 'framer-motion'
import React from 'react'
import useCourses from 'hooks/useCourses'
import './mainPage.css'

function MainPage() {
	const courses = useCourses()

	return (
		<MainLayout>
			<motion.div className='main'>
				<div className='header__greeting greeting'>
					<h1 className='greeting__heading'>Hello, bro</h1>
					<span className='what-to-learn'>What do you want to learn?</span>
				</div>
				<CoursesList courses={courses} />
			</motion.div>
		</MainLayout>
	)
}

export default MainPage
