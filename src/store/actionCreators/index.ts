import * as AuthActionCreators from '../actionCreators/auth'
import * as CoursesActionCreators from '../actionCreators/courses'
import * as ModulesActionCreators from '../actionCreators/modules'

export default {
    ...AuthActionCreators,
    ...CoursesActionCreators,
    ...ModulesActionCreators
}
