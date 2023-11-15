import {Dispatch} from "redux";
import {AxiosError} from "axios";
import {TestsAction, TestsActionTypes, TestState} from "../types/tests";
import TestService from "../../services/TestService";
import {RootState} from "../reducers";

export const addQuestion = (question: {id: number, answers: number[]}) => {
    return (dispatch: Dispatch<TestsAction>) => {
        dispatch({type: TestsActionTypes.ADD_QUESTION, payload: question})
    }
}

export const pushTest = (testID: number) => {
    return async (dispatch: Dispatch<TestsAction>, getState: () => RootState) => {
        try {
            const {questions} = getState().tests
            dispatch({type: TestsActionTypes.PUSH_TEST})
            await TestService.postTest(testID, questions)
            dispatch({type: TestsActionTypes.PUSH_TEST_SUCCESS})
        } catch (e) {
            const error = e as AxiosError
            console.error(error)
            dispatch({type: TestsActionTypes.PUSH_TEST_ERROR, payload: error.code || ''})
        }
    }
}