import type { AxiosResponse } from 'axios'
import api from '../api/api'
import type ITest from '../models/ITest'
import type { ICompletedQuestionResponse } from '../models/responce/ICompletedQuestionResponse'
import type { ICompletedTestResponse } from '../models/responce/ICompletedTestResponse'
import type IFullCompletedTestResponse from '../models/responce/IFullCompletedTestResponse'

const FETCH_URL = '/api/test/'
const FETCH_COMPLETED_URL = '/api/completedtest/'

const POST_TEST_URL = '/api/completedtests/'
const POST_QUESTION_URL = '/api/completedquestions/'
const POST_ANSWERS_URL = '/api/selectedanswers/'
const CHECK_QUESTION_URL = '/api/completedquestscheck/'

export default class TestService {
	static async fetchTests(): Promise<AxiosResponse<ITest[]>> {
		return await api.get<ITest[]>(FETCH_URL)
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
			.post<ICompletedTestResponse>(POST_TEST_URL, { test: testID })
			.then(async testResponse => {
				for await (const question of questions) {
					await api
						.post<ICompletedQuestionResponse>(POST_QUESTION_URL, {
							completed_test: testResponse.data.id,
							question: question.id
						})
						.then(async questionResponse => {
							for (const answer of question.answers) {
								await api.post(POST_ANSWERS_URL, {
									completed_question: questionResponse.data.id,
									answer
								})
							}
							await api.put(`${CHECK_QUESTION_URL}${questionResponse.data.id}/`)
						})
				}
				result = this.getLastCompletedTest(testResponse.data.id)
			})

		return result
	}

	static async getLastCompletedTest(id: number) {
		return api.get<IFullCompletedTestResponse>(`${FETCH_COMPLETED_URL}${id}/`)
	}
}
