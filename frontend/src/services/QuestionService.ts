import api from "../api/api";
import IQuestion from "../models/IQuestion";

const FETCH_URL = '/api/questions/'
const FETCH_COMPLETED_URL = '/api/completedquestions/'

export default class QuestionService {
    static async fetchQuestions() {
        return await api.get<IQuestion[]>(FETCH_URL)
    }

    static async fetchCompletedQuestions() {

    }
}