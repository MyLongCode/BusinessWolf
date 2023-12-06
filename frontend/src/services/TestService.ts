import type { AxiosResponse } from 'axios'
import api from '../api/api'
import QueriesConfig from '../config/queries.config'
import type ITest from '../models/ITest'
import type { ICompletedQuestionResponse } from '../models/responce/ICompletedQuestionResponse'
import type { ICompletedTestResponse } from '../models/responce/ICompletedTestResponse'
import type IFullCompletedTestResponse from '../models/responce/IFullCompletedTestResponse'

export default class TestService {
	static async fetchTests(): Promise<AxiosResponse<ITest[]>> {
		return await api.get<ITest[]>(QueriesConfig.FETCH_TEST_URL)
	}

	static async postTest(
		testID: number,
		questions: {
			id: number
			answers: number[]
		}[]
	): Promise<AxiosResponse<IFullCompletedTestResponse>> {
		let result: Promise<AxiosResponse<IFullCompletedTestResponse>> =
			{} as Promise<AxiosResponse<IFullCompletedTestResponse>>

		await api
			.post<ICompletedTestResponse>(QueriesConfig.POST_TEST_URL, {
				test: testID
			})
			.then(async testResponse => {
				for await (const question of questions) {
					await api
						.post<ICompletedQuestionResponse>(QueriesConfig.POST_QUESTION_URL, {
							completed_test: testResponse.data.id,
							question: question.id
						})
						.then(async questionResponse => {
							for (const answer of question.answers) {
								await api.post(QueriesConfig.POST_ANSWERS_URL, {
									completed_question: questionResponse.data.id,
									answer
								})
							}
							await api.put(
								`${QueriesConfig.CHECK_QUESTION_URL}${questionResponse.data.id}/`
							)
						})
				}
				result = this.getLastCompletedTest(testResponse.data.id)
			})

		return result
	}

	static async getLastCompletedTest(id: number) {
		return api.get<IFullCompletedTestResponse>(
			`${QueriesConfig.FETCH_COMPLETED_TEST_URL}${id}/`
		)
	}

	static async getCompletedTests() {
		return api.get<ICompletedTestResponse[]>(
			`${QueriesConfig.FETCH_ALL_COMPLETED_TESTS_URL}`
		)
	}
}
