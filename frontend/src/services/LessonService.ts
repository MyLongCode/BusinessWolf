import type { AxiosResponse } from 'axios'
import api from '../api/api'
import Queries from '../config/queries'
import type ILesson from '../models/ILesson'
import ICompletedLessonResponse from '../models/responce/ICompletedLessonResponse'

export default class LessonService {
	static async fetchLessons(id: string): Promise<AxiosResponse<ILesson>>
	static async fetchLessons(): Promise<AxiosResponse<ILesson[]>>

	static async fetchLessons(id?: any): Promise<AxiosResponse<ILesson | ILesson[]>> {
		return id
			? await api.get<ILesson[]>(`${Queries.FETCH_LESSONS_URL}${id}/`)
			: await api.get<ILesson[]>(Queries.FETCH_LESSONS_URL)
	}

	static async getCompletedLessons(): Promise<AxiosResponse<ICompletedLessonResponse[]>> {
		return await api.get<ICompletedLessonResponse[]>(Queries.FETCH_COMPLETED_LESSONS_URL)
	}

	static async pushCompletedLesson(id: string | number) {
		return await api.post(Queries.PUSH_COMPLETED_LESSON_URL, {
			lesson: id
		})
	}
}
