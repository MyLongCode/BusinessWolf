import { createAsyncThunk } from '@reduxjs/toolkit'
import type IFullCompletedTestResponse from 'models/responce/IFullCompletedTestResponse'
import TestService from 'services/TestService'
import { RootState } from '../rootReducer'
import type { IQuestionIDs } from './tests.slice'

export const pushTest = createAsyncThunk<IFullCompletedTestResponse, number>(
	'tests/push-tests',
	async (id, thunkAPI) => {
		try {
			const state = thunkAPI.getState() as RootState
			await TestService.postTest(id, state.tests.questions)
			const response = await TestService.getCompletedTestResult(id)
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const addQuestion = createAsyncThunk<IQuestionIDs, IQuestionIDs>(
	'tests/add-question',
	async data => {
		return data
	}
)

export const selectAnswer = createAsyncThunk<number, number>('tests/select-answer', async data => {
	return data
})

export const setSelectedAnswers = createAsyncThunk<number[], number[]>(
	'tests/set-selected-answers',
	async data => {
		return data
	}
)
