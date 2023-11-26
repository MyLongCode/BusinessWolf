import type IUser from '../models/IUser'
import api from '../api/api'
import type { AxiosResponse } from 'axios'

export default class UserService {
	static async fetchUser(id: number | string): Promise<AxiosResponse<IUser>> {
		return await api.get<IUser>(`/api/users/${id}/`)
	}
}
