import type { AxiosResponse } from 'axios'
import api from '../api/api'
import Queries from '../config/queries'
import type IAnswer from '../models/IAnswer'
import IRightAnswersCountResponse from '../models/responce/IRightAnswersCountResponse'

export default class AnswerService {
	static async fetchAnswers(): Promise<AxiosResponse<IAnswer[]>> {
		return await api.get<IAnswer[]>(Queries.FETCH_ANSWERS_URL)
	}

	static async getRightAnswersCount(
		questionID: string | number
	): Promise<AxiosResponse<IRightAnswersCountResponse>> {
		return await api.get<IRightAnswersCountResponse>(
			`${Queries.FETCH_RIGHT_ANSWERS_COUNT}${questionID}/`
		)
	}
}
