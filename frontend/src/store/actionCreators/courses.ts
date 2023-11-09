import {Dispatch} from "redux";
import {AxiosError} from "axios";
import {CoursesAction, CoursesActionTypes} from "../types/courses";
import CourseService from "../../services/CourseService";

export const fetchCourses = () => {
    return async (dispatch: Dispatch<CoursesAction>) => {
        try {
            dispatch({type: CoursesActionTypes.FETCH_COURSES})
            const response = await CourseService.fetchCourses()
            dispatch({type: CoursesActionTypes.FETCH_COURSES_SUCCESS, payload: response.data})
        } catch (e) {
            const error = e as AxiosError
            dispatch({type: CoursesActionTypes.FETCH_COURSES_ERROR, payload: error.code || ''})
        }
    }
}