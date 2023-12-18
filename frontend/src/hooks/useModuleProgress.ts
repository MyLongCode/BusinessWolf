import { useQuery } from '@tanstack/react-query'
import IModuleProgressResponse from '../models/responce/IModuleProgressResponse'
import ModuleService from '../services/ModuleService'

/**
 * @description
 * Это хук для получения всех прогресса модуля
 * @param id
 * идентификатор модуля
 */
export const useModuleProgress = (id: string | number): IModuleProgressResponse => {
	const { data } = useQuery({
		queryKey: ['get module progress'],
		queryFn: () => ModuleService.fetchProgress(id),
		select: ({ data }) => data
	})

	return data || ({} as IModuleProgressResponse)
}
