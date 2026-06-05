import React from "react";
import { IoClose } from "react-icons/io5";
import "./UserCreateForm.css"

/* 
Create a user form for an admin to add or edit user, with: 
- user (string)
- email (string)
- password (string)
- role (a select dropdown between Admin and User)

Under that is two button:
- Create account / save changes (onClick: open the ConfirmModal)
- Cancel (close this modal)

The modal include a close button on the top right (using IoClose as the icon)
*/

const UserCreateForm = ({
  isOpen,
  onClose,
  onConfirm,
  title = "User",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
}) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="user-form-modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="user-form-modal__bg"
      >
        <form>
          <h2 className="user-form-modal__title">{title}</h2>
          <div className="user-form-modal__input">
            <label>Username</label>
            <input type="username" name="username" required />
          </div>
          <div className="user-form-modal__input">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="user-form-modal__input">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
          <div className="user-form-modal__input">
            <label>Confirm password</label>
            <input type="password" name="confirm-password" required />
          </div>
          <div className="user-form-modal__input">
            <label>Role</label>
            <select name="role" id="role">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="modal-selection">
            <button className="confirm-button" onClick={onConfirm}>{confirmLabel}</button>
            <button className="cancel-button" onClick={onClose}>{cancelLabel}</button>
          </div>
        </form>
        <button className="modal-close-button" onClick={onClose} aria-label="Close modal">
          <IoClose size={30} />
        </button>
      </div>
    </div>
  )
}

export default UserCreateForm;