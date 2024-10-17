import React from 'react'
import logo from '../../../images/logos/user.jpg'
import { BellIcon, HorizontalDotIcon, SearchIocn } from '../../../images/svg-icons/Svgs'

const SideBarHeader: React.FC = () => {
  return (
    <div className='flex border-b h-16 pl-3 pr-3 items-center justify-between'>
      <img src={logo} alt='Profile' className='w-10 h-10 rounded-full' />
      <div className='flex items-center space-x-2'>
        <button className='p-2 hover:bg-gray-100 rounded-lg'>
          <SearchIocn />
        </button>
        <button className='p-2 hover:bg-gray-100 rounded-lg'>
          <BellIcon />
        </button>
        <button className='p-2 hover:bg-gray-100 rounded-lg'>
          <HorizontalDotIcon />
        </button>
      </div>
    </div>
  )
}

export default SideBarHeader
