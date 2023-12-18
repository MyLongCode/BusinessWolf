import Links from 'config/links.config'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ModuleService from '../../../../services/ModuleService'
import './module.css'
import { ModuleProps } from './moduleItem.interface'

function ModuleItem({ module }: ModuleProps) {
	const [lessons, setLessons] = useState(0)
	const [completedLessons, setCompletedLessons] = useState(0)
	const [tests, setTests] = useState(0)
	const [completedTests, setCompletedTests] = useState(0)

	useEffect(() => {
		ModuleService.fetchProgress(module.module_id).then(({ data }) => {
			setLessons(data.lessons)
			setCompletedLessons(data.completed_lessons)
			setTests(data.tests)
			setCompletedTests(data.completed_tests)
		})
	}, [])

	return (
		<li className={'modules__item module'}>
			<Link
				to={`${Links.module(module.course, module.module_id)}/lessons`}
				className='module__link'
			>
				<div className='module__wrapper'>
					<h2 className='module__title'>{module.name}</h2>
					<div className='module__info'>
						{lessons > 0 && (
							<p className='module__lessons-count'>{`${completedLessons}/${lessons} уроков`}</p>
						)}
						{tests > 0 && (
							<p className='module__lessons-count'>{`${completedTests}/${tests} тестов`}</p>
						)}
					</div>
				</div>
			</Link>
		</li>
	)
}

export default React.memo(ModuleItem)
