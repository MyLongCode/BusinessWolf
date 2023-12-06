import type { AxiosResponse } from 'axios'
import api from '../api/api'
import QueriesConfig from '../config/queries.config'
import type IAuthResponse from '../models/responce/IAuthResponse'

export default class AuthService {
	static async login(
		username: string,
		password: string
	): Promise<AxiosResponse<IAuthResponse>> {
		return await api.post<IAuthResponse>(QueriesConfig.LOGIN_URL, {
			username,
			password
		})
	}

	static async checkAuth(token: string) {
		return await api.post(QueriesConfig.CHECK_AUTH_URL, { token })
	}
}
