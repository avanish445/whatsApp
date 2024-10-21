import { combineReducers } from 'redux'
import UserReducer from './login/reducer'

const RootReducer = combineReducers({
  user: UserReducer,
})
export type AppState = ReturnType<typeof RootReducer>
export default RootReducer
