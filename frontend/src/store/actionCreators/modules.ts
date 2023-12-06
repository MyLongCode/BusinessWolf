import {Dispatch} from "redux";
import {AxiosError} from "axios";
import {ModulesAction, ModulesActionTypes} from "../types/modules";
import ModuleService from "../../services/ModuleService";

export const fetchModules = () => {
    return async (dispatch: Dispatch<ModulesAction>) => {
        try {
            dispatch({type: ModulesActionTypes.FETCH_MODULES})
            const response = await ModuleService.fetchModules()
            dispatch({type: ModulesActionTypes.FETCH_MODULES_SUCCESS, payload: response.data})
        } catch (e) {
            const error = e as AxiosError
            dispatch({type: ModulesActionTypes.FETCH_MODULES_ERROR, payload: error.code || ''})
        }
    }
}