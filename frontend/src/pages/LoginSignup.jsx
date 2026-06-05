import React, { useState } from "react";
import toast from "react-hot-toast";
import './LoginSignup.css'

import { LuGraduationCap } from "react-icons/lu";
import { IoMdMail, IoMdKey, IoMdPerson } from "react-icons/io";
import { loginUser, registerUser } from "../api/authApi";
import { useAppContext } from "../context/AppContext";

const LoginSignup = () => {
  const { storeToken, fetchUser, navigate } = useAppContext();

  const [activeForm, setActiveForm] = useState('login');

  // ── Shared state ──────────────────────────────────────────────────────────
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ── Login form state ──────────────────────────────────────────────────────
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // ── Register form state ───────────────────────────────────────────────────
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('')

  // ── Switch forms ──────────────────────────────────────────────────────────
  const switchToLogin = () => {
    setActiveForm('login');
    setError('');
  };
  const switchToRegister = () => {
    setActiveForm('register');
    setError('');
  };

  // ── Login handler ─────────────────────────────────────────────────────────
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!loginEmail || !loginPassword) {
      setError('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    try {
      const { access_token } = await loginUser(loginEmail, loginPassword);
      storeToken(access_token);          // Write to both React state and tokenStore
      const userData = await fetchUser(); // GET /api/user/me

      if (userData) {
        const isAdmin = userData.roles?.includes('admin');
        navigate(isAdmin ? '/admin' : '/');
      }
    } catch (err) {
      const detail = err.response?.data?.detail;
      setError(detail || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // ── Register handler ──────────────────────────────────────────────────────
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    // Client-side validation
    if (!regUsername || !regEmail || !regPassword || !regConfirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (regPassword.length < 8 || regConfirmPassword.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setError('Passwords does not match');
      return
    }

    setIsLoading(true);
    try {
      await registerUser(regUsername, regEmail, regPassword, regConfirmPassword);
      toast.success('Account created! You can now log in.', {
        duration: 4000,
      });
      // Reset fields and go back to login form
      setRegUsername('');
      setRegEmail('');
      setRegPassword('');
      setRegConfirmPassword('')
      switchToLogin();
    } catch (err) {
      const detail = err.response?.data?.detail;
      setError(detail || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="login-logo">
        <div className="login-logo-icon">
          <LuGraduationCap />
        </div>
        <span className="login-logo-text">StudyChat247</span>
      </div>

      {/* ── Login form ─────────────────────────────────────────────────────── */}
      {activeForm === 'login' && (
        <div className="form-box active">
          <form className="form-box__inputs" onSubmit={handleLogin} noValidate>
            <h2>Login</h2>

            {/* Error message displayed right below the h2 */}
            {error && <p className="form-error">{error}</p>}

            <div className="form-box__input">
              <div className="form-box__icon">
                <IoMdMail />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-box__input">
              <div className="form-box__icon">
                <IoMdKey />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" name="login" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <p>Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToRegister(); }}>Register</a></p>
          </form>
        </div>
      )}

      {/* ── Register form ───────────────────────────────────────────────────── */}
      {activeForm === 'register' && (
        <div className="form-box active">
          <form className="form-box__inputs" onSubmit={handleRegister} noValidate>
            <h2>Register</h2>

            {/* Error message displayed right below the h2 */}
            {error && <p className="form-error">{error}</p>}

            <div className="form-box__input">
              <div className="form-box__icon"><IoMdPerson /></div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-box__input">
              <div className="form-box__icon"><IoMdMail /></div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-box__input">
              <div className="form-box__icon"><IoMdKey /></div>
              <input
                type="password"
                name="password"
                placeholder="Password (at least 8 characters)"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-box__input">
              <div className="form-box__icon"><IoMdKey /></div>
              <input
                type="password"
                name="confirm-password"
                placeholder="Confirm password"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" name="register" disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Register'}
            </button>
            <p>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); switchToLogin(); }}>Login</a></p>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;