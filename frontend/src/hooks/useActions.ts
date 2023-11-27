import RootActions from 'store/rootActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useActions = () => {
	const dispatch: any = useDispatch()
	return bindActionCreators(RootActions, dispatch)
}
