import { createSlice } from '@reduxjs/toolkit'
import type IFullCompletedTestResponse from 'models/responce/IFullCompletedTestResponse'
import { addQuestion, pushTest, selectAnswer } from './tests.actions'

export interface IQuestionIDs {
	id: number
	answers: number[]
}

const initialState = {
	questions: [] as IQuestionIDs[],
	selectedAnswers: [] as number[],
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
				state.selectedAnswers = []
			})
			.addCase(pushTest.fulfilled, (state, action) => {
				state.questions = []
				state.completedTest = action.payload
			})
			.addCase(pushTest.rejected, (_, action) => {
				console.error(action.error)
			})
			.addCase(selectAnswer.fulfilled, (state, { payload: id }) => {
				if (!state.selectedAnswers.includes(id)) {
					state.selectedAnswers.push(id)
				} else {
					state.selectedAnswers = state.selectedAnswers.filter(
						item => item !== id
					)
				}
			})
	}
})
