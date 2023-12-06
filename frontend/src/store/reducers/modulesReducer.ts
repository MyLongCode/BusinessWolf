import {ModulesAction, ModulesActionTypes, ModulesState} from "../types/modules";

const initialState: ModulesState = {
    modules: [],
    loading: false,
    error: null
}

export const modulesReducer = (state = initialState, action: ModulesAction): ModulesState => {
    switch (action.type) {
        case ModulesActionTypes.FETCH_MODULES:
            return {loading: true, error: null, modules: []}
        case ModulesActionTypes.FETCH_MODULES_SUCCESS:
            return {loading: false, error: null, modules: action.payload}
        case ModulesActionTypes.FETCH_MODULES_ERROR:
            return {loading: false, error: 'Ошибка при загрузке курсов', modules: []}
        default:
            return state;
    }
}