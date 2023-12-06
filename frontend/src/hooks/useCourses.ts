import { useQuery } from '@tanstack/react-query'
import type ICourse from 'models/ICourse'
import CourseService from 'services/CourseService'

/**
 * @description
 * Это хук для получения всех курсов, доступных пользователю
 */
const useCourses = () => {
	const { data } = useQuery({
		queryKey: ['get courses'],
		queryFn: () => CourseService.fetchCourses(),
		select: ({ data }) => data
	})

	return data || ([] as ICourse[])
}

export default useCourses
