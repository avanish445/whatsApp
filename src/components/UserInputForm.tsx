import React from 'react'

const UserInputForm: React.FC = () => {
  return (
    <div className='w-full p-8 md:w-1/2 flex flex-col justify-center'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
      <form className='space-y-8 text-lg'>
        {/* Email */}
        <div>
          <label className='block mb-1 text-start text-gray-600'>Email Address</label>
          <input
            required
            type='email'
            placeholder='Enter your email'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        {/* Password */}
        <div>
          <label className='block mb-1 text-start text-gray-600'>Password</label>
          <input
            required
            type='password'
            placeholder='Enter your password'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        {/* Remember me */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              id='remember'
              type='checkbox'
              className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
            />
            <label htmlFor='remember' className='ml-2 text-gray-600'>
              Remember me
            </label>
          </div>
          <a href='#' className='text-blue-500 text-sm'>
            Forgot password?
          </a>
        </div>
        {/* Submit Button */}
        <button
          type='submit'
          className='w-full py-2 px-4 bg-blue-600 text-white rounded-lg active:bg-blue-600 hover:bg-blue-500 transition duration-300'
        >
          Login
        </button>
      </form>

      {/* Register Link */}
      <div className='mt-4 text-center'>
        <p className='text-gray-600 text-lg'>
          Don't have an account?{' '}
          <a href='#' className='text-blue-500 font-medium'>
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default UserInputForm
