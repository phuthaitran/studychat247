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
      setError('Hãy điền đầy đủ thông tin.');
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
      setError(detail || 'Đăng nhập thất bại. Xin hãy thử lại.');
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
      setError('Hãy điền đầy đủ thông tin.');
      return;
    }
    if (regPassword.length < 8 || regConfirmPassword.length < 8) {
      setError('Mật khẩu phải có ít nhất 8 ký tự');
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setError('Mật khẩu không khớp.');
      return
    }

    setIsLoading(true);
    try {
      await registerUser(regUsername, regEmail, regPassword, regConfirmPassword);
      toast.success('Đăng ký thành công! Hãy đăng nhập.', {
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
      setError(detail || 'Đăng ký thất bại. Xin hãy thử lại.');
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
            <h2>Đăng nhập</h2>

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
                placeholder="Mật khẩu"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" name="login" disabled={isLoading}>
              {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
            <p>Chưa có tài khoản? <a href="#" onClick={(e) => { e.preventDefault(); switchToRegister(); }}>Đăng ký ngay</a></p>
          </form>
        </div>
      )}

      {/* ── Register form ───────────────────────────────────────────────────── */}
      {activeForm === 'register' && (
        <div className="form-box active">
          <form className="form-box__inputs" onSubmit={handleRegister} noValidate>
            <h2>Đăng ký</h2>

            {/* Error message displayed right below the h2 */}
            {error && <p className="form-error">{error}</p>}

            <div className="form-box__input">
              <div className="form-box__icon"><IoMdPerson /></div>
              <input
                type="text"
                name="username"
                placeholder="Tên tài khoản"
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
                placeholder="Mật khẩu (ít nhất 8 ký tự)"
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
                placeholder="Xác nhận mật khẩu"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" name="register" disabled={isLoading}>
              {isLoading ? 'Đang tạo tài khoản...' : 'Đăng ký'}
            </button>
            <p>Đã có tài khoản? <a href="#" onClick={(e) => { e.preventDefault(); switchToLogin(); }}>Đăng nhập</a></p>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;