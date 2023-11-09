import api from "../api/api";
import {AxiosResponse} from "axios";
import ITest from "../models/ITest";

const FETCH_URL = '/api/test/'

export default class TestService {
    static async fetchTests(): Promise<AxiosResponse<ITest[]>> {
        return await api.get<ITest[]>(FETCH_URL)
    }
}