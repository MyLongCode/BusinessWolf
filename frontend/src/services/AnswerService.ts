import api from "../api/api";
import {AxiosResponse} from "axios";
import IAnswer from "../models/IAnswer";

const FETCH_URL = '/api/answers/'

export default class AnswerService {
    static async fetchAnswers(): Promise<AxiosResponse<IAnswer[]>> {
        return await api.get<IAnswer[]>(FETCH_URL)
    }
}