import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { LuGraduationCap, LuSearch, LuX, LuEllipsisVertical, LuTrash2 } from "react-icons/lu"
import { assets } from '../assets/assets'
import moment from 'moment'
import 'moment/dist/locale/vi'
import "./Sidebar.css"
import DropdownProfile from './DropdownProfile'
import ConfirmModal from './ConfirmModal'
moment.locale('vi')

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const {
    sessions,
    currentSessionId,
    selectSession,
    startNewChat,
    removeSession,
    user,
    navigate,
  } = useAppContext();

  const [search, setSearch] = useState('');
  const [openMenu, setOpenMenu] = useState(false);

  // Track which session is pending deletion (shows the ConfirmModal)
  const [pendingDeleteId, setPendingDeleteId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Client-side search: filter sessions by title
  const filteredSessions = sessions.filter((s) =>
    s.title?.toLowerCase().includes(search.toLowerCase())
  );

  const handleSessionClick = (sessionId) => {
    navigate('/');
    selectSession(sessionId);
    setIsSidebarOpen(false);
  };

  const handleDeleteClick = (e, sessionId) => {
    e.stopPropagation(); // Prevent triggering the session click
    setPendingDeleteId(sessionId);
  };

  const handleDeleteConfirm = async () => {
    if (!pendingDeleteId) return;
    setDeleteLoading(true);
    try {
      await removeSession(pendingDeleteId);
    } finally {
      setDeleteLoading(false);
      setPendingDeleteId(null);
    }
  };

  const handleDeleteCancel = () => {
    setPendingDeleteId(null);
  };

  return (
    <div className={`flex flex-col h-screen min-w-72 p-2 bg-[#fbf9f7] border-r border-[#82735a]/30 shadow-sm transition-all duration-500 max-md:absolute left-0 z-1 ${!isSidebarOpen && 'max-md:-translate-x-full'}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <LuGraduationCap />
          </div>
          <span className="sidebar-logo-text">StudyChat247</span>
        </div>
        <button className="new-chat-btn" onClick={startNewChat}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          Cuộc trò chuyện mới
        </button>
      </div>

      {/* Search bar */}
      <div className='flex items-center gap-2 p-3 mt-4 mx-4 border border-gray-400 rounded-md'>
        <LuSearch className='w-4' alt='Search' />
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder='Tìm kiếm cuộc trò chuyện'
          className='text-xs outline-none'
        />
      </div>

      {/* Recent conversations */}
      <div className='flex-1 overflow-y-auto mb-4'>
        {filteredSessions.length > 0 && <p className='text-sm mt-4 px-4'>Gần đây</p>}
        <div>
          {filteredSessions.map((session) => (
            <div
              onClick={() => handleSessionClick(session.id)}
              key={session.id}
              className={`p-2 px-4 mx-4 mt-2 border gap-1 rounded-md cursor-pointer flex justify-between items-center group
                ${currentSessionId === session.id
                  ? 'bg-[#FAECE7] border-[#D85A30]/40'
                  : 'border-gray-300 hover:bg-gray-50'
                }`}
            >
              <div className='overflow-hidden'>
                <p className='truncate text-sm font-medium'>{session.title}</p>
                <p className='text-xs text-gray-500'>{moment(session.updated_at).fromNow()}</p>
              </div>

              {/* Delete button */}
              <button
                onClick={(e) => handleDeleteClick(e, session.id)}
                className='ml-2 p-1 rounded group-hover:opacity-100 hover:bg-red-100 hover:text-red-600 transition-all shrink-0'
                title='Xóa cuộc trò chuyện'
              >
                <LuTrash2 className='w-4 h-4' />
              </button>
            </div>
          ))}

          {sessions.length === 0 && (
            <p className='text-xs text-gray-400 text-center mt-8 px-4'>Chưa có cuộc trò chuyện nào</p>
          )}
        </div>
      </div>

      {/* User Account */}
      <div className='flex items-center gap-3 p-3 mt-auto mx-4 mb-4 border border-gray-300 rounded-md cursor-pointer group shrink-0'>
        <img src={assets.user_icon} className='w-7 rounded-full' alt="" />
        {/* Username section */}
        <p className='flex-1 text-sm truncate'>{user ? user.username : 'Sign in to your account'}</p>
        {user && <LuEllipsisVertical size={"24px"} className='ml-2 p-1 rounded cursor-pointer group-hover:block hover:bg-gray-100' onClick={() => setOpenMenu((prev) => !prev)} />}
        {openMenu && <DropdownProfile />}
      </div>

      {/* Close button (mobile) */}
      <LuX onClick={() => setIsSidebarOpen(false)} className='absolute top-3 right-3 w-6 h-6 cursor-pointer md:hidden' alt='Close' />

      {/* Delete confirm modal */}
      <ConfirmModal
        isOpen={!!pendingDeleteId}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title='Xóa cuộc trò chuyện'
        message='Bạn có chắc muốn xóa cuộc trò chuyện này không? Hành động này không thể hoàn tác.'
        confirmLabel={deleteLoading ? 'Đang xóa...' : 'Xóa'}
        cancelLabel='Hủy'
        isDanger={true}
      />
    </div>
  )
}

export default Sidebar