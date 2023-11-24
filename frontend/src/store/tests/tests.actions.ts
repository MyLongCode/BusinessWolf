import { createAsyncThunk } from '@reduxjs/toolkit'
import TestService from '../../services/TestService'
import { RootState } from '../reducers'
import { IQuestionIDs } from './tests.slice'
import IFullCompletedTestResponse from '../../models/responce/IFullCompletedTestResponse'

export const pushTest = createAsyncThunk<IFullCompletedTestResponse, number>(
	'tests/push-tests',
	async (data, thunkAPI) => {
		try {
			const state = thunkAPI.getState() as RootState
			const response = await TestService.postTest(data, state.tests.questions)
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

export const selectAnswer = createAsyncThunk<number, number>(
	'tests/select-answer',
	async data => {
		return data
	}
)
