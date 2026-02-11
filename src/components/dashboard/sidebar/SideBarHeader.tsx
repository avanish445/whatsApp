import React, { useState } from 'react'
import logo from '../../../images/logos/user.jpg'
import { BellIcon, HorizontalDotIcon, SearchIocn } from '../../../images/svg-icons/Svgs'
import { useSelector } from 'react-redux'
import { AppState } from '../../../redux/RootRedudcer'
import { UserAuth } from '../../../context/UserContext'

const SideBarHeader: React.FC = () => {
  const user = useSelector((state: AppState) => state.user.user)
  const { logout } = UserAuth()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='flex border-b h-16 pl-3 pr-3 items-center justify-between bg-gray-50 relative'>
      <div className="flex items-center space-x-2">
        <img src={logo} alt='Profile' className='w-10 h-10 rounded-full object-cover border border-gray-200' />
        <span className="font-semibold text-gray-700 text-sm">{user?.username || 'User'}</span>
      </div>
      <div className='flex items-center space-x-2'>
        <button className='p-2 hover:bg-gray-100 rounded-lg text-gray-500'>
          <SearchIocn />
        </button>
        <button className='p-2 hover:bg-gray-100 rounded-lg text-gray-500'>
          <BellIcon />
        </button>
        <div className="relative">
          <button
            className='p-2 hover:bg-gray-100 rounded-lg text-gray-500'
            onClick={() => setShowMenu(!showMenu)}
          >
            <HorizontalDotIcon />
          </button>
          {showMenu && (
            <div className="absolute right-0 top-10 w-48 bg-white shadow-lg rounded-md z-10 py-1 border border-gray-100">
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => {
                  setShowMenu(false)
                  // profile logic
                }}
              >
                Profile
              </button>
              <button
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                onClick={() => {
                  logout()
                  setShowMenu(false)
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SideBarHeader
