import { AxiosResponse } from 'axios'
import api from '../api/api'
import IModule from '../models/IModule'

const FetchAPI = '/api/modules/'

export default class ModuleService {
	static async fetchModules(): Promise<AxiosResponse<IModule[]>> {
		return api.get<IModule[]>(FetchAPI)
	}
}
