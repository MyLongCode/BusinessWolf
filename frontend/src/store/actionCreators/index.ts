import * as AuthActionCreators from '../actionCreators/auth'
import * as CoursesActionCreators from '../actionCreators/courses'
import * as ModulesActionCreators from '../actionCreators/modules'
import * as AnswersActionCreators from '../actionCreators/answers'

export default {
    ...AuthActionCreators,
    ...CoursesActionCreators,
    ...ModulesActionCreators,
    ...AnswersActionCreators
}
