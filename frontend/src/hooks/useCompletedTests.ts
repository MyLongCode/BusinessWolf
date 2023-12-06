import { useQuery } from '@tanstack/react-query'
import TestService from '../services/TestService'

/**
 * @description
 * Это хук для получения всех завершенных тестов
 */
export const useCompletedTests = () => {
	const { data } = useQuery({
		queryKey: ['get completed tests'],
		queryFn: () => TestService.getCompletedTests(),
		select: ({ data }) => data
	})

	return data || []
}
