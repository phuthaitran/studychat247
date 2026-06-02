import React, { useState } from "react";
import './LoginSignup.css'

import { LuGraduationCap } from "react-icons/lu";
import { IoMdMail, IoMdKey, IoMdPerson } from "react-icons/io";

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
          <form className="form-box__inputs">
            <h2>Login</h2>
            <div className="form-box__input">
              <div className="form-box__icon">
                <IoMdMail />
              </div>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-box__input">
              <div className="form-box__icon">
                <IoMdKey />
              </div>
              <input type="password" name="password" placeholder="Password" required />
            </div>


            <button type="submit" name="login">Login</button>
            <p>Don't have an account? <a href="#" onClick={() => setActiveForm('register')}>Register</a></p>
          </form>
        </div>
      )}

      {activeForm === 'register' && (
        <div className="form-box active">
          <form className="form-box__inputs">
            <h2>Register</h2>
            <div className="form-box__input">
              <div className="form-box__icon"><IoMdPerson /></div>
              <input type="username" name="username" placeholder="Username" required />
            </div>
            <div className="form-box__input">
              <div className="form-box__icon"><IoMdMail /></div>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-box__input">
              <div className="form-box__icon"><IoMdKey /></div>
              <input type="password" name="password" placeholder="Password" required />
            </div>
            <button type="submit" name="login">Login</button>
            <p>Already have an account? <a href="#" onClick={() => setActiveForm('login')}>Login</a></p>
          </form>
        </div>
      )}
    </div>
  )
}

export default LoginSignup;