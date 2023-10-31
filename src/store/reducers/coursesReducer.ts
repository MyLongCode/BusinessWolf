import {CoursesAction, CoursesActionTypes, CoursesState} from "../types/courses";

const initialState: CoursesState = {
    courses: [],
    loading: false,
    error: null
}

export const coursesReducer = (state = initialState, action: CoursesAction): CoursesState => {
    switch (action.type) {
        case CoursesActionTypes.FETCH_COURSES:
            return {loading: true, error: null, courses: []}
        case CoursesActionTypes.FETCH_COURSES_SUCCESS:
            return {loading: false, error: null, courses: action.payload}
        case CoursesActionTypes.FETCH_COURSES_ERROR:
            return {loading: false, error: 'Ошибка при загрузке курсов', courses: []}
        default:
            return state;
    }
}