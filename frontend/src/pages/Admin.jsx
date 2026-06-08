import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import "./Admin.css"
import { LuGraduationCap } from "react-icons/lu";
import ConfirmModal from "../components/ConfirmModal";
import UserCreateForm from "../components/UserCreateForm";
import UserEditAdminForm from "../components/UserEditAdminForm";
import { useAppContext } from "../context/AppContext";
import { registerUser } from "../api/authApi";
import { getUsers, updateUser, deleteUser } from "../api/userApi";
import { triggerIngestion } from "../api/adminApi";

const Admin = () => {
  const { logout, user } = useAppContext();

  // ── User list ──────────────────────────────────────────────────────────────
  const [users, setUsers] = useState([]);
  const [listLoading, setListLoading] = useState(false);

  const fetchUsers = async () => {
    setListLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch {
      toast.error("Failed to load users.");
    } finally {
      setListLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ── Logout ─────────────────────────────────────────────────────────────────
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleLogout = async () => {
    setLogoutModalOpen(false);
    await logout();
  };

  // ── Textbook section - Update Knowledgebase ────────────────────────────────
  const [kbUpdateConfirmModal, setKbUpdateConfirmModal] = useState(false);
  const [kbLoading, setKbLoading] = useState(false);
  const [kbStatus, setKbStatus] = useState(null); // { ok: bool, message: string }

  const handleKbUpdate = async () => {
    setKbUpdateConfirmModal(false);
    setKbLoading(true);
    setKbStatus(null);
    try {
      const message = await triggerIngestion();
      setKbStatus({ ok: true, message });
    } catch (err) {
      const detail = err.response?.data?.detail ?? "An unexpected error occurred.";
      setKbStatus({ ok: false, message: detail });
    } finally {
      setKbLoading(false);
    }
  };

  // ── Add Account ────────────────────────────────────────────────────────────
  const [createFormOpen, setCreateFormOpen] = useState(false);
  const [pendingCreateData, setPendingCreateData] = useState(null);
  const [confirmCreateOpen, setConfirmCreateOpen] = useState(false);
  const [createApiError, setCreateApiError] = useState("");
  const [createLoading, setCreateLoading] = useState(false);

  // Called by UserCreateForm after local validation passes
  const handleCreateSubmit = (formData) => {
    setPendingCreateData(formData);
    setConfirmCreateOpen(true);
  };

  // Called when the admin confirms the create modal
  const handleCreateConfirm = async () => {
    if (!pendingCreateData) return;
    setCreateLoading(true);
    try {
      const { username, email, password, confirmPassword, role } = pendingCreateData;
      await registerUser(username, email, password, confirmPassword, role);
      toast.success(`Account "${username}" created successfully.`);
      setConfirmCreateOpen(false);
      setCreateFormOpen(false);
      setPendingCreateData(null);
      setCreateApiError("");
      fetchUsers();
    } catch (err) {
      const detail = err.response?.data?.detail;
      setCreateApiError(detail || "Failed to create account.");
      setConfirmCreateOpen(false); // Close confirm, keep form open to show error
    } finally {
      setCreateLoading(false);
    }
  };

  const handleCreateClose = () => {
    setCreateFormOpen(false);
    setPendingCreateData(null);
    setCreateApiError("");
  };

  // ── Edit Account ───────────────────────────────────────────────────────────
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [pendingEditData, setPendingEditData] = useState(null);
  const [confirmEditOpen, setConfirmEditOpen] = useState(false);
  const [editApiError, setEditApiError] = useState("");
  const [editLoading, setEditLoading] = useState(false);

  const handleEditOpen = (selectedUser) => {
    setUserToEdit(selectedUser);
    setEditApiError("");
    setEditFormOpen(true);
  };

  // Called by UserEditAdminForm after local validation passes
  const handleEditSubmit = (formData) => {
    setPendingEditData(formData);
    setConfirmEditOpen(true);
  };

  // Called when the admin confirms the edit modal
  const handleEditConfirm = async () => {
    if (!userToEdit || !pendingEditData) return;
    setEditLoading(true);
    try {
      const { username, email, role } = pendingEditData;
      await updateUser(userToEdit.id, { username, email, role });
      toast.success(`Account "${username}" updated successfully.`);
      setConfirmEditOpen(false);
      setEditFormOpen(false);
      setUserToEdit(null);
      setPendingEditData(null);
      setEditApiError("");
      fetchUsers();
    } catch (err) {
      const detail = err.response?.data?.detail;
      setEditApiError(detail || "Failed to update account.");
      setConfirmEditOpen(false); // Close confirm, keep form open to show error
    } finally {
      setEditLoading(false);
    }
  };

  const handleEditClose = () => {
    setEditFormOpen(false);
    setUserToEdit(null);
    setPendingEditData(null);
    setEditApiError("");
  };

  // ── Delete Account ─────────────────────────────────────────────────────────
  const [userToDelete, setUserToDelete] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDeleteConfirm = async () => {
    if (!userToDelete) return;
    setDeleteLoading(true);
    try {
      await deleteUser(userToDelete.id);
      toast.success(`Account "${userToDelete.username}" deleted.`);
      setUserToDelete(null);
      fetchUsers();
    } catch (err) {
      const detail = err.response?.data?.detail;
      toast.error(detail || "Failed to delete account.");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <>
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="dashboard-header">
        <div className="dashboard-header__logo">
          <div className="dashboard-header__logo--icon">
            <LuGraduationCap />
          </div>
          <span className="dashboard-header__logo--text">StudyChat247 ADMIN PANEL</span>
        </div>
        <div className="dashboard-header__right">
          <span>Xin chào, {user.username}</span>
          <button className="dashboard-header__logout" onClick={() => setLogoutModalOpen(true)}>Log out</button>
        </div>
      </div>

      {/* ── Textbooks section ──────────────────────────────────────────────── */}
      <div className="dashboard-textbooks">
        <h1>Database management:</h1>
        <h2>Add or remove the books in "data" folder, then click on this button: </h2>
        <button
          className="kb-update-button"
          onClick={() => setKbUpdateConfirmModal(true)}
          disabled={kbLoading}
        >
          Update Knowledgebase
        </button>
        {kbLoading && (
          <p className="kb-status kb-status--loading">
            ⏳ Updating knowledgebase, please wait…
          </p>
        )}
        {!kbLoading && kbStatus && (
          <p className={`kb-status ${kbStatus.ok ? "kb-status--success" : "kb-status--error"}`}>
            {kbStatus.ok ? "✅" : "❌"} {kbStatus.message}
          </p>
        )}
      </div>

      {/* ── User Management ────────────────────────────────────────────────── */}
      <div className="user-management">
        <div className="user-management-header">
          <h1>User Management: </h1>
          <button className="add-user-button" onClick={() => setCreateFormOpen(true)}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            Add Account
          </button>
        </div>

        {/* User list table */}
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
            {listLoading ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "1.5rem" }}>Loading...</td>
              </tr>
            ) : (
              users.map((u) => {
                const displayRole = u.roles?.[0] ?? "user";
                return (
                  <tr key={u.id}>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>
                      <span className={`role-badge role-badge--${displayRole}`}>
                        {displayRole}
                      </span>
                    </td>
                    <td className="action-cell">
                      <button className="btn-edit" onClick={() => handleEditOpen(u)}>Edit</button>
                      <button className="btn-delete" onClick={() => setUserToDelete(u)}>Delete</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* ── Modals (all rendered outside the table) ────────────────────────── */}

      {/* Logout confirm */}
      <ConfirmModal
        isOpen={logoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
        onConfirm={handleLogout}
        title="Log out"
        message="Are you sure you want to log out?"
        confirmLabel="Log out"
        cancelLabel="Cancel"
        isDanger={true}
      />

      {/* Update Knowledgebase confirm */}
      <ConfirmModal
        isOpen={kbUpdateConfirmModal}
        onClose={() => setKbUpdateConfirmModal(false)}
        onConfirm={handleKbUpdate}
        title="Update Knowledgebase"
        message="Are you sure you want to update the knowledgebase? This action cannot be undone"
        confirmLabel="Update"
        cancelLabel="Cancel"
      />

      {/* Add Account form */}
      <UserCreateForm
        isOpen={createFormOpen}
        onClose={handleCreateClose}
        onSubmit={handleCreateSubmit}
        title="Add Account"
        confirmLabel="Create account"
        cancelLabel="Cancel"
        apiError={createApiError}
      />

      {/* Add Account confirmation */}
      <ConfirmModal
        isOpen={confirmCreateOpen}
        onClose={() => setConfirmCreateOpen(false)}
        onConfirm={handleCreateConfirm}
        title="Create account"
        message={`Create new account "${pendingCreateData?.username}" with role "${pendingCreateData?.role}"?`}
        confirmLabel={createLoading ? "Creating..." : "Create"}
        cancelLabel="Cancel"
      />

      {/* Edit Account form */}
      <UserEditAdminForm
        isOpen={editFormOpen}
        onClose={handleEditClose}
        onSubmit={handleEditSubmit}
        user={userToEdit}
        title="Edit Account"
        confirmLabel="Save changes"
        cancelLabel="Cancel"
        apiError={editApiError}
      />

      {/* Edit Account confirmation */}
      <ConfirmModal
        isOpen={confirmEditOpen}
        onClose={() => setConfirmEditOpen(false)}
        onConfirm={handleEditConfirm}
        title="Save changes"
        message={`Save changes to "${pendingEditData?.username}"?`}
        confirmLabel={editLoading ? "Saving..." : "Save"}
        cancelLabel="Cancel"
      />

      {/* Delete Account confirmation */}
      <ConfirmModal
        isOpen={!!userToDelete}
        onClose={() => setUserToDelete(null)}
        onConfirm={handleDeleteConfirm}
        title="Delete account"
        message={`Are you sure you want to delete "${userToDelete?.username}"? This cannot be undone.`}
        confirmLabel={deleteLoading ? "Deleting..." : "Delete"}
        cancelLabel="Cancel"
        isDanger={true}
      />
    </>
  );
};

export default Admin;