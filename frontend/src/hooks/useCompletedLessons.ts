import { useQuery } from '@tanstack/react-query'
import LessonService from '../services/LessonService'

/**
 * @description
 * Это хук для получения всех завершенных конспектов
 */
export const useCompletedLessons = () => {
	const { data } = useQuery({
		queryKey: ['get completed lessons'],
		queryFn: () => LessonService.getCompletedLessons(),
		select: ({ data }) => data,
		staleTime: 500
	})

	return data || []
}
