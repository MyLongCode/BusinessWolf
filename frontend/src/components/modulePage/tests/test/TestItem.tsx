import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Links from '../../../../config/links.config'
import type ITest from '../../../../models/ITest'
import './test.css'

interface ITestProps {
	test: ITest
	lessonNames: string[]
}

function TestItem({ test, lessonNames }: ITestProps) {
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
			to={Links.test(courseID, moduleID, test.test_id)}
			className='test-link'
		>
			{lessonsName !== '' && (
				<li className='tests__test test'>
					<h3 className='test__title'>{`${test.name} (${lessonsName})`}</h3>
					<p className='test__desc'>{test.text}</p>
					<p className='test__time'>{test.duration} мин</p>
				</li>
			)}
		</Link>
	)
}

export default React.memo(TestItem)
