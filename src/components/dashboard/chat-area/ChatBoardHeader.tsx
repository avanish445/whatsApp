import React from 'react'
import logo1 from '../../../images/logos/user2.jpg'
import { PhoneIcon, VerticalDotIcon, VideoIcon } from '../../../images/svg-icons/Svgs'
import { User } from '../../../services/api'

interface ChatBoardHeaderProps {
  selectedUser: User
}

const ChatBoardHeader: React.FC<ChatBoardHeaderProps> = ({ selectedUser }) => {
  return (
    <div className='pl-3 h-20 border-b border-gray-200 flex items-center justify-between bg-white'>
      <div className='flex items-center space-x-4'>
        <img src={logo1} alt='Profile' className='w-10 h-10 rounded-full object-cover' />
        <div>
          <h3 className='font-bold text-lg'>{selectedUser.username}</h3>
          <p className='text-xs text-green-500'>Online</p>
        </div>
      </div>
      <div className='flex items-center space-x-2 pr-4'>
        <button className='p-2 hover:bg-gray-100 rounded-lg text-gray-500'>
          <PhoneIcon />
        </button>
        <button className='p-2 hover:bg-gray-100 rounded-lg text-gray-500'>
          <VideoIcon />
        </button>
        <button className='p-2 hover:bg-gray-100 rounded-lg text-gray-500'>
          <VerticalDotIcon />
        </button>
      </div>
    </div>
  )
}

export default ChatBoardHeader
