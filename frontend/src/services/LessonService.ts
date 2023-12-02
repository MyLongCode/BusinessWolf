import type { AxiosResponse } from 'axios'
import api from '../api/api'
import type ILesson from '../models/ILesson'

const FETCH_URL = '/api/lessons/'
const COMPLETE_URL = '/api/completedlessons/'

export default class LessonService {
	static async fetchLessons(id: string): Promise<AxiosResponse<ILesson>>
	static async fetchLessons(): Promise<AxiosResponse<ILesson[]>>

	static async fetchLessons(
		id?: any
	): Promise<AxiosResponse<ILesson | ILesson[]>> {
		return id
			? await api.get<ILesson[]>(`${FETCH_URL}${id}/`)
			: await api.get<ILesson[]>(FETCH_URL)
	}

	static async pushCompletedLesson(id: string | number) {
		return await api.post(COMPLETE_URL, {
			lesson_id: id
		})
	}
}
