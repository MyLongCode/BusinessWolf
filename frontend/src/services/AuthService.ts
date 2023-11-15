import api from "../api/api";
import {AxiosResponse} from "axios";
import {IAuthResponse} from "../models/responce/IAuthResponse";

const LoginURL = '/auth/token/'

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return api.post<IAuthResponse>(LoginURL, {username, password});
    }
}