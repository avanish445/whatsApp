import React from 'react'
import logo1 from '../../../images/logos/1.jpg'
import logo2 from '../../../images/logos/2.jpg'
import logo3 from '../../../images/logos/3.jpg'
import logo4 from '../../../images/logos/4.jpg'
import logo5 from '../../../images/logos/5.jpg'
import logo6 from '../../../images/logos/6.jpg'
import logo7 from '../../../images/logos/7.jpg'
import logo8 from '../../../images/logos/8.jpg'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]

const ChatList: React.FC = () => {
  return (
    <div className='overflow-y-auto flex-1'>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className='flex items-center space-x-4 p-3   hover:bg-gray-100 cursor-pointer rounded-lg'
        >
          <img src={logos[i]} alt='User' className='w-10 h-10 rounded-full' />
          <div className='flex-1'>
            <h3 className='font-bold text-sm'>Jack P. Angulo</h3>
            <p className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet...</p>
          </div>
          <div className='text-xs text-gray-400'>02:21 PM</div>
        </div>
      ))}
    </div>
  )
}

export default ChatList
