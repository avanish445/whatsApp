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
const ContactInfo: React.FC = () => {
  return (
    <div className='w-1/4 bg-white border-l border-gray-200 hidden lg:block'>
      {/* Contact header */}
      <div className='flex items-center text-left h-16 border-b pl-3 justify-between'>
        <p className='font-medium text-lg'>Contact Info</p>
        <button className='p-2 hover:bg-gray-100 rounded-lg'>
          <CloseIcon />
        </button>
      </div>
      <div className='flex flex-col mt-4 items-center'>
        <img src={logo} alt='User' className='w-24 h-24 rounded-full' />
        <h2 className='font-bold text-lg mt-4'>Jack P. Angulo</h2>
        <p className='text-gray-400 text-sm'>Product Manager</p>
        <div className='flex space-x-0'>
          <a href='#' className='p-2 font-bold hover:bg-gray-100 rounded-lg'>
            <FacebookIcon />
          </a>
          <a href='#' className='p-2 font-bold hover:bg-gray-100 rounded-lg'>
            <LinkedinIcon />
          </a>
          <a href='#' className='p-2 font-bold hover:bg-gray-100 rounded-lg'>
            <TwitterIcon />
          </a>
          <a href='#' className='p-2 font-bold hover:bg-gray-100 rounded-lg'>
            <YoutubeIcon />
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className='mt-6 space-y-4 border-t border-b p-3 border-black-200'>
        <div className='flex items-start space-x-2'>
          <MobileIcon />
          <p className='text-gray-600 text-sm'>+91 99041-99041</p>
        </div>
        <div className='flex items-start space-x-2'>
          <BrowserIcon />
          <p className='text-gray-600 text-sm'>www.jackangulo.com</p>
        </div>
        <div className='flex items-start space-x-2'>
          <LocationIcon />
          <p className='text-gray-600 text-sm'>2519 Burnside Court, Horicon, WI, 53032</p>
        </div>
      </div>

      {/* Media */}
      <div className='mt-6 p-3'>
        <h3 className='font-bold mb-4 text-lg'>Photos & Media</h3>
        <div className='grid grid-cols-4 gap-2'>
          <img
            src='https://via.placeholder.com/50'
            alt='Media'
            className='w-full h-14 object-cover rounded-lg'
          />
          <img
            src='https://via.placeholder.com/50'
            alt='Media'
            className='w-full h-14 object-cover rounded-lg'
          />
          <img
            src='https://via.placeholder.com/50'
            alt='Media'
            className='w-full h-14 object-cover rounded-lg'
          />
          <img
            src='https://via.placeholder.com/50'
            alt='Media'
            className='w-full h-14 object-cover rounded-lg'
          />
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
