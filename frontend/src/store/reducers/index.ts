import {combineReducers} from "redux";
import {testsSlice} from "../tests/tests.slice";
import {authSlice} from "../auth/auth.slice";


export const rootReducer = combineReducers({
    auth: authSlice.reducer,
    tests: testsSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>