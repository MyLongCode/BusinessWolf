import { createSlice } from '@reduxjs/toolkit'
import type IFullCompletedTestResponse from 'models/responce/IFullCompletedTestResponse'
import { addQuestion, pushTest, selectAnswer, setSelectedAnswers } from './tests.actions'

export interface IQuestionIDs {
	id: number
	answers: number[]
}

const initialState = {
	questions: [] as IQuestionIDs[],
	selectedAnswers: [] as number[],
	completedTest: {} as IFullCompletedTestResponse,
	areTestsLoading: false
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
			.addCase(pushTest.pending, state => {
				state.areTestsLoading = true
			})
			.addCase(pushTest.fulfilled, (state, action) => {
				state.questions = []
				state.completedTest = action.payload
				state.areTestsLoading = false
			})
			.addCase(pushTest.rejected, (state, action) => {
				console.error(action.error)
				state.areTestsLoading = false
			})
			.addCase(selectAnswer.fulfilled, (state, { payload: id }) => {
				if (!state.selectedAnswers.includes(id)) {
					state.selectedAnswers.push(id)
				} else {
					state.selectedAnswers = state.selectedAnswers.filter(item => item !== id)
				}
			})
			.addCase(setSelectedAnswers.fulfilled, (state, { payload }) => {
				state.selectedAnswers = payload
			})
	}
})
