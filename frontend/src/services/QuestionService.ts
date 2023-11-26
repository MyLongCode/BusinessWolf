import api from '../api/api'
import type IQuestion from '../models/IQuestion'

const FETCH_URL = '/api/questions/'

export default class QuestionService {
	static async fetchQuestions() {
		return await api.get<IQuestion[]>(FETCH_URL)
	}
}
