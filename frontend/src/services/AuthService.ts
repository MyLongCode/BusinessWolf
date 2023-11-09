import api from "../api/api";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/responce/AuthResponse";

const LoginURL = '/auth/token/'

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>(LoginURL, {username, password});
    }
}