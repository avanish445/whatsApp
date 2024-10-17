import React from 'react'
import loginImage from '../../images/bg-img/login-bg2.jpg'
import UserInputForm from '../UserInputForm'

const Login: React.FC = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-200'>
      <div className='bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row  max-w-4xl w-full'>
        {/* Left: Image Section */}
        <div className='md:block md:w-1/2'>
          <img src={loginImage} alt='Login' className='w-full h-full object-cover' />
        </div>
        {/* Right: Form Section */}
        <UserInputForm />
      </div>
    </div>
  )
}

export default Login
