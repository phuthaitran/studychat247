import React from "react";
import "./Admin.css"

import { LuGraduationCap } from "react-icons/lu";

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
  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-header__logo">
          <div className="dashboard-header__logo--icon">
            <LuGraduationCap />
          </div>
          <span className="dashboard-header__logo--text">StudyChat247 ADMIN PANEL</span>
        </div>
        <button>Log out</button>
      </div>

      <div className="dashboard-textbooks">
        <h1>Add or remove the books in "data" folder, then click on this button: </h1>
        <button>Update Knowledgebase</button>
        {/* Some text that will show database update status */}
      </div>

      <div className="user-management">
        <div className="user-management-header">
          <h1>User Management: </h1>
          <button><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> Add Account</button>
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
                  <button className="btn-delete">Delete</button>
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