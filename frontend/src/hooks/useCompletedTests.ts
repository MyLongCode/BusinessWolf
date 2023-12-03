import { useQuery } from '@tanstack/react-query'
import TestService from '../services/TestService'

export const useCompletedTests = () => {
	const { data } = useQuery({
		queryKey: ['get completed tests'],
		queryFn: () => TestService.getCompletedTests(),
		select: ({ data }) => data
	})

	return data || []
}
