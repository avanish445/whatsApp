import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { userLogin, userLogout } from '../redux/login/action'
import { useAppDispatch } from '../redux/store'
import { login as apiLogin, register as apiRegister, getCurrentUser as apiGetCurrentUser, logout as apiLogout } from '../services/api'
import socketService from '../services/socket'

interface UserContextType {
  login: (data: { [key: string]: any }) => Promise<void>
  register: (data: { [key: string]: any }) => Promise<void>
  logout: () => void
  retrieveUser: (data: { [key: string]: any } | null) => void
  isAuthLoading: boolean
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const [isAuthLoading, setIsAuthLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in via cookie
    const checkAuth = async () => {
      setIsAuthLoading(true)
      try {
        const response = await apiGetCurrentUser();

        if (response.success && response.data) {
          const { user, token } = response.data;

          // Connect socket with token
          socketService.connect(token, user._id);

          // Update Redux state
          dispatch(userLogin({
            _id: user._id,
            username: user.username,
            token: token // Store token for Socket.IO
          }));
        }
      } catch (error) {
        console.log('No active session');
      } finally {
        setIsAuthLoading(false)
      }
    };

    checkAuth();
  }, [dispatch]);

  const authValue: UserContextType = useMemo(() => ({
    login: async (data: any): Promise<void> => {
      try {
        const { username, password } = data;
        const response = await apiLogin(username, password);

        if (response.success && response.data) {
          const { user, token } = response.data;

          // Connect socket with token
          socketService.connect(token, user._id);

          // Update Redux
          dispatch(userLogin({
            _id: user._id,
            username: user.username,
            token: token // Store token for Socket.IO
          }));
        } else {
          alert(response.message || 'Login failed');
          throw new Error(response.message || 'Login failed');
        }
      } catch (error: any) {
        console.error(error);
        alert(error.message || 'Login error');
        throw error;
      }
    },
    register: async (data: any): Promise<void> => {
      try {
        const { username, password } = data;
        const response = await apiRegister(username, password);

        if (response.success && response.data) {
          const { user, token } = response.data;

          // Connect socket with token
          socketService.connect(token, user._id);

          // Update Redux
          dispatch(userLogin({
            _id: user._id,
            username: user.username,
            token: token // Store token for Socket.IO
          }));
        } else {
          alert(response.message || 'Registration failed');
          throw new Error(response.message || 'Registration failed');
        }
      } catch (error: any) {
        console.error(error);
        alert(error.message || 'Registration error');
        throw error;
      }
    },
    logout: async () => {
      try {
        await apiLogout();
      } catch (error) {
        console.error('Logout error:', error);
      }
      socketService.disconnect();
      dispatch(userLogout());
    },
    retrieveUser: () => { },
    isAuthLoading
  }), [dispatch, isAuthLoading])
  return <UserContext.Provider value={authValue}>{children}</UserContext.Provider>
}

export const UserAuth = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
