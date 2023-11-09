import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from "../store/actionCreators";

export const useActions = () => {
    const dispatch: any = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}