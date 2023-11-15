import * as AuthActionCreators from '../actionCreators/auth'
import * as CoursesActionCreators from '../actionCreators/courses'
import * as ModulesActionCreators from '../actionCreators/modules'
import * as TestsActionCreators from '../actionCreators/tests'

export default {
    ...AuthActionCreators,
    ...CoursesActionCreators,
    ...ModulesActionCreators,
    ...TestsActionCreators
}
