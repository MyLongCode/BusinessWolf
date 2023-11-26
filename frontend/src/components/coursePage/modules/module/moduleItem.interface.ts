import type IModule from '../../../../models/IModule'

export interface ModuleProps {
	module: IModule
	completeLessons: number
	totalLessons: number
}
