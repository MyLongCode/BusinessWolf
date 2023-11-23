import { useQuery } from '@tanstack/react-query'
import TestService from '../services/TestService'
import ITest from '../models/ITest'

export const useTests = (): ITest[] => {
	const { data } = useQuery({
		queryKey: ['get answers'],
		queryFn: () => TestService.fetchTests(),
		select: ({ data }) => data
	})

	return data || ([] as ITest[])
}
