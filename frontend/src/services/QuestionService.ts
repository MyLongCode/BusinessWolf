import api from '../api/api'
import Queries from '../config/queries'
import type IQuestion from '../models/IQuestion'

export default class QuestionService {
	static async fetchQuestions() {
		return await api.get<IQuestion[]>(Queries.FETCH_QUESTIONS_URL)
	}
}
