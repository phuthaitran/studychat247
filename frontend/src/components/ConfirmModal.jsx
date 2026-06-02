import React from "react";
import { IoClose } from "react-icons/io5";
import "./ConfirmModal.css"

/**
 * A reusable confirmation modal component.
 *
 * Props:
 * - isOpen       {boolean}  – Whether the modal is visible.
 * - onClose      {function} – Called when the backdrop or close button is clicked.
 * - onConfirm    {function} – Called when the confirm (danger) button is clicked.
 * - title        {string}   – Modal heading text.
 * - message      {string}   – Body message text.
 * - confirmLabel {string}   – Label for the confirm button (default: "Confirm").
 * - cancelLabel  {string}   – Label for the cancel button (default: "Cancel").
 */
const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm",
  message = "Are you sure?",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
}) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="confirm-modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="confirm-modal__bg"
      >
        <div className="modal-prompt">
          <h2 className="modal-header">{title}</h2>
          <p className="modal-info">{message}</p>
        </div>
        <div className="modal-selection">
          <button className="danger-button" onClick={onConfirm}>
            {confirmLabel}
          </button>
          <button className="cancel-button" onClick={onClose}>
            {cancelLabel}
          </button>
        </div>
        <button className="modal-close-button" onClick={onClose} aria-label="Close modal">
          <IoClose size={30} />
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
