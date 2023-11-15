import api from "../api/api";
import {AxiosResponse} from "axios";
import ITest from "../models/ITest";
import {ICompletedTestResponse} from "../models/responce/ICompletedTestResponse";
import {ICompletedQuestionResponse} from "../models/responce/ICompletedQuestionResponse";
import ICompletedTest from "../models/ICompletedTest";

const FETCH_URL = '/api/test/'
const FETCH_COMPLETED_URL = '/api/completedtests/'

const POST_TEST_URL = '/api/completedtests/'
const POST_QUESTION_URL = '/api/completedquestions/'
const POST_ANSWERS_URL = '/api/selectedanswers/'
const CHECK_QUESTION_URL = '/api/completedquestscheck/'

export default class TestService {
    static async fetchTests(): Promise<AxiosResponse<ITest[]>> {
        return await api.get<ITest[]>(FETCH_URL)
    }

    static async postTest(testID: number, questions: { id: number, answers: number[] }[]) {
        await api.post<ICompletedTestResponse>(POST_TEST_URL, {test: testID}).then(async testResponse => {
            for (const question of questions) {
                await api.post<ICompletedQuestionResponse>(POST_QUESTION_URL, {
                    completed_test: testResponse.data.id,
                    question: question.id
                }).then(async questionResponse => {
                    for (const answer of question.answers) {
                        await api.post(POST_ANSWERS_URL, {completed_question: questionResponse.data.id, answer})
                    }
                    await api.put(`${CHECK_QUESTION_URL}${questionResponse.data.id}/`)
                })
            }
        })
    }
}