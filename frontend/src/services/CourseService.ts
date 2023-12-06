import type { AxiosResponse } from 'axios'
import api from '../api/api'
import QueriesConfig from '../config/queries.config'
import type ICourse from '../models/ICourse'

export default class CourseService {
	static async fetchCourses(): Promise<AxiosResponse<ICourse[]>> {
		return api.get<ICourse[]>(QueriesConfig.FETCH_COURSES_URL)
	}
}
