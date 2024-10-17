import React, { useRef, useState } from 'react'
import logo1 from '../../../images/logos/user2.jpg'
import logo2 from '../../../images/logos/user.jpg'
import ChatBoardHeader from './ChatBoardHeader'
import {
  AttachIcon,
  CameraIcon,
  EmogiIcon,
  MicIcon,
  PhoneIcon,
  SendIcon,
} from '../../../images/svg-icons/Svgs'
// import BgImage from '../../images/bg-img/chat-bg.jpeg'

const ChatBoard: React.FC = () => {
  const [text, setText] = useState<String>()
  const inputRef = useRef<any>(null)
  const handleInputChange = (e: any) => {
    setText(e.target.value)
    // Adjust height automatically based on content
    inputRef.current.style.height = 'auto' // Reset height
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px` // Set to scroll height
  }
  return (
    <div className='flex flex-col flex-1 bg-gray-50'>
      <ChatBoardHeader />
      {/* Messages */}
      <div className='h-screen bg-chat-bg bg-cover bg-center bg-no-repeat'>
        <div className='flex-1 p-4 overflow-y-auto'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <img src={logo1} alt='Profile' className='w-10 h-10 rounded-full' />
              <div className='bg-gray-200 p-3 rounded-lg text-sm max-w-xs text-slate-600'>
                Hi, I wanted to check my order status. My order number is 0009483021 😊
              </div>
            </div>
            <div className='flex items-center space-x-4 justify-end'>
              <div className='bg-blue-500 text-white p-3 rounded-lg text-sm max-w-xs'>
                Great, thanks 😊 for the information! Give me one moment please while I check on
                that for you.
              </div>
              <img src={logo2} alt='Profile' className='w-10 h-10 rounded-full' />
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className='p-4 border-t relative border-gray-100 flex items-center'>
        <button className='absolute left-3 p-1 hover:bg-gray-200  rounded-full'>
          <EmogiIcon />
        </button>
        <textarea
          rows={1}
          ref={inputRef}
          // type='text'
          onChange={handleInputChange}
          style={{ overflow: 'hidden' }}
          placeholder='Type a message...'
          className='flex  items-center border text-sm border-gray-400 ml-10  pr-28 py-3 px-4 w-full resize-none focus:outline-none focus:ring-1 focus:ring-blue-200 rounded-xl'
        ></textarea>
        <div className='flex items-center absolute right-16'>
          <button className='p-1 hover:bg-gray-100 rounded-lg'>
            <AttachIcon />
          </button>
          <button className='p-1 hover:bg-gray-100 rounded-lg'>
            <CameraIcon />
          </button>
          <button className='p-1 hover:bg-gray-100 rounded-lg'>
            <MicIcon />
          </button>
        </div>
        <button className='ml-2 p-2 bg-blue-500 hover:bg-blue-400 active:bg-blue-500 text-white rounded-full'>
          <SendIcon />
        </button>
      </div>
    </div>
  )
}

export default ChatBoard
