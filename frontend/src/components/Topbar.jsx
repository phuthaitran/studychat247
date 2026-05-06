import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";

const Topbar = ({ setIsSidebarOpen }) => {
  const [classyear, setClassyear] = useState("Lớp 10");
  const [subject, setSubject] = useState("Toán học");
  function handleChangeClassyear(e) {
    setClassyear(e.target.value);

  }
  function handleChangeSubject(e) {
    setSubject(e.target.value);

  }
  return (
    <div className='flex items-center justify-between px-5 py-3 w-full'>
      <div className='flex items-center gap-2.5'>
        <LuMenu className='w-6 h-6 cursor-pointer md:hidden' onClick={() => setIsSidebarOpen(true)} />
        <span className='text-sm font-medium'>{subject}</span>
        <span className='text-xs text-[#993C1D] font-medium px-2.5 py-0.75 rounded-[100px] bg-[#FAECE7]'>{classyear}</span>
      </div>
      {/* Selection section */}
      <div className='flex items-center gap-4'>
        {/* Class selection */}
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium max-lg:hidden'>Lớp học</span>
          <select className='text-[13px] cursor-pointer px-2.5 py-1.25 border-[0.5px] outline-none rounded-md' value={classyear} onChange={handleChangeClassyear}>
            <option value={"Lớp 10"}>Lớp 10</option>
            <option value={"Lớp 11"}>Lớp 11</option>
            <option value={"Lớp 12"}>Lớp 12</option>
          </select>
        </div>
        {/* Subject selection */}
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium max-lg:hidden'>Môn học</span>
          <select className='text-[13px] cursor-pointer px-2.5 py-1.25 border-[0.5px] outline-none rounded-md' value={subject} onChange={handleChangeSubject}>
            <option value={"Toán học"}>Toán học</option>
            <option value={"Lịch sử"}>Lịch sử</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Topbar
