import { createAsyncThunk } from '@reduxjs/toolkit'
import type IAuthResponse from 'models/responce/IAuthResponse'
import AuthService from 'services/AuthService'
import TokenService from 'services/TokenService'
import UserService from 'services/UserService'
import type { AxiosError } from 'axios'
import { ErrorType } from '../../config/errorType'
import IUser from '../../models/IUser'
import IUserPatch from '../../models/IUserPatch'

interface IAuthData {
	username: string
	password: string
}

export const login = createAsyncThunk<IAuthResponse, IAuthData>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.login(data.username, data.password)
			return response.data
		} catch (e) {
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	localStorage.clear()
})

export const checkAuth = createAsyncThunk('auth/check-auth', async (_, thunkAPI) => {
	try {
		const token = localStorage.getItem('access_token') || ''
		await AuthService.checkAuth(token)
		const userID = TokenService.decodeToken(token).user_id
		const response = await UserService.fetchUser(userID)
		return response.data
	} catch (e) {
		thunkAPI.dispatch(logout())
		return thunkAPI.rejectWithValue(e as AxiosError)
	}
})

export const patchUser = createAsyncThunk<IUser, IUserPatch>(
	'auth/patch-user',
	async (data, thunkAPI) => {
		try {
			const response = await UserService.patchUser(data)
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e as AxiosError)
		}
	}
)

export const clearError = createAsyncThunk('auth/clear-error', async () => {
	return ErrorType.none
})
