import {makeAutoObservable} from "mobx";
import IUser from "../models/IUser";
import AuthService from "../services/AuthService";
import {AxiosError} from "axios";
import {AuthResponse} from "../models/responce/AuthResponse";
import api from "../api/axios";
import jwt from "jwt-decode"
import IToken from "../models/IToken";

export default class Store {
    user = {} as IUser;
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    getUserFromToken(token: string) {
        const parsed = jwt(token) as IToken
        return parsed.user_data
    }

    async login(username: string, password: string) {
        try {
            const response = await AuthService.login(username, password);
            const access = response.data.access
            const refresh = response.data.refresh
            localStorage.setItem('token', access);
            localStorage.setItem('refresh', refresh);
            this.setAuth(true);
            this.setUser(this.getUserFromToken(access));
        } catch (e) {
           throw e
        }
    }

    async checkAuth() {
        try {
            await api.post<AuthResponse>('/auth/token/verify/', {
                token: localStorage.getItem('token')
            })
            const access = localStorage.getItem('token') || ''
            this.setAuth(true);
            this.setUser(this.getUserFromToken(access));
        } catch (e) {
            return e as AxiosError
        }
    }
}