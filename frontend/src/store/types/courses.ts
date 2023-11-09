import ICourse from "../../models/ICourse";

interface FetchCoursesAction {
    type: CoursesActionTypes.FETCH_COURSES,
}

interface FetchCoursesSuccessAction {
    type: CoursesActionTypes.FETCH_COURSES_SUCCESS,
    payload: ICourse[]
}

interface FetchCoursesErrorAction {
    type: CoursesActionTypes.FETCH_COURSES_ERROR,
    payload: string
}

export interface CoursesState {
    courses: ICourse[]
    loading: boolean,
    error: null | string
}

export enum CoursesActionTypes {
    FETCH_COURSES = 'FETCH_COURSES',
    FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS',
    FETCH_COURSES_ERROR = 'FETCH_COURSES_ERROR'
}

export type CoursesAction = FetchCoursesAction | FetchCoursesSuccessAction | FetchCoursesErrorAction