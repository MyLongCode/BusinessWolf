import type ITest from 'models/ITest'
import { clsx } from 'clsx'
import Links from 'config/links.config'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './test.css'

interface ITestProps {
	test: ITest
	lessonNames: string[]
	isCompleted: boolean
}

function TestItem({ test, lessonNames, isCompleted }: ITestProps) {
	const [lessonsName, setLessonsName] = useState('')
	const { courseID, id: moduleID } = useParams<{
		courseID: string
		id: string
	}>()

	useEffect(() => {
		for (const name of lessonNames) {
			if (name !== '') {
				setLessonsName(name)
				break
			}
		}
	}, [lessonNames])

	return (
		<Link
			to={
				isCompleted
					? Links.testResult(courseID, moduleID, test.test_id)
					: Links.test(courseID, moduleID, test.test_id)
			}
			className='test-link'
		>
			{lessonsName !== '' && (
				<li
					className={clsx('tests__test', 'test', {
						test_completed: isCompleted
					})}
				>
					<div className='test__wrapper'>
						<h3 className='test__title'>{`${test.name} (${lessonsName})`}</h3>
						{isCompleted && <p className='test__completed-text'>Пройдено</p>}
					</div>
					<p className='test__desc'>{test.text}</p>
					<p className='test__time'>{test.duration} мин</p>
				</li>
			)}
		</Link>
	)
}

export default React.memo(TestItem)
