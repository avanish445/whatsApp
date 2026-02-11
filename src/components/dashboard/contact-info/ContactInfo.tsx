import React from 'react'
import logo from '../../../images/logos/user2.jpg'
import {
  BrowserIcon,
  CloseIcon,
  FacebookIcon,
  LinkedinIcon,
  LocationIcon,
  MobileIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../../images/svg-icons/Svgs'
import { User } from '../../../services/api'

interface ContactInfoProps {
  selectedUser?: User | null
}

const ContactInfo: React.FC<ContactInfoProps> = ({ selectedUser }) => {
  if (!selectedUser) return null;

  return (
    <div className='w-1/4 bg-white border-l border-gray-200 hidden lg:block overflow-y-auto'>
      {/* Contact header */}
      <div className='flex items-center text-left h-20 border-b pl-3 justify-between'>
        <p className='font-medium text-lg'>Contact Info</p>
        <button className='p-2 hover:bg-gray-100 rounded-lg'>
          <CloseIcon />
        </button>
      </div>
      <div className='flex flex-col mt-8 items-center'>
        <img src={logo} alt='User' className='w-24 h-24 rounded-full object-cover border-4 border-gray-100 shadow-sm' />
        <h2 className='font-bold text-xl mt-4 text-gray-800'>{selectedUser.username}</h2>
        <p className='text-gray-500 text-sm'>Available</p>
        <div className='flex space-x-2 mt-4'>
          <a href='#' className='p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'>
            <FacebookIcon />
          </a>
          <a href='#' className='p-2 text-gray-400 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors'>
            <LinkedinIcon />
          </a>
          <a href='#' className='p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition-colors'>
            <TwitterIcon />
          </a>
          <a href='#' className='p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors'>
            <YoutubeIcon />
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className='mt-8 space-y-6 border-t border-b p-6 border-gray-100'>
        <div className='flex items-start space-x-4'>
          <div className="mt-1 text-gray-400"><MobileIcon /></div>
          <div>
            <p className='text-xs text-gray-400 uppercase font-semibold'>Username</p>
            <p className='text-gray-700 text-sm font-medium'>{selectedUser.username}</p>
          </div>
        </div>
        <div className='flex items-start space-x-4'>
          <div className="mt-1 text-gray-400"><BrowserIcon /></div>
          <div>
            <p className='text-xs text-gray-400 uppercase font-semibold'>User ID</p>
            <p className='text-gray-700 text-sm font-medium break-all'>{selectedUser._id}</p>
          </div>
        </div>
        <div className='flex items-start space-x-4'>
          <div className="mt-1 text-gray-400"><LocationIcon /></div>
          <div>
            <p className='text-xs text-gray-400 uppercase font-semibold'>Member Since</p>
            <p className='text-gray-700 text-sm font-medium'>
              {new Date(selectedUser.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='mt-6 p-4'>
        <div className="flex justify-between items-center mb-4">
          <h3 className='font-bold text-sm text-gray-700'>About</h3>
        </div>
        <p className='text-sm text-gray-600'>
          Chat with {selectedUser.username} to start a conversation!
        </p>
      </div>
    </div>
  )
}

export default ContactInfo
