import type { AxiosResponse } from 'axios'
import api from '../api/api'
import type IUser from '../models/IUser'
import IUserPatch from '../models/IUserPatch'

const USERS_URL = '/api/users'

export default class UserService {
	static async fetchUser(id: number | string): Promise<AxiosResponse<IUser>> {
		return await api.get<IUser>(`${USERS_URL}/${id}/`)
	}

	static async patchUser(data: IUserPatch) {
		return await api.patch<IUser>(`${USERS_URL}/${data.id}/`, data)
	}
}
