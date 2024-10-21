import { UserState } from './type'
import { UserActionType, UserType } from './actionType'

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
}

const UserReducer = (state = initialState, action: UserActionType): UserState => {
  switch (action.type) {
    case UserType.USER_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case UserType.USER_FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: true,
        user: action.payload,
      }
    case UserType.USER_FETCH_REQUEST_FAILED:
      return {
        ...state,
        loading: true,
        error: action.payload,
      }
    case UserType.USER_LOGIN:
      //   console.log('user login')
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    case UserType.USER_LOGOUT:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    default:
      return state
  }
}
export default UserReducer
