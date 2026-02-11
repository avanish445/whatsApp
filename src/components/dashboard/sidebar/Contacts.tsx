import React, { useEffect, useState } from 'react'
import SideBarHeader from './SideBarHeader'
import ChatList from './ChatList'
import { ContactIcon, MessageIcon, PhoneIcon } from '../../../images/svg-icons/Svgs'
import { getUsers, User } from '../../../services/api'
import { useSelector } from 'react-redux'
import { AppState } from '../../../redux/RootRedudcer'

interface ContactsProps {
  onSelectUser: (user: User) => void
  selectedUser: User | null
}

const Contacts: React.FC<ContactsProps> = ({ onSelectUser, selectedUser }) => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  // Check if user is logged in (token exists in Redux for Socket.IO)
  const isLoggedIn = useSelector((state: AppState) => !!state.user.user?.token)

  useEffect(() => {
    const fetchUsers = async () => {
      if (isLoggedIn) {
        setLoading(true)
        try {
          const response = await getUsers() // No token needed, uses cookies
          if (response.success) {
            setUsers(response.data)
          }
        } catch (error) {
          console.error("Failed to fetch users", error)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchUsers()
  }, [isLoggedIn])

  return (
    <div className='w-1/4 bg-white border-r border-gray-200 hidden md:flex flex-col h-full'>
      {/* Sidebar Header */}
      <SideBarHeader />
      {/* Tabs for Chats, Calls, Contacts */}
      <div className='flex justify-between border-b bg-gray-100 space-x-4 mb-4 pl-3 pr-4'>
        <div className='flex flex-col items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer'>
          <MessageIcon color={'#3b82f6'} />
          <button className='text-blue-500 text-sm border-b-2 border-blue-500 pb-2 font-medium'>Chats</button>
        </div>
        <div className='flex flex-col items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer'>
          <PhoneIcon />
          <button className='text-gray-500 text-sm pb-2 font-medium'>Calls</button>
        </div>
        <div className='flex flex-col items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer'>
          <ContactIcon />
          <button className='text-gray-500 text-sm pb-2 font-medium'>Contacts</button>
        </div>
      </div>

      {/* Chat List */}
      <ChatList
        users={users}
        onSelectUser={onSelectUser}
        selectedUser={selectedUser}
        loading={loading}
      />
    </div>
  )
}

export default Contacts
