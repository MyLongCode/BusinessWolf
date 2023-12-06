import api from '../api/api'
import QueriesConfig from '../config/queries.config'
import type IQuestion from '../models/IQuestion'

export default class QuestionService {
	static async fetchQuestions() {
		return await api.get<IQuestion[]>(QueriesConfig.FETCH_QUESTIONS_URL)
	}
}
