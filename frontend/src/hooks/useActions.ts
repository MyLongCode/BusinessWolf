import RootActions from 'store/rootActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

/**
 * @description
 * Это хук для получения **actions** из redux store
 * @returns
 * Объект со всеми actions
 */
export const useActions = () => {
	const dispatch: any = useDispatch()
	return bindActionCreators(RootActions, dispatch)
}
