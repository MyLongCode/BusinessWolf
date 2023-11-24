import api from '../api/api'
import IQuestion from '../models/IQuestion'

const FETCH_URL = '/api/questions/'

export default class QuestionService {
	static async fetchQuestions() {
		return await api.get<IQuestion[]>(FETCH_URL)
	}
}
