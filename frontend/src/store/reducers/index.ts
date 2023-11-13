import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {coursesReducer} from "./coursesReducer";
import {modulesReducer} from "./modulesReducer";
import {answersReducer} from "./answersReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    courses: coursesReducer,
    modules: modulesReducer,
    answers: answersReducer
})

export type RootState = ReturnType<typeof rootReducer>