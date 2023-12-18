import type { AxiosResponse } from 'axios'
import api from '../api/api'
import Queries from '../config/queries'
import type ITest from '../models/ITest'
import type { ICompletedQuestionResponse } from '../models/responce/ICompletedQuestionResponse'
import type { ICompletedTestResponse } from '../models/responce/ICompletedTestResponse'
import type IFullCompletedTestResponse from '../models/responce/IFullCompletedTestResponse'

export default class TestService {
	static async fetchTests(): Promise<AxiosResponse<ITest[]>> {
		return await api.get<ITest[]>(Queries.FETCH_TEST_URL)
	}

	static async postTest(
		testID: number,
		questions: {
			id: number
			answers: number[]
		}[]
	) {
		await api
			.post<ICompletedTestResponse>(Queries.POST_TEST_URL, {
				test: testID
			})
			.then(async testResponse => {
				for await (const question of questions) {
					await api
						.post<ICompletedQuestionResponse>(Queries.POST_QUESTION_URL, {
							completed_test: testResponse.data.id,
							question: question.id
						})
						.then(async questionResponse => {
							for (const answer of question.answers) {
								await api.post(Queries.POST_ANSWERS_URL, {
									completed_question: questionResponse.data.id,
									answer
								})
							}
							await api.put(`${Queries.CHECK_QUESTION_URL}${questionResponse.data.id}/`)
						})
				}
			})
	}

	static async getCompletedTestResult(id: number | string) {
		return api.get<IFullCompletedTestResponse>(`${Queries.FETCH_COMPLETED_TEST_URL}${id}/`)
	}

	static async getCompletedTests() {
		return api.get<ICompletedTestResponse[]>(`${Queries.FETCH_ALL_COMPLETED_TESTS_URL}`)
	}
}
