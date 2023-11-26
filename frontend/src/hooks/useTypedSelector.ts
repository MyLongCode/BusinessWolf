import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from 'store/rootReducer'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
