import { useQuery } from '@tanstack/react-query'
import type ITest from 'models/ITest'
import TestService from 'services/TestService'

export const useTests = (): ITest[] => {
	const { data } = useQuery({
		queryKey: ['get answers'],
		queryFn: () => TestService.fetchTests(),
		select: ({ data }) => data
	})

	return data || ([] as ITest[])
}
