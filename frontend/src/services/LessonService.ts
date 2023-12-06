import type { AxiosResponse } from 'axios'
import api from '../api/api'
import QueriesConfig from '../config/queries.config'
import type ILesson from '../models/ILesson'

export default class LessonService {
	static async fetchLessons(id: string): Promise<AxiosResponse<ILesson>>
	static async fetchLessons(): Promise<AxiosResponse<ILesson[]>>

	static async fetchLessons(
		id?: any
	): Promise<AxiosResponse<ILesson | ILesson[]>> {
		return id
			? await api.get<ILesson[]>(`${QueriesConfig.FETCH_LESSONS_URL}${id}/`)
			: await api.get<ILesson[]>(QueriesConfig.FETCH_LESSONS_URL)
	}

	static async pushCompletedLesson(id: string | number) {
		return await api.post(QueriesConfig.FETCH_COMPLETED_LESSONS_URL, {
			lesson_id: id
		})
	}
}
