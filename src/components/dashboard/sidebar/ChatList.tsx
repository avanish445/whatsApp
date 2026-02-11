import React from 'react'
import { User } from '../../../services/api'
import logo1 from '../../../images/logos/1.jpg' // Keep using one as default or import a default avatar

interface ChatListProps {
  users: User[]
  onSelectUser: (user: User) => void
  selectedUser: User | null
  loading: boolean
}

const ChatList: React.FC<ChatListProps> = ({ users, onSelectUser, selectedUser, loading }) => {
  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading users...</div>
  }

  return (
    <div className='overflow-y-auto flex-1 custom-scrollbar'>
      {users.length === 0 ? (
        <div className="p-4 text-center text-gray-500">No users found</div>
      ) : (
        users.map((user) => (
          <div
            key={user._id}
            onClick={() => onSelectUser(user)}
            className={`flex items-center space-x-4 p-3 cursor-pointer rounded-lg transition-colors duration-200 mx-2 ${selectedUser?._id === user._id ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
          >
            <div className="relative">
              <img src={logo1} alt='User' className='w-12 h-12 rounded-full object-cover border border-gray-200' />
              {/* Online indicator could go here */}
            </div>
            <div className='flex-1 min-w-0'>
              <div className="flex justify-between items-baseline">
                <h3 className='font-semibold text-gray-900 truncate'>{user.username}</h3>
                {/* <span className='text-xs text-gray-400'>12:30 PM</span> */}
              </div>
              <p className='text-gray-500 text-sm truncate'>Click to start chatting</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default ChatList
