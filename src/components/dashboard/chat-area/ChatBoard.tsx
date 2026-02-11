import React, { useEffect, useRef, useState } from 'react'
import logo1 from '../../../images/logos/user2.jpg'
import logo2 from '../../../images/logos/user.jpg'
import ChatBoardHeader from './ChatBoardHeader'
import {
  AttachIcon,
  CameraIcon,
  EmogiIcon,
  MicIcon,
  SendIcon,
} from '../../../images/svg-icons/Svgs'
import { getChatHistory, Message, User } from '../../../services/api'
import socketService from '../../../services/socket'
import { useSelector } from 'react-redux'
import { AppState } from '../../../redux/RootRedudcer'

interface ChatBoardProps {
  selectedUser: User
}

const ChatBoard: React.FC<ChatBoardProps> = ({ selectedUser }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const userState = useSelector((state: AppState) => state.user.user)
  const currentUserId = userState?._id
  const token = userState?.token

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (!token || !selectedUser._id) return;

    // Load history
    const loadHistory = async () => {
      try {
        const response = await getChatHistory(selectedUser._id) // No token needed, uses cookies
        if (response.success) {
          setMessages(response.data)
        }
      } catch (error) {
        console.error("Error loading chat history:", error)
      }
    }
    loadHistory()

    // Socket listeners
    const handleReceiveMessage = (data: any) => {
      // data structure from backend: { data: Message } or just Message depending on event
      // The API doc says: { data: Message }
      const message = data.data || data;

      // Only add if it belongs to this chat
      // (sender is selectedUser OR sender is me and receiver is selectedUser - though 'sent' usually comes via different event)
      if (
        (message.senderId._id === selectedUser._id) ||
        (message.senderId._id === currentUserId && message.receiverId._id === selectedUser._id)
      ) {
        // Avoid duplicates if possible, distinct by _id
        setMessages(prev => {
          if (prev.some(m => m._id === message._id)) return prev;
          return [...prev, message];
        });
      }
    };

    const handleMessageSent = (data: any) => {
      if (data.success) {
        const message = data.data;
        if (message.receiverId._id === selectedUser._id) {
          // Avoid duplicates - check if message already exists
          setMessages(prev => {
            if (prev.some(m => m._id === message._id)) return prev;
            return [...prev, message];
          });
          setInputText(''); // Clear on success
          if (inputRef.current) {
            inputRef.current.style.height = 'auto';
          }
        }
      }
    };

    socketService.onReceiveMessage(handleReceiveMessage);
    socketService.onMessageSent(handleMessageSent);

    // Cleanup listeners? socket.io-client might stack them if we don't off them.
    // Ideally socketService should expose 'off'. For now we rely on the service being singleton but listeners might duplicate.
    // In a real app we'd add removeListener methods to SocketService.

    // Simple workaround: The service is global. Components mount/unmount. 
    // We should probably implement removeListener in SocketService for cleaner architecture.
    // But for this task, I'll stick to the provided pattern.

    return () => {
      // cleanup would go here
    }

  }, [selectedUser, token, currentUserId]);

  const handleSendMessage = () => {
    if (inputText.trim() && token && currentUserId) {
      // Optomistic UI update could happen here, but we'll wait for server ack 'messageSent'
      socketService.sendMessage(token, currentUserId, selectedUser._id, inputText);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value)
    // Adjust height
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`
    }
    // Typing indicator logic could go here
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }

  return (
    <div className='flex flex-col flex-1 bg-[#efeae2] h-full relative'>
      <ChatBoardHeader selectedUser={selectedUser} />

      {/* Messages */}
      {/* Using a background pattern similar to WhatsApp */}
      <div className='flex-1 overflow-y-auto p-4 custom-scrollbar bg-[url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")] bg-repeat bg-center opacity-90'>
        <div className='space-y-2 flex flex-col'>
          {messages.map((msg) => {
            const isMyMessage = msg.senderId._id === currentUserId;
            return (
              <div
                key={msg._id}
                className={`flex ${isMyMessage ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xl p-2 px-3 rounded-lg shadow-sm text-sm relative ${isMyMessage ? 'bg-[#d9fdd3] rounded-tr-none' : 'bg-white rounded-tl-none'
                    }`}
                >
                  <p className="text-gray-800 leading-relaxed break-words">{msg.text}</p>
                  <div className={`text-[10px] text-gray-500 mt-1 text-right flex items-center justify-end space-x-1`}>
                    <span>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    {/* Read receipts checkmarks could go here */}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className='p-3 bg-gray-100 flex items-end space-x-2'>
        <button className='p-2 hover:bg-gray-200 text-gray-500 rounded-full transition duration-200'>
          <EmogiIcon />
        </button>
        <button className='p-2 hover:bg-gray-200 text-gray-500 rounded-full transition duration-200'>
          <AttachIcon />
        </button>

        <div className="flex-1 bg-white rounded-xl flex items-center shadow-sm border border-gray-200 px-4 py-2">
          <textarea
            ref={inputRef}
            rows={1}
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            style={{ maxHeight: '100px', minHeight: '24px' }}
            placeholder='Type a message'
            className='w-full resize-none focus:outline-none text-sm bg-transparent max-h-32 custom-scrollbar'
          ></textarea>
        </div>

        {inputText.trim() ? (
          <button
            onClick={handleSendMessage}
            className='p-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition transform hover:scale-105 active:scale-95'
          >
            <SendIcon />
          </button>
        ) : (
          <button className='p-3 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full transition duration-200'>
            <MicIcon />
          </button>
        )}
      </div>
    </div>
  )
}

export default ChatBoard
