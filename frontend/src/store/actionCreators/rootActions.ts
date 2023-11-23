import * as AuthActions from '../auth/auth.actions'
import * as NewTestsActions from '../tests/tests.actions'

const RootActions = {
    ...AuthActions,
    ...NewTestsActions,
}

export default RootActions
