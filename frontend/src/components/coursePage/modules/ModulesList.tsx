import React from 'react'
import type IModule from '../../../models/IModule'
import ModuleItem from './module/ModuleItem'

function ModulesList({ modules }: { modules: IModule[] }) {
	return (
		<ul className='modules__list'>
			{modules.map(module => {
				return <ModuleItem key={module.module_id} module={module} />
			})}
		</ul>
	)
}

export default ModulesList
