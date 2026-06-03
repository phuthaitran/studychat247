import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import ChatBox from './components/ChatBox'
import LoginSignup from './pages/LoginSignup'
import Sidebar from './components/Sidebar'
import Admin from './pages/Admin'
import ProtectedRoute from './components/ProtectedRoute'
import { useAppContext } from './context/AppContext'

import "./App.css"

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, authLoading } = useAppContext();

  // Determine if the authenticated user is an admin.
  // user.roles is a flat string array e.g. ["admin"] (serialised by UserPublic schema).
  const isAdmin = user?.roles?.includes('admin') ?? false;

  return (
    <>
      {/* Toast notifications — top-right, default react-hot-toast style */}
      <Toaster position="top-right" />

      <div className='home'>
        <Routes>
          {/* ── Public route ─────────────────────────────────────── */}
          <Route
            path='/login'
            element={
              // If already logged in, bounce to the correct page
              !authLoading && user
                ? <Navigate to={isAdmin ? '/admin' : '/'} replace />
                : <LoginSignup />
            }
          />

          {/* ── User chat page ────────────────────────────────────── */}
          <Route
            path='/*'
            element={
              <ProtectedRoute requiredRole="user">
                <div className='home__nav'>
                  <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                  <Routes>
                    <Route path='/' element={<ChatBox setIsSidebarOpen={setIsSidebarOpen} />} />
                  </Routes>
                </div>
              </ProtectedRoute>
            }
          />

          {/* ── Admin panel ───────────────────────────────────────── */}
          <Route
            path='/admin'
            element={
              <ProtectedRoute requiredRole="admin">
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App