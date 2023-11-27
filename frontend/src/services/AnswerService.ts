import type { AxiosResponse } from 'axios'
import api from '../api/api'
import type IAnswer from '../models/IAnswer'

const FETCH_URL = '/api/answers/'

export default class AnswerService {
	static async fetchAnswers(): Promise<AxiosResponse<IAnswer[]>> {
		return await api.get<IAnswer[]>(FETCH_URL)
	}
}
