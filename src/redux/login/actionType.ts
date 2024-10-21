import { User } from './type'

// action type
export enum UserType {
  USER_FETCH_REQUEST = 'FETCH_USER_REQUEST',
  USER_FETCH_REQUEST_SUCCESS = 'USER_FETCH_REQUEST_SUCCESS',
  USER_FETCH_REQUEST_FAILED = 'USER_FETCH_REQUEST_FAILED',
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
}
// deifne action

export interface UserFetchActionRequest {
  type: UserType.USER_FETCH_REQUEST
}
export interface UserFetchActionSuccess {
  type: UserType.USER_FETCH_REQUEST_SUCCESS
  payload: User
}
export interface UserFetchActionFailed {
  type: UserType.USER_FETCH_REQUEST_FAILED
  payload: string
}
export interface UserLogin {
  type: UserType.USER_LOGIN
  payload: User | null
}
export interface UserLogout {
  type: UserType.USER_LOGOUT
  payload: null
}

export type UserActionType =
  | UserFetchActionRequest
  | UserFetchActionSuccess
  | UserFetchActionFailed
  | UserLogin
  | UserLogout
