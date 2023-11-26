import { useQuery } from '@tanstack/react-query'
import CourseService from 'services/CourseService'
import type ICourse from 'models/ICourse'

const useCourses = () => {
	const { data } = useQuery({
		queryKey: ['get courses'],
		queryFn: () => CourseService.fetchCourses(),
		select: ({ data }) => data
	})

	return data || ([] as ICourse[])
}

export default useCourses
