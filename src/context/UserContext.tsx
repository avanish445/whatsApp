import React, { createContext, ReactNode, useContext, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserActionType } from '../redux/login/actionType'
import { User, UserState } from '../redux/login/type'
import { userLogin, userLogout } from '../redux/login/action'
import { useAppDispatch } from '../redux/store'

export const userDetails: User = {
  id: 1,
  name: 'Avanish',
  email: 'avanishpatel445@gmail.com',
  password: 'Avanish@123',
  image: '',
}

interface UserContextType {
  login: (data: { [key: string]: any } | null) => void
  logout: () => void
  retrieveUser: (data: { [key: string]: any } | null) => void
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const authValue: UserContextType = useMemo(() => {
    return {
      login: (data: any): void => {
        // const user: User={
        //   ...data
        // }
        dispatch(userLogin(userDetails))
        console.log('found user', userDetails)
      },
      logout: async () => {
        userLogout()
        // console.log('sign out')
      },
      retrieveUser: () => {},
    }
  }, [dispatch])
  return <UserContext.Provider value={authValue}>{children}</UserContext.Provider>
}

export const UserAuth = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
