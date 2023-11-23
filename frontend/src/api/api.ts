import axios, { AxiosError } from 'axios'
import { IAuthResponse } from '../models/responce/IAuthResponse'

export const API_URL = 'http://127.0.0.1:8000'

const api = axios.create({
	baseURL: API_URL,
	withCredentials: true
})

api.interceptors.request.use(config => {
	const accessToken = localStorage.getItem('access_token')

	if (config && config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

api.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			error.response.status === 401 &&
			originalRequest &&
			!originalRequest._isRetry
		) {
			originalRequest._isRetry = true
			try {
				if (originalRequest.url !== `/auth/token/refresh/`) {
					const response = await api.post<IAuthResponse>(
						'/auth/token/refresh/',
						{
							refresh: localStorage.getItem('refresh_token')
						}
					)
					localStorage.setItem('access_token', response.data.access)
				}
				return api.request(originalRequest)
			} catch (e) {
				const error = e as AxiosError
				if (error.code === 'ERR_BAD_REQUEST') {
					localStorage.clear()
				}
			}
			throw error
		}
	}
)

export default api
