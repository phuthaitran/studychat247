import React from 'react'
import { assets } from '../assets/assets'
import moment from 'moment'
import Markdown from 'react-markdown'

const Message = ({ message }) => {
  return (
    <div>
      {message.role === "user" ? (
        <div className='flex items-start justify-end my-4 gap-2'>
          <div className='flex flex-col gap-2 p-2 px-4 bg-slate-50 border border-[#80609F]/30 rounded-md max-w-2xl'>
            <p className='text-sm'>{message.content}</p>
            <span className='text-xs text-gray-400'>{moment(message.timestamp).fromNow()}</span>
          </div>
          <img src={assets.user_icon} className='w-8 h-8 rounded-full' alt="" />
        </div>
      )
        :
        (
          <div className='inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-[#fbf9f7] border border-[#80609F]/30 rounded-md my-4'>
            <div className='text-sm reset-tw'><Markdown>{message.content}</Markdown></div>
            <span className='text-xs text-gray-400'>{moment(message.timestamp).fromNow()}</span>
          </div>
        )}
    </div>
  )
}

export default Message