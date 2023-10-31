import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {coursesReducer} from "./coursesReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    courses: coursesReducer
})

export type RootState = ReturnType<typeof rootReducer>