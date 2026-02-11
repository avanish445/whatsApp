import React, { useState } from 'react'
import { formDataToJson } from '../utils/utilityFunctions'
import { UserAuth } from '../context/UserContext'

const UserInputForm: React.FC = () => {
  const { login, register } = UserAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const userInputs = formDataToJson(form)

    try {
      if (isLogin) {
        await login(userInputs)
      } else {
        await register(userInputs)
      }
    } catch (error) {
      // Error handling is done in context
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-full p-8 md:w-1/2 flex flex-col justify-center bg-white'>
      <div className="max-w-md mx-auto w-full">
        <h2 className='text-3xl font-bold mb-2 text-center text-gray-800'>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="text-center text-gray-500 mb-8">{isLogin ? 'Please sign in to continue' : 'Sign up to get started'}</p>

        <form className='space-y-6' onSubmit={handleSubmit}>
          {/* Username/Email - API expects username for both currently based on docs examples, 
                but let's check if we should label it Username */}
          <div>
            <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-700'>
              Username
            </label>
            <input
              required
              id='username'
              name='username'
              type='text'
              placeholder='Enter your username'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200'
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              required
              id='password'
              name='password'
              type='password'
              placeholder='Enter your password'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200'
            />
          </div>

          {/* Remember me (only for login) */}
          {isLogin && (
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember'
                  type='checkbox'
                  className='h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer'
                />
                <label htmlFor='remember' className='ml-2 text-sm text-gray-600 cursor-pointer'>
                  Remember me
                </label>
              </div>
              <button type="button" className='text-green-600 text-sm font-medium hover:text-green-700'>
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type='submit'
            disabled={loading}
            className={`w-full py-3 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
          </button>
        </form>

        {/* Toggle Login/Register */}
        <div className='mt-8 text-center'>
          <p className='text-gray-600 text-sm'>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className='text-green-600 font-semibold hover:text-green-700 transition duration-200'
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserInputForm
