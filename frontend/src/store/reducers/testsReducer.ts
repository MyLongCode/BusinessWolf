import { TestsAction, TestsActionTypes, TestState } from '../types/tests'

const initialState: TestState = {
	questions: [],
	loading: false,
	error: null
}

export const testsReducer = (
	state = initialState,
	action: TestsAction
): TestState => {
	switch (action.type) {
		case TestsActionTypes.ADD_QUESTION:
			return {
				loading: false,
				error: null,
				questions: [...state.questions, action.payload]
			}

		case TestsActionTypes.PUSH_TEST:
			return { loading: true, error: null, questions: state.questions }
		case TestsActionTypes.PUSH_TEST_SUCCESS:
			return { loading: false, error: null, questions: [] }
		case TestsActionTypes.PUSH_TEST_ERROR:
			return {
				loading: false,
				error: 'Ошибка при отправке ответов',
				questions: state.questions
			}
		default:
			return state
	}
}
