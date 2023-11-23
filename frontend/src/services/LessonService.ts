import api from "../api/api";
import {AxiosResponse} from "axios";
import ILesson from "../models/ILesson";

const FETCH_URL = '/api/lessons/'

export default class LessonService {
    static async fetchLessons(id: string): Promise<AxiosResponse<ILesson>>;
    static async fetchLessons(): Promise<AxiosResponse<ILesson[]>>;

    static async fetchLessons(id?: any): Promise<AxiosResponse<ILesson | ILesson[]>> {
        return id ? await api.get<ILesson[]>(`${FETCH_URL}${id}/`) : await api.get<ILesson[]>(FETCH_URL)
    }
}