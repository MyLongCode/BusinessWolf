import type { AxiosResponse } from 'axios'
import api from '../api/api'
import QueriesConfig from '../config/queries.config'
import type IAnswer from '../models/IAnswer'

export default class AnswerService {
	static async fetchAnswers(): Promise<AxiosResponse<IAnswer[]>> {
		return await api.get<IAnswer[]>(QueriesConfig.FETCH_ANSWERS_URL)
	}
}
