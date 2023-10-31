import {AuthAction, AuthActionTypes, AuthState} from "../types/auth";


const initialState: AuthState = {
    user: null,
    isAuth: false,
    loading: false,
    error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return {loading: true, error: null, isAuth: false, user: null};
        case AuthActionTypes.LOGIN_SUCCESS:
            return {loading: false, error: null, isAuth: true, user: action.payload};
        case AuthActionTypes.LOGIN_ERROR:
            return {loading: false, error: action.payload, isAuth: false, user: null};

        case AuthActionTypes.CHECK_AUTH:
            return {loading: true, error: null, isAuth: false};
        case AuthActionTypes.CHECK_AUTH_SUCCESS:
            return {loading: false, error: null, isAuth: true, user: action.payload};
        case AuthActionTypes.CHECK_AUTH_ERROR:
            return {loading: false, error: action.payload, isAuth: false};

        case AuthActionTypes.LOGOUT:
            return {loading: false, error: null, isAuth: false, user: null};
        default:
            return state;
    }
}