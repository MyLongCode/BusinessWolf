import type { RootState } from 'store/rootReducer'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

/**
 * @description
 * Это хук для получения состояний redux store
 */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
