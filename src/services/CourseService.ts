import {AxiosResponse} from "axios";
import ICourse from "../models/ICourse";
import api from "../api/api";

const FetchAPI = '/api/course/'

export default class CourseService {
    static async fetchCourses(): Promise<AxiosResponse<ICourse[]>> {
        return api.get<ICourse[]>(FetchAPI);
    }
}