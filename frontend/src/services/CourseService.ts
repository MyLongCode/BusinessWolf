import type { AxiosResponse } from 'axios'
import api from '../api/api'
import Queries from '../config/queries'
import type ICourse from '../models/ICourse'
import ICourseProgressResponse from '../models/responce/ICourseProgressResponse'

export default class CourseService {
	static async fetchCourses(): Promise<AxiosResponse<ICourse[]>> {
		return api.get<ICourse[]>(Queries.FETCH_COURSES_URL)
	}

	static async fetchCourseProgress(
		id: string | number
	): Promise<AxiosResponse<ICourseProgressResponse>> {
		return api.get<ICourseProgressResponse>(`${Queries.FETCH_COURSE_PROGRESS_URL}${id}/`)
	}
}
