import {createSlice} from "@reduxjs/toolkit";
import {checkAuth, login, logout} from "./auth.actions";
import IUser from "../../models/IUser";

const initialState = {
    user: {} as IUser | null,
    isLoading: false,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user_data
                localStorage.setItem('access_token', action.payload.access)
                localStorage.setItem('refresh_token', action.payload.refresh)
                state.isLoading = false
            })
            .addCase(login.rejected, state => {
                state.isLoading = false
                state.user = null
                state.error = 'Ошибка авторизации'
            })
            .addCase(logout.fulfilled, state => {
                state.isLoading = false
                state.user = null
            })
            .addCase(checkAuth.fulfilled, (state, {payload}) => {
                state.user = payload
            })
            .addCase(checkAuth.rejected, state => {
                state.user = null
                state.error = '401'
            })
    }
})