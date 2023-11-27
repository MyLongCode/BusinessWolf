import { useQuery } from '@tanstack/react-query'
import type IModule from 'models/IModule'
import ModuleService from 'services/ModuleService'

const useModules = () => {
	const { data } = useQuery({
		queryKey: ['get modules'],
		queryFn: () => ModuleService.fetchModules(),
		select: ({ data }) => data
	})

	return data || ([] as IModule[])
}

export default useModules
