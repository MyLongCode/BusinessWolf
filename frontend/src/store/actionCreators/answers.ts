import {Dispatch} from "redux";
import {AxiosError} from "axios";
import {AnswersAction, AnswersActionTypes} from "../types/answers";
// import {useTypedSelector} from "../../hooks/useTypedSelector";

export const addAnswers = (answers: number[]) => {
    return (dispatch: Dispatch<AnswersAction>) => {
        dispatch({type: AnswersActionTypes.ADD_ANSWERS, payload: answers})
    }
}

export const pushAnswers = () => {
    return async (dispatch: Dispatch<AnswersAction>) => {
        try {
            // const {answers} = useTypedSelector(state => state.answers)
            dispatch({type: AnswersActionTypes.PUSH_ANSWERS})
            // const response = await AnswersService.pushAnswers(answers)
            dispatch({type: AnswersActionTypes.PUSH_ANSWERS_SUCCESS})
        } catch (e) {
            const error = e as AxiosError
            dispatch({type: AnswersActionTypes.PUSH_ANSWERS_ERROR, payload: error.code || ''})
        }
    }
}