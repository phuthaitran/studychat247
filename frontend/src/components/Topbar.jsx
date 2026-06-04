import React from 'react'
import { LuMenu, LuLock } from "react-icons/lu";
import { useAppContext } from '../context/AppContext';

// Subject and grade display helpers
const SUBJECT_LABELS = {
  math: 'Toán học',
  history: 'Lịch sử',
};

const GRADE_LABELS = {
  10: 'Lớp 10',
  11: 'Lớp 11',
  12: 'Lớp 12',
};

const Topbar = ({ setIsSidebarOpen }) => {
  const {
    sessionSubject,
    sessionGrade,
    topbarSubject,
    setTopbarSubject,
    topbarGrade,
    setTopbarGrade,
  } = useAppContext();

  // When a session is active, subject/grade are locked to the session's values.
  // Otherwise, the user can freely change the Topbar dropdowns.
  const isLocked = sessionSubject !== null && sessionGrade !== null;
  const activeSubject = isLocked ? sessionSubject : topbarSubject;
  const activeGrade = isLocked ? sessionGrade : topbarGrade;

  return (
    <div className='flex items-center justify-between px-5 py-3 w-full'>
      <div className='flex items-center gap-2.5'>
        <LuMenu className='w-6 h-6 cursor-pointer md:hidden' onClick={() => setIsSidebarOpen(true)} />
        {/* Active subject / grade display badge */}
        <span className='text-sm font-medium'>{SUBJECT_LABELS[activeSubject] ?? activeSubject}</span>
        <span className='text-xs text-[#993C1D] font-medium px-2.5 py-0.75 rounded-[100px] bg-[#FAECE7]'>
          {GRADE_LABELS[activeGrade] ?? `Lớp ${activeGrade}`}
        </span>
        {/* Show a lock icon when the session subject/grade are fixed */}
        {isLocked && (
          <span title='Môn học và lớp đã được khóa cho phiên này' className='text-gray-400'>
            <LuLock className='w-3.5 h-3.5' />
          </span>
        )}
      </div>

      {/* Selection section — disabled when a session is active */}
      <div className='flex items-center gap-4'>
        {/* Grade selection */}
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium max-lg:hidden'>Lớp học</span>
          <select
            className={`text-[13px] px-2.5 py-1.25 border-[0.5px] outline-none rounded-md
              ${isLocked ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'cursor-pointer'}`}
            value={activeGrade}
            onChange={(e) => setTopbarGrade(Number(e.target.value))}
            disabled={isLocked}
          >
            <option value={10}>Lớp 10</option>
            <option value={11}>Lớp 11</option>
            <option value={12}>Lớp 12</option>
          </select>
        </div>

        {/* Subject selection */}
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium max-lg:hidden'>Môn học</span>
          <select
            className={`text-[13px] px-2.5 py-1.25 border-[0.5px] outline-none rounded-md
              ${isLocked ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'cursor-pointer'}`}
            value={activeSubject}
            onChange={(e) => setTopbarSubject(e.target.value)}
            disabled={isLocked}
          >
            <option value="math">Toán học</option>
            <option value="history">Lịch sử</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Topbar
