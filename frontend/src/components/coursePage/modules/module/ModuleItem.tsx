import React from 'react'
import './module.css'
import { Link } from 'react-router-dom'
import { ModuleProps } from './moduleItem.interface'
import Links from '../../../../config/links.config'

function ModuleItem({ module, completeLessons, totalLessons }: ModuleProps) {
	return (
		<li className={'modules__item module'}>
			<Link
				to={`${Links.module(module.course, module.module_id)}/lessons`}
				className='module__link'
			>
				<div className='module__wrapper'>
					<h2 className='module__title'>{module.name}</h2>
					<p className='module__lessons-count'>{`${completeLessons}/${totalLessons} уроков`}</p>
				</div>
			</Link>
		</li>
	)
}

export default React.memo(ModuleItem)
