import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './modulePage.css'
import { motion } from 'framer-motion'
import ModuleLayout from '../../components/layouts/moduleLayout/ModuleLayout'
import SliderButton from '../../components/sliderButton/SliderButton'
import TestsList from '../../components/modulePage/tests/TestsList'
import LessonsList from '../../components/modulePage/lessons/LessonsList'
import useLessons from '../../hooks/useLessons'
import { useTests } from '../../hooks/useTests'

type ModuleParams = {
	id: string
	courseID: string
}

enum States {
	lessons,
	tests
}

function ModulePage() {
	const { id, courseID } = useParams<ModuleParams>()
	const location = useLocation()
	const navigate = useNavigate()
	const initialState =
		location.pathname.split('/')[5] === 'tests' ? States.tests : States.lessons
	const [stateChanged, setStateChanged] = useState(false)
	const lessons = useLessons()
	const tests = useTests()

	useEffect(() => {
		if (!['tests', 'lessons'].includes(location.pathname.split('/')[5])) {
			navigate(`/course/${courseID}/module/${id}/lessons`, { replace: true })
		}
	}, [courseID, id, location.pathname, navigate])

	const sliderButtonClickHandler = (state: States) => {
		setStateChanged(initialState !== state)
		navigate(
			`/course/${courseID}/module/${id}/${
				state === States.tests ? 'tests' : 'lessons'
			}`,
			{
				replace: true
			}
		)
	}

	return (
		<ModuleLayout headerTitle={`Модуль ${id}`} pageTitle={`Модуль ${id}`}>
			<div className='module-page'>
				<SliderButton
					className={'module-page__slider-btn'}
					buttonNames={{ left: 'Коспекты', right: 'Тесты' }}
					initialState={initialState === States.lessons ? 'left' : 'right'}
					currentState={
						stateChanged && initialState === States.lessons
							? 'right'
							: stateChanged
							  ? 'left'
							  : ''
					}
					buttonClickHandler={state =>
						sliderButtonClickHandler(
							state === 'left' ? States.lessons : States.tests
						)
					}
				/>
				<motion.div
					className='module-page__content'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					{initialState === States.lessons && (
						<LessonsList moduleID={Number(id)} lessons={lessons} />
					)}
					{initialState === States.tests && (
						<TestsList moduleID={Number(id)} tests={tests} lessons={lessons} />
					)}
				</motion.div>
			</div>
		</ModuleLayout>
	)
}

export default ModulePage
