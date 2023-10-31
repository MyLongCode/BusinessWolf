import AuthService from "../../services/AuthService";
import {AuthAction, AuthActionTypes} from "../types/auth";
import {Dispatch} from "redux";
import UserService from "../../services/UserService";
import {AxiosError} from "axios";
import api from "../../api/api";

const VerifyURL = '/auth/token/verify/'

export const login = (username: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.LOGIN})
            const response = await AuthService.login(username, password)
            const accessToken = response.data.access
            localStorage.setItem('access_token', accessToken)
            localStorage.setItem('refresh_token', response.data.refresh)
            dispatch({type: AuthActionTypes.LOGIN_SUCCESS, payload: UserService.getUserFromToken(accessToken)})
        } catch (e) {
            const error = e as AxiosError
            dispatch({type: AuthActionTypes.LOGIN_ERROR, payload: error.code || ''})
        }
    }
}

export const checkAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.CHECK_AUTH})
            const token = localStorage.getItem('access_token') || ''
            await api.post(VerifyURL, {
                token
            })
            dispatch({type: AuthActionTypes.CHECK_AUTH_SUCCESS, payload: UserService.getUserFromToken(token)})
        } catch (e) {
            const error = e as AxiosError
            dispatch({type: AuthActionTypes.CHECK_AUTH_ERROR, payload: error.code || ''})
        }
    }
}