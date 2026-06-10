import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./UserCreateForm.css"

/**
 * UserCreateForm — Modal form for creating a new user account (admin use).
 *
 * Props:
 * - isOpen        {boolean}   – Whether the modal is visible.
 * - onClose       {function}  – Called when the form is dismissed (resets state).
 * - onSubmit      {function}  – Called with { username, email, password, confirmPassword, role }
 *                               after local validation passes. The parent is responsible for
 *                               showing a confirmation modal before calling the API.
 * - title         {string}    – Modal heading.
 * - confirmLabel  {string}    – Label for the submit button.
 * - cancelLabel   {string}    – Label for the cancel button.
 * - apiError      {string}    – Error message returned from the API (shown below the form).
 */
const UserCreateForm = ({
  isOpen,
  onClose,
  onSubmit,
  title = "Add User",
  confirmLabel = "Create account",
  cancelLabel = "Cancel",
  apiError = "",
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRole("user");
    setError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password || !confirmPassword) {
      setError("Hãy điền đầy đủ thông tin.");
      return;
    }
    if (password.length < 8) {
      setError("Mật khẩu cần ít nhất 8 ký tự.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp.");
      return;
    }

    onSubmit({ username, email, password, confirmPassword, role });
  };

  if (!isOpen) return null;

  return (
    <div onClick={handleClose} className="user-form-modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="user-form-modal__bg"
      >
        <form onSubmit={handleSubmit} noValidate>
          <h2 className="user-form-modal__title">{title}</h2>

          <div className="user-form-modal__input">
            <label>Tên tài khoản</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="user-form-modal__input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="user-form-modal__input">
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="user-form-modal__input">
            <label>Xác nhận mật khẩu</label>
            <input
              type="password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="user-form-modal__input">
            <label>Vai trò</label>
            <select
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Validation error or API error */}
          {(error || apiError) && (
            <p className="user-form-modal__error">{error || apiError}</p>
          )}

          <div className="modal-selection">
            <button type="submit" className="confirm-button">{confirmLabel}</button>
            <button type="button" className="cancel-button" onClick={handleClose}>{cancelLabel}</button>
          </div>
        </form>
        <button className="modal-close-button" onClick={handleClose} aria-label="Close modal">
          <IoClose size={30} />
        </button>
      </div>
    </div>
  );
};

export default UserCreateForm;