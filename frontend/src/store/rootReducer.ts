import { combineReducers } from 'redux'
import { authSlice } from './auth/auth.slice'
import { testsSlice } from './tests/tests.slice'

export const rootReducer = combineReducers({
	auth: authSlice.reducer,
	tests: testsSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
