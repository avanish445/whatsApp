import React from 'react'
import Contacts from './sidebar/Contacts'
import ChatBoard from './chat-area/ChatBoard'
import ContactInfo from './contact-info/ContactInfo'

const ChatApp: React.FC = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Left Sidebar */}
      <Contacts />
      {/* Chat Window */}
      <ChatBoard />
      {/* Right Sidebar (Contact Info) */}
      <ContactInfo />
    </div>
  )
}

export default ChatApp
