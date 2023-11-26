import { useQuery } from '@tanstack/react-query'
import ModuleService from 'services/ModuleService'
import type IModule from 'models/IModule'

const useModules = () => {
	const { data } = useQuery({
		queryKey: ['get modules'],
		queryFn: () => ModuleService.fetchModules(),
		select: ({ data }) => data
	})

	return data || ([] as IModule[])
}

export default useModules
