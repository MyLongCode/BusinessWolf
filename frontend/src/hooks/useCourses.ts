import { useQuery } from '@tanstack/react-query'
import type ICourse from 'models/ICourse'
import CourseService from 'services/CourseService'

/**
 * @description
 * Это хук для получения всех курсов, доступных пользователю
 */
export default function useCourses(): ICourse[]
/**
 * @description
 * Это хук для получения курса по id
 * @param id
 * Идентификатор курса из бд
 */
export default function useCourses(id: string | number): ICourse

export default function useCourses(id?: string | number): ICourse[] | ICourse {
	const { data } = useQuery({
		queryKey: ['get courses'],
		queryFn: () => CourseService.fetchCourses(),
		select: ({ data }) => data
	})

	if (id) {
		return data?.find(course => course.course_id == id) || ({} as ICourse)
	}

	return data || ([] as ICourse[])
}
