import { Dispatch } from 'redux'
import {
  UserActionType,
  UserFetchActionFailed,
  UserFetchActionRequest,
  UserFetchActionSuccess,
  UserLogin,
  UserLogout,
  UserType,
} from './actionType'
import { User } from './type'

const fetchUserRequest = (): UserFetchActionRequest => ({ type: UserType.USER_FETCH_REQUEST })
const fetchUserSuccessRequest = (user: User): UserFetchActionSuccess => ({
  type: UserType.USER_FETCH_REQUEST_SUCCESS,
  payload: user,
})
const fetchUserFailedRequest = (error: string): UserFetchActionFailed => ({
  type: UserType.USER_FETCH_REQUEST_FAILED,
  payload: error,
})
//
const login = (user: User): UserLogin => ({
  type: UserType.USER_LOGIN,
  payload: user,
})
const logout = (data = null): UserLogout => ({
  type: UserType.USER_LOGOUT,
  payload: data,
})
export const fetchUser = () => {
  return async (dispatch: Dispatch<UserActionType>) => {
    dispatch(fetchUserRequest())
    try {
      const response: User = {
        id: 1,
        name: 'Avanish',
        email: 'avanish.p@kftpl.com',
        password: 'avanish@123',
        image: 'image',
      }
      dispatch(fetchUserSuccessRequest(response))
    } catch (err) {
      dispatch(fetchUserFailedRequest('Failed'))
    }
  }
}
export const userLogin = (user: User) => {
  console.log('user', user)
  return (dispatch: Dispatch<UserActionType>) => {
    dispatch(fetchUserRequest())
    try {
      const response: User = {
        id: 1,
        name: 'Avanish',
        email: 'avanish.p@kftpl.com',
        password: 'avanish@123',
        image: 'image',
      }
      console.log('rsponse', user)
      dispatch(login(response))
    } catch (err) {
      console.log('error', err)
      dispatch(fetchUserFailedRequest('Failed'))
    }
  }
}
export const userLogout = () => {
  return async (dispatch: Dispatch<UserActionType>) => {
    dispatch(fetchUserRequest())
    try {
      dispatch(logout(null))
    } catch (err) {
      dispatch(fetchUserFailedRequest('Failed'))
    }
  }
}
