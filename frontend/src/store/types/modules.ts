import IModule from "../../models/IModule";

interface FetchModulesAction {
    type: ModulesActionTypes.FETCH_MODULES,
}

interface FetchModulesSuccessAction {
    type: ModulesActionTypes.FETCH_MODULES_SUCCESS,
    payload: IModule[]
}

interface FetchModulesErrorAction {
    type: ModulesActionTypes.FETCH_MODULES_ERROR,
    payload: string
}

export interface ModulesState {
    modules: IModule[]
    loading: boolean,
    error: null | string
}

export enum ModulesActionTypes {
    FETCH_MODULES = 'FETCH_MODULES',
    FETCH_MODULES_SUCCESS = 'FETCH_MODULES_SUCCESS',
    FETCH_MODULES_ERROR = 'FETCH_MODULES_ERROR'
}

export type ModulesAction = FetchModulesAction | FetchModulesSuccessAction | FetchModulesErrorAction