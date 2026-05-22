import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { LuGraduationCap } from 'react-icons/lu'
import Message from './Message'
import Topbar from './Topbar'

const ChatBox = ({ setIsSidebarOpen }) => {

  const { selectedChat } = useAppContext()

  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const [prompt, setPrompt] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages)
    }
  }, [selectedChat])

  return (
    <div className='flex-1 flex flex-col relative'>
      {/* Topbar */}
      <Topbar setIsSidebarOpen={setIsSidebarOpen} />

      <div className='flex-1 flex flex-col justify-between m-5 md:m-10 xl:mx-30 max-md:mt-14 overflow-hidden'>
        {/* Chat Messages */}
        <div className='flex-1 mb-5 overflow-y-scroll'>
          {messages.length === 0 && (
            <div className='flex flex-col items-center justify-center h-full'>
              <div className='w-24 h-24 rounded-2xl bg-[#D85A30] flex items-center justify-center mb-4'>
                <LuGraduationCap className='w-14 h-14 text-white' />
              </div>
              <h1 className='text-2xl font-bold mb-2'>StudyChat247</h1>
              <p className='text-gray-500'>Hãy bắt đầu cuộc trò chuyện của bạn</p>
            </div>
          )}

          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}

          {loading && (
            <div className='inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-[#fbf9f7] border border-[#82735a]/30 rounded-md my-4'>
              <div className='text-sm reset-tw'>Đang trả lời...</div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={onSubmit} className='bg-[#f8fafc] border border-[#82735a]/30 rounded-full w-full max-w-2xl p-3 pl-4 mx-auto flex gap-4 items-center'>
          <input onChange={(e) => setPrompt(e.target.value)} value={prompt} type="text" placeholder='Nhập tin nhắn của bạn...' className='flex-1 w-full text-sm outline-none' required />
          <button disabled={loading} type='submit' className='p-2 px-4 bg-[#D85A30] hover:bg-amber-700 text-white rounded-full'>Gửi</button>
        </form>
      </div>
    </div>
  )
}

export default ChatBox