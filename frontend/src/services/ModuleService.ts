import type { AxiosResponse } from 'axios'
import api from '../api/api'
import Queries from '../config/queries'
import type IModule from '../models/IModule'

export default class ModuleService {
	static async fetchModules(): Promise<AxiosResponse<IModule[]>> {
		return api.get<IModule[]>(Queries.FETCH_MODULES_URL)
	}
}
