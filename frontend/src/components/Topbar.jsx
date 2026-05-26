import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";

const Topbar = ({ setIsSidebarOpen }) => {
  const [classyear, setClassyear] = useState(10);
  const [subject, setSubject] = useState("math");
  function handleChangeClassyear(e) {
    setClassyear(e.target.value);

  }
  function handleChangeSubject(e) {
    setSubject(e.target.value);

  }

  function convertClassyear(year) {
    if (year == 10) {
      return "Lớp 10";
    } else if (year == 11) {
      return "Lớp 11";
    } else if (year == 12) {
      return "Lớp 12";
    }
  }

  function convertSubject(subject) {
    if (subject == "math") {
      return "Toán học"
    } else if (subject == "history") {
      return "Lịch sử"
    }
  }
  return (
    <div className='flex items-center justify-between px-5 py-3 w-full'>
      <div className='flex items-center gap-2.5'>
        <LuMenu className='w-6 h-6 cursor-pointer md:hidden' onClick={() => setIsSidebarOpen(true)} />
        <span className='text-sm font-medium'>{convertSubject(subject)}</span>
        <span className='text-xs text-[#993C1D] font-medium px-2.5 py-0.75 rounded-[100px] bg-[#FAECE7]'>{convertClassyear(classyear)}</span>
      </div>
      {/* Selection section */}
      <div className='flex items-center gap-4'>
        {/* Class selection */}
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium max-lg:hidden'>Lớp học</span>
          <select className='text-[13px] cursor-pointer px-2.5 py-1.25 border-[0.5px] outline-none rounded-md' value={classyear} onChange={handleChangeClassyear}>
            <option value={10}>Lớp 10</option>
            <option value={11}>Lớp 11</option>
            <option value={12}>Lớp 12</option>
          </select>
        </div>
        {/* Subject selection */}
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium max-lg:hidden'>Môn học</span>
          <select className='text-[13px] cursor-pointer px-2.5 py-1.25 border-[0.5px] outline-none rounded-md' value={subject} onChange={handleChangeSubject}>
            <option value={"math"}>Toán học</option>
            <option value={"history"}>Lịch sử</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Topbar
