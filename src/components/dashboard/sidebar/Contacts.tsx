import React from 'react'
import SideBarHeader from './SideBarHeader'
import ChatList from './ChatList'
import { ContactIcon, MessageIcon, PhoneIcon } from '../../../images/svg-icons/Svgs'

const Contacts: React.FC = () => {
  return (
    <div className='w-1/4 bg-white border-r border-gray-200 hidden md:flex flex-col'>
      {/* Sidebar Header */}
      <SideBarHeader />
      {/* Tabs for Chats, Calls, Contacts */}
      <div className='flex justify-between border-b bg-gray-100 space-x-4 mb-4 pl-3 pr-4'>
        <div className='flex flex-col items-center p-2 hover:bg-gray-200 rounded-lg'>
          <MessageIcon color={'#3b82f6'} />
          <button className='text-blue-500 text-sm border-b-2 border-blue-500 pb-2'>Chats</button>
        </div>
        <div className='flex flex-col items-center p-2 hover:bg-gray-200 rounded-lg'>
          <PhoneIcon />
          <button className='text-gray-500 text-sm pb-2'>Calls</button>
        </div>
        <div className='flex flex-col items-center p-2 hover:bg-gray-200 rounded-lg'>
          <ContactIcon />
          <button className='text-gray-500 text-sm pb-2'>Contacts</button>
        </div>
      </div>
      <ChatList />
      {/* Chat List */}
    </div>
  )
}

export default Contacts
