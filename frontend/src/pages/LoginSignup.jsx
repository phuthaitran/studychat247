import React, { useState } from "react";
import './LoginSignup.css'

import { LuGraduationCap } from "react-icons/lu";

const LoginSignup = () => {

  const [activeForm, setActiveForm] = useState('login');

  return (
    <div className="container">
      <div className="login-logo">
        <div className="login-logo-icon">
          <LuGraduationCap />
        </div>
        <span className="login-logo-text">StudyChat247</span>
      </div>
      {activeForm === 'login' && (
        <div className="form-box active">
          <form className="form-box__input">
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit" name="login">Login</button>
            <p>Don't have an account? <a href="#" onClick={() => setActiveForm('register')}>Register</a></p>
          </form>
        </div>
      )}

      {activeForm === 'register' && (
        <div className="form-box active">
          <form className="form-box__input">
            <h2>Register</h2>
            <input type="username" name="username" placeholder="Username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit" name="login">Login</button>
            <p>Already have an account? <a href="#" onClick={() => setActiveForm('login')}>Login</a></p>
          </form>
        </div>
      )}
    </div>
  )
}

export default LoginSignup;