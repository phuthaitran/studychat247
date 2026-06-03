import React, { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import ChatBox from './components/ChatBox'
import LoginSignup from './pages/LoginSignup'
import "./App.css"
import Sidebar from './components/Sidebar'
import Admin from './pages/Admin'
import { assets } from './assets/assets'

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className='home'>
        {/* Home page to chat with AI */}
        <Routes>
          <Route path='*' element={
            <div className='home__nav'>
              <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
              <Routes>
                <Route path='/' element={<ChatBox setIsSidebarOpen={setIsSidebarOpen} />} />
              </Routes>
            </div>
          } />
          {/* Login & Signup page */}
          <Route path='/login' element={<LoginSignup />} />
          {/* Admin page */}
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>

    </>
  )
}

export default App