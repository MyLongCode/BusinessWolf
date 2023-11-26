import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import RootActions from 'store/rootActions'

export const useActions = () => {
	const dispatch: any = useDispatch()
	return bindActionCreators(RootActions, dispatch)
}
