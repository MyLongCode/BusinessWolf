import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {coursesReducer} from "./coursesReducer";
import {modulesReducer} from "./modulesReducer";
import {testsReducer} from "./testsReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    courses: coursesReducer,
    modules: modulesReducer,
    tests: testsReducer
})

export type RootState = ReturnType<typeof rootReducer>