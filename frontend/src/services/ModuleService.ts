import type { AxiosResponse } from 'axios'
import api from '../api/api'
import Queries from '../config/queries'
import type IModule from '../models/IModule'
import IModuleProgressResponse from '../models/responce/IModuleProgressResponse'

export default class ModuleService {
	static async fetchModules(): Promise<AxiosResponse<IModule[]>> {
		return api.get<IModule[]>(Queries.FETCH_MODULES_URL)
	}

	static async fetchProgress(id: string | number): Promise<AxiosResponse<IModuleProgressResponse>> {
		return api.get<IModuleProgressResponse>(`${Queries.FETCH_MODULE_PROGRESS_URL}${id}/`)
	}
}
