import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
// const middleware = [thunk]
import RootReducer from './RootRedudcer'
import { useDispatch } from 'react-redux'

const store = createStore(
  RootReducer,
  {},
  //   applyMiddleware(thunk)
  composeWithDevTools(applyMiddleware(thunk))
)
type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export default store
