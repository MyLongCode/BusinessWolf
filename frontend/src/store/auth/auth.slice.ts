import { createSlice } from '@reduxjs/toolkit'
import type IUser from 'models/IUser'
import { ErrorConfig } from '../../config/error.config'
import { checkAuth, clearError, login, logout, patchUser } from './auth.actions'

const initialState = {
	user: {} as IUser | null,
	isLoading: false,
	error: ErrorConfig.none
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
				state.error = ErrorConfig.login
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
				state.error = ErrorConfig.auth
			})
			.addCase(patchUser.fulfilled, (state, { payload }) => {
				state.user = payload
			})
			.addCase(patchUser.rejected, state => {
				state.error = ErrorConfig.patch
			})
			.addCase(clearError.fulfilled, (state, action) => {
				state.error = action.payload
			})
	}
})
