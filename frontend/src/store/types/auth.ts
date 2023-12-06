import IUser from "../../models/IUser";

interface LoginAction {
    type: AuthActionTypes.LOGIN,
}

interface LoginSuccessAction {
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: IUser
}

interface LoginErrorAction {
    type: AuthActionTypes.LOGIN_ERROR,
    payload: string
}

interface CheckAuthAction {
    type: AuthActionTypes.CHECK_AUTH,
}

interface CheckAuthSuccessAction {
    type: AuthActionTypes.CHECK_AUTH_SUCCESS,
    payload: IUser
}

interface CheckAuthErrorAction {
    type: AuthActionTypes.CHECK_AUTH_ERROR,
    payload: string
}

interface LogoutAction {
    type: AuthActionTypes.LOGOUT
}

export interface AuthState {
    user: null | IUser,
    isAuth: boolean,
    loading: boolean,
    error: null | string
}

export enum AuthActionTypes {
    LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_ERROR = 'LOGIN_ERROR',
    CHECK_AUTH = 'CHECK_AUTH',
    CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS',
    CHECK_AUTH_ERROR = 'CHECK_AUTH_ERROR',
    LOGOUT = 'LOGOUT'
}

export type AuthAction =
    LoginAction
    | LoginSuccessAction
    | LoginErrorAction
    | CheckAuthAction
    | CheckAuthSuccessAction
    | CheckAuthErrorAction
    | LogoutAction