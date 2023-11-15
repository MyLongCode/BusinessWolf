interface AddQuestionAction {
    type: TestsActionTypes.ADD_QUESTION,
    payload: {id: number, answers: number[]}
}

interface PushTestsAction {
    type: TestsActionTypes.PUSH_TEST,
}

interface PushTestsSuccessAction {
    type: TestsActionTypes.PUSH_TEST_SUCCESS,
}

interface PushTestsErrorAction {
    type: TestsActionTypes.PUSH_TEST_ERROR,
    payload: string
}

export interface TestState {
    questions: {id: number, answers: number[]}[]
    loading: boolean,
    error: null | string
}

export enum TestsActionTypes {
    ADD_QUESTION = 'ADD_QUESTION',
    PUSH_TEST = 'PUSH_TEST',
    PUSH_TEST_SUCCESS = 'PUSH_TEST_SUCCESS',
    PUSH_TEST_ERROR = 'PUSH_TEST_ERROR'
}

export type TestsAction = AddQuestionAction | PushTestsAction | PushTestsSuccessAction | PushTestsErrorAction