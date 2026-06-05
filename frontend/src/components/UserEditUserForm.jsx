import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "./UserCreateForm.css"

/**
 * UserEditAdminForm — Modal form for editing an existing user account (admin use).
 *
 * Props:
 * - isOpen        {boolean}   – Whether the modal is visible.
 * - onClose       {function}  – Called when the form is dismissed (resets state).
 * - onSubmit      {function}  – Called with { username, email, role } after local validation passes.
 *                               The parent is responsible for showing a confirmation modal before
 *                               calling the API.
 * - user          {object}    – The user being edited: { id, username, email, roles }.
 *                               Used to pre-populate the form fields.
 * - title         {string}    – Modal heading.
 * - confirmLabel  {string}    – Label for the submit button.
 * - cancelLabel   {string}    – Label for the cancel button.
 * - apiError      {string}    – Error message returned from the API (shown below the form).
 */
const UserEditAdminForm = ({
  isOpen,
  onClose,
  onSubmit,
  user,
  title = "Edit Profile",
  confirmLabel = "Save changes",
  cancelLabel = "Cancel",
  apiError = "",
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Pre-fill form whenever the selected user changes
  useEffect(() => {
    if (user) {
      setUsername(user.username ?? "");
      setEmail(user.email ?? "");
    }
  }, [user]);

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !email) {
      setError("Username and email are required.");
      return;
    }

    onSubmit({ username, email });
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
            <label>Username</label>
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

export default UserEditAdminForm;