import { createSlice } from '@reduxjs/toolkit'
import type IUser from 'models/IUser'
import { checkAuth, login, logout, patchUser } from './auth.actions'

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
			.addCase(login.fulfilled, (state, { payload }) => {
				state.user = payload.user_data
				localStorage.setItem('access_token', payload.access)
				localStorage.setItem('refresh_token', payload.refresh)
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
			.addCase(checkAuth.pending, state => {
				state.isLoading = true
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload
			})
			.addCase(checkAuth.rejected, state => {
				state.user = null
				state.isLoading = false
				state.error = '401'
			})
			.addCase(patchUser.fulfilled, (state, { payload }) => {
				state.user = payload
			})
			.addCase(patchUser.rejected, state => {
				state.error = '400'
			})
	}
})
