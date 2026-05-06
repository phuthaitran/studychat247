import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { LuGraduationCap, LuSearch, LuLogOut, LuX } from "react-icons/lu"
import { assets } from '../assets/assets'
import moment from 'moment'
import 'moment/dist/locale/vi'
import "./Sidebar.css"
moment.locale('vi')

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { chats, setSelectedChat, user, navigate } = useAppContext();
  const [search, setSearch] = useState('')
  return (
    <div className={`flex flex-col h-screen min-w-72 p-2 bg-[#fbf9f7] border-r border-[#82735a]/30 shadow-sm transition-all duration-500 max-md:absolute left-0 z-1 ${!isSidebarOpen && 'max-md:-translate-x-full'}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <LuGraduationCap />
          </div>
          <span className="sidebar-logo-text">StudyChat247</span>
        </div>
        <button className="new-chat-btn">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          Cuộc trò chuyện mới
        </button>
      </div>
      {/* Search bar */}
      <div className='flex items-center gap-2 p-3 mt-4 mx-4 border border-gray-400 rounded-md'>
        <LuSearch className='w-4' alt='Search' />
        <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Tìm kiếm cuộc trò chuyện' className='text-xs outline-none' />
      </div>

      {/* Recent conversations */}
      <div className='flex-1 overflow-y-auto mb-4'>
        {chats.length > 0 && <p className='text-sm mt-4 px-4'>Gần đây</p>}
        <div>
          {
            chats.filter((chat) => chat.messages[0] ? chat.messages[0]?.content.toLowerCase().includes(search.toLowerCase())
              : chat.name.toLowerCase().includes(search.toLowerCase())).map((chat) => (
                <div onClick={() => { navigate('/'); setSelectedChat(chat); setIsSidebarOpen(false) }} key={chat._id} className='p-2 px-4 mx-4 mt-2 border border-gray-300 rounded-md cursor-pointer flex justify-between group'>
                  <div>
                    <p className='truncate w-full'>
                      {chat.messages[0] ? chat.messages[0]?.content.slice(0, 30) + "..." : chat.name}
                    </p>
                    <p className='text-xs text-gray-500'>{moment(chat.updatedAt).fromNow()}</p>
                  </div>
                  <img src={assets.bin_icon} className='hidden group-hover:block w-4 cursor-pointer invert'></img>
                </div>
              ))
          }
        </div>
      </div>

      {/* User Account */}
      <div className='flex items-center gap-3 p-3 mt-auto mx-4 mb-4 border border-gray-300 rounded-md cursor-pointer group shrink-0'>
        <img src={assets.user_icon} className='w-7 rounded-full' alt="" />
        <p className='flex-1 text-sm truncate'>{user ? user.name : 'Đăng nhập tài khoản của bạn'}</p>
        {user && <LuLogOut className='h-5 cursor-pointer hidden group-hover:block' />}
      </div>

      {/* Close button */}
      <LuX onClick={() => setIsSidebarOpen(false)} className='absolute top-3 right-3 w-6 h-6 cursor-pointer md:hidden' alt='Close' />
    </div>
  )
}

export default Sidebar