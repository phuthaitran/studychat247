import React, { useState } from "react";
import "./Admin.css"
import { LuGraduationCap } from "react-icons/lu";
import ConfirmModal from "../components/ConfirmModal";
import UserCreateForm from "../components/UserCreateForm";
import { useAppContext } from "../context/AppContext";

// Mock user list for admin view
const mockUsers = [
  {
    id: 1,
    username: "Admin",
    email: "admin@example.com",
    role: "admin"
  },
  {
    id: 2,
    username: "user1",
    email: "abcxyz123@gmail.com",
    role: "user"
  },
  {
    id: 3,
    username: "user2",
    email: "janedoe@hotmail.com",
    role: "user"
  }
]

const Admin = () => {
  const { logout, user } = useAppContext();
  const [isOpen, setIsOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const handleLogout = async () => {
    setIsOpen(false);
    await logout();
  };
  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-header__logo">
          <div className="dashboard-header__logo--icon">
            <LuGraduationCap />
          </div>
          <span className="dashboard-header__logo--text">StudyChat247 ADMIN PANEL</span>
        </div>
        <div className="dashboard-header__right">
          <span>Xin chào, {user.username}</span>
          <button className="dashboard-header__logout" onClick={() => setIsOpen(true)}>Log out</button>
        </div>

        {/* Logout modal */}
        <ConfirmModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={handleLogout}
          title="Log out"
          message="Are you sure you want to log out?"
          confirmLabel="Log out"
          cancelLabel="Cancel"
          isDanger={true}
        />
      </div>

      <div className="dashboard-textbooks">
        <h1>Database management:</h1>
        <h2>Add or remove the books in "data" folder, then click on this button: </h2>
        <button>Update Knowledgebase</button>
        {/* Some text that will show database update status */}
      </div>

      <div className="user-management">
        <div className="user-management-header">
          <h1>User Management: </h1>
          <button className="add-user-button" onClick={() => setIsFormOpen(true)}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            Add Account
          </button>
          <UserCreateForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            onConfirm={() => setIsFormOpen(false)}
            title="Add user"
            confirmLabel="Create user"
            cancelLabel="Cancel"
          />
        </div>

        {/* User list section with action buttons */}
        <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge role-badge--${user.role}`}>
                    {user.role}
                  </span>
                </td>
                <td className="action-cell">
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete" onClick={() => setSelectedUser(user)}>Delete</button>
                  {/* User delete confirm modal */}
                  <ConfirmModal
                    isOpen={selectedUser?.id === user.id}
                    onClose={() => setSelectedUser(null)}
                    onConfirm={() => setSelectedUser(null)}
                    title="Delete user"
                    message={`Are you sure you want to delete "${selectedUser?.username}"?`}
                    confirmLabel="Delete"
                    cancelLabel="Cancel"
                    isDanger={true}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Admin;