import React, { useState } from 'react'
import Contacts from './sidebar/Contacts'
import ChatBoard from './chat-area/ChatBoard'
import ContactInfo from './contact-info/ContactInfo'
import { User } from '../../services/api'

const ChatApp: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Left Sidebar */}
      <Contacts onSelectUser={setSelectedUser} selectedUser={selectedUser} />
      {/* Chat Window */}
      {selectedUser ? (
        <ChatBoard selectedUser={selectedUser} />
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-600">Welcome to WhatsApp</h2>
            <p className="text-gray-500 mt-2">Select a chat to start messaging</p>
          </div>
        </div>
      )}
      {/* Right Sidebar (Contact Info) - Optional: only show if user selected */}
      {selectedUser && <ContactInfo selectedUser={selectedUser} />}
    </div>
  )
}

export default ChatApp
