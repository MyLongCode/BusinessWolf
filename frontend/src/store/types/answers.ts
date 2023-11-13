interface AddAnswersAction {
    type: AnswersActionTypes.ADD_ANSWERS,
    payload: number[]
}

interface PushAnswersAction {
    type: AnswersActionTypes.PUSH_ANSWERS,
}

interface PushAnswersSuccessAction {
    type: AnswersActionTypes.PUSH_ANSWERS_SUCCESS,
}

interface PushAnswersErrorAction {
    type: AnswersActionTypes.PUSH_ANSWERS_ERROR,
    payload: string
}

export interface AnswersState {
    answers: number[]
    loading: boolean,
    error: null | string
}

export enum AnswersActionTypes {
    ADD_ANSWERS = 'ADD_ANSWERS',
    PUSH_ANSWERS = 'PUSH_ANSWERS',
    PUSH_ANSWERS_SUCCESS = 'PUSH_ANSWERS_SUCCESS',
    PUSH_ANSWERS_ERROR = 'PUSH_ANSWERS_ERROR'
}

export type AnswersAction = AddAnswersAction | PushAnswersAction | PushAnswersSuccessAction | PushAnswersErrorAction