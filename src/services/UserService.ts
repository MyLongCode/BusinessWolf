import api from "../api/axios";
import {AxiosResponse} from "axios";
import IUser from "../models/IUser";

const FetchURL = '/api/users/'

export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return api.get<IUser[]>(FetchURL)
    }
}