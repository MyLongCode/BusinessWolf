import AuthService from "../../services/AuthService";
import {AuthAction, AuthActionTypes} from "../types/auth";
import {Dispatch} from "redux";
import UserService from "../../services/UserService";
import {AxiosError} from "axios";
import api from "../../api/api";
import TokenService from "../../services/TokenService";
import IToken from "../../models/IToken";

const VerifyURL = '/auth/token/verify/'
const RefreshURL = '/auth/token/refresh/'

export const login = (username: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.LOGIN})
            const response = await AuthService.login(username, password)
            const accessToken = response.data.access
            localStorage.setItem('access_token', accessToken)
            localStorage.setItem('refresh_token', response.data.refresh)
            const userID = TokenService.decodeToken(accessToken).user_id
            await UserService.fetchUser(userID).then(response => {
                dispatch({type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data})
            })
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
            const userID = TokenService.decodeToken(token).user_id
            await api.post(VerifyURL, {
                token
            })
            UserService.fetchUser(userID).then(response => {
                dispatch({type: AuthActionTypes.CHECK_AUTH_SUCCESS, payload: response.data})
            })
        } catch (e) {
            try {
                let token: IToken = {} as IToken
                await api.post(RefreshURL, {
                    refresh: localStorage.getItem('refresh_token')
                }).then(response => {
                    token = TokenService.decodeToken(response.data.access)
                })
                const userID = token.user_id
                await UserService.fetchUser(userID).then(response => {
                    dispatch({
                        type: AuthActionTypes.CHECK_AUTH_SUCCESS,
                        payload: response.data
                    })
                })
            } catch (e) {
                const error = e as AxiosError
                dispatch({type: AuthActionTypes.CHECK_AUTH_ERROR, payload: error?.code || 'authError'})
            }
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.LOGOUT})
        localStorage.removeItem('refresh_token')
    }
}