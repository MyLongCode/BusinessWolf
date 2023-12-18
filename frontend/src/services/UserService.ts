import type IUser from 'models/IUser'
import IUserPatch from 'models/IUserPatch'
import Queries from 'config/queries'
import api from 'api/api'
import type { AxiosResponse } from 'axios'

export default class UserService {
	static async fetchUser(id: number | string): Promise<AxiosResponse<IUser>> {
		return await api.get<IUser>(`${Queries.FETCH_USER_URL}${id}/`)
	}

	static async patchUser(data: IUserPatch) {
		return await api.patch<IUser>(`${Queries.FETCH_USER_URL}${data.id}/`, data)
	}
}
