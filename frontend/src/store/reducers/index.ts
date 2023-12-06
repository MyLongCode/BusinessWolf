import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {coursesReducer} from "./coursesReducer";
import {modulesReducer} from "./modulesReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    courses: coursesReducer,
    modules: modulesReducer
})

export type RootState = ReturnType<typeof rootReducer>