import React from 'react'
// import './App.css'
import Login from './components/login/Login'
import ChatApp from './components/dashboard/ChatApp'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import { AppState } from './redux/RootRedudcer'
import { UserState } from './redux/login/type'
import { UserAuth } from './context/UserContext'

const App: React.FC = () => {
  const user = useSelector((state: AppState): UserState => state.user)
  const { isAuthLoading } = UserAuth()
  console.log('user state', user)

  // Show loading screen while checking authentication
  if (isAuthLoading) {
    return <LoadingScreen />
  }

  return (
    <div className='mt-25 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500'>
      {user?.user ? <ChatApp /> : <Login />}
    </div>
  )
}

export default App
