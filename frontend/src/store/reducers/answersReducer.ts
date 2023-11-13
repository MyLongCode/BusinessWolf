import {AnswersAction, AnswersActionTypes, AnswersState} from "../types/answers";

const initialState: AnswersState = {
    answers: [],
    loading: false,
    error: null
}

export const answersReducer = (state = initialState, action: AnswersAction): AnswersState => {
    switch (action.type) {
        case AnswersActionTypes.ADD_ANSWERS:
            return {loading: false, error: null, answers: [...state.answers, ...action.payload]}

        case AnswersActionTypes.PUSH_ANSWERS:
            return {loading: true, error: null, answers: state.answers}
        case AnswersActionTypes.PUSH_ANSWERS_SUCCESS:
            return {loading: false, error: null, answers: state.answers}
        case AnswersActionTypes.PUSH_ANSWERS_ERROR:
            return {loading: false, error: 'Ошибка при отправке ответов', answers: state.answers}
        default:
            return state;
    }
}