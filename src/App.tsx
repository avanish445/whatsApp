import React from 'react'
// import './App.css'
import Login from './components/login/Login'
import ChatApp from './components/dashboard/ChatApp'

const App: React.FC = () => {
  return (
    <div className='mt-25 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500'>
      {/* <h1>Hello world!</h1> */}
      {/* <header className='App-header'> */}
      <ChatApp />
      {/* <Login /> */}
      {/* </header> */}
    </div>
  )
}

export default App
