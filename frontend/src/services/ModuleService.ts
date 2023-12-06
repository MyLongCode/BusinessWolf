import type { AxiosResponse } from 'axios'
import api from '../api/api'
import QueriesConfig from '../config/queries.config'
import type IModule from '../models/IModule'

export default class ModuleService {
	static async fetchModules(): Promise<AxiosResponse<IModule[]>> {
		return api.get<IModule[]>(QueriesConfig.FETCH_MODULES_URL)
	}
}
