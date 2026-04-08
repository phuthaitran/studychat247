import React, { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import ChatBox from './components/ChatBox'
import History from './pages/History'
import Math from './pages/Math'
import "./App.css"
import Sidebar from './components/Sidebar'
import { assets } from './assets/assets'

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className='home'>
        <div className='home__nav'>
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <Routes>
            <Route path='/' element={<ChatBox setIsSidebarOpen={setIsSidebarOpen} />} />
            <Route path='/history' element={<History />} />
            <Route path='/math' element={<Math />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App