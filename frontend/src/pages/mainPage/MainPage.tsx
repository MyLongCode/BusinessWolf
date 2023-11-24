import React from 'react'
import './mainPage.css'
import MainLayout from '../../components/layouts/mainLayout/MainLayout'
import CoursesList from '../../components/courses/CoursesList'
import useCourses from '../../hooks/useCourses'
import { motion } from 'framer-motion'

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
