import api from "../api/api";
import {AxiosResponse} from "axios";
import ILesson from "../models/ILesson";

const FETCH_URL = '/api/lessons/'

export default class LessonService {
    static async fetchLessons(): Promise<AxiosResponse<ILesson[]>> {
        return await api.get<ILesson[]>(FETCH_URL)
    }
}