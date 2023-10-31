import * as AuthActionCreators from '../actionCreators/auth'
import * as CoursesActionCreators from '../actionCreators/courses'

export default {
    ...AuthActionCreators,
    ...CoursesActionCreators
}
