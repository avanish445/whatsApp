import React from 'react'
import logo1 from '../../../images/logos/user2.jpg'
import { PhoneIcon, VerticalDotIcon, VideoIcon } from '../../../images/svg-icons/Svgs'

const ChatBoardHeader: React.FC = () => {
  return (
    <div className='pl-3 h-20 border-b border-gray-200 flex items-center justify-between'>
      <div className='flex items-center space-x-4'>
        <img src={logo1} alt='Profile' className='w-10 h-10 rounded-full' />
        <div>
          <h3 className='font-bold text-lg'>Jack P. Angulo</h3>
          <p className='text-xs text-gray-400'>Last seen at 07:15 PM</p>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <button className='p-2 hover:bg-gray-100 rounded-lg'>
          <PhoneIcon />
        </button>
        <button className='p-2 hover:bg-gray-100 rounded-lg'>
          <VideoIcon />
        </button>
        <button className='p-2 hover:bg-gray-100 rounded-lg'>
          <VerticalDotIcon />
        </button>
      </div>
    </div>
  )
}

export default ChatBoardHeader
