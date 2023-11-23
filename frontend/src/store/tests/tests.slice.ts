import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addQuestion, pushTest } from './tests.actions'
import IFullCompletedTestResponse from '../../models/responce/IFullCompletedTestResponse'

export interface IQuestionIDs {
	id: number
	answers: number[]
}

const initialState = {
	questions: [] as IQuestionIDs[],
	completedTest: {} as IFullCompletedTestResponse
}

export const testsSlice = createSlice({
	name: 'tests',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(addQuestion.fulfilled, (state, action) => {
				state.questions.push(action.payload)
			})
			.addCase(pushTest.fulfilled, (state, action) => {
				state.questions = []
				state.completedTest = action.payload
			})
			.addCase(pushTest.rejected, (_, action) => {
				console.error(action.error)
			})
	}
})
