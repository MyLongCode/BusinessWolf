import api from '../api/api'
import { AxiosResponse } from 'axios'
import { IAuthResponse } from '../models/responce/IAuthResponse'

const LoginURL = '/auth/token/'
const CheckAuthURL = '/auth/token/verify/'

export default class AuthService {
	static async login(
		username: string,
		password: string
	): Promise<AxiosResponse<IAuthResponse>> {
		return await api.post<IAuthResponse>(LoginURL, { username, password })
	}

	static async checkAuth(token: string) {
		return await api.post(CheckAuthURL, { token })
	}
}
