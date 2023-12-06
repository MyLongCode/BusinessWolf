import IUser from "../models/IUser";
import api from "../api/api";
import {AxiosResponse} from "axios";

export default class UserService {
    static async fetchUser(id: number): Promise<AxiosResponse<IUser>> {
        return await api.get<IUser>(`/api/users/${id}/`)
    }
}