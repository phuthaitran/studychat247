import React, { useState } from "react";
import toast from "react-hot-toast";
import "./Sidebar.css"
import ConfirmModal from "./ConfirmModal";
import UserEditUserForm from "./UserEditUserForm";
import { useAppContext } from "../context/AppContext";
import { updateUser } from "../api/userApi";

const DropdownProfile = () => {
  const { logout, user, setUser } = useAppContext();

  // ── Edit Profile ───────────────────────────────────────────────────────────
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [pendingEditData, setPendingEditData] = useState(null);
  const [confirmEditOpen, setConfirmEditOpen] = useState(false);
  const [editApiError, setEditApiError] = useState("");
  const [editLoading, setEditLoading] = useState(false);

  // Called by UserEditUserForm after local validation passes
  const handleEditSubmit = (formData) => {
    setPendingEditData(formData);
    setConfirmEditOpen(true);
  };

  // Called when admin confirms the edit modal
  const handleEditConfirm = async () => {
    if (!user || !pendingEditData) return;
    setEditLoading(true);
    try {
      const { username, email } = pendingEditData;
      const updatedUser = await updateUser(user.id, { username, email });
      // Update the user in context so the UI reflects the new info immediately
      setUser(updatedUser);
      toast.success("Thay đổi thông tin thành công.");
      setConfirmEditOpen(false);
      setEditFormOpen(false);
      setPendingEditData(null);
      setEditApiError("");
    } catch (err) {
      const detail = err.response?.data?.detail;
      setEditApiError(detail || "Không thể thay đổi thông tin.");
      setConfirmEditOpen(false); // Close confirm, keep form open to show error
    } finally {
      setEditLoading(false);
    }
  };

  const handleEditClose = () => {
    setEditFormOpen(false);
    setPendingEditData(null);
    setEditApiError("");
  };

  // ── Logout ─────────────────────────────────────────────────────────────────
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleLogout = async () => {
    setIsLogoutOpen(false);
    await logout();
  };

  return (
    <div className="flex flex-col dropdown-profile">
      <ul className="flex flex-col gap-4">
        <li className="hover:underline cursor-pointer" onClick={() => setEditFormOpen(true)}>Sửa thông tin cá nhân</li>
        <li className="text-red-500 hover:underline cursor-pointer" onClick={() => setIsLogoutOpen(true)}>Đăng xuất</li>
      </ul>

      {/* Edit Profile form */}
      <UserEditUserForm
        isOpen={editFormOpen}
        onClose={handleEditClose}
        onSubmit={handleEditSubmit}
        user={user}
        title="Cập nhật tài khoản"
        confirmLabel="Lưu thay đỏi"
        cancelLabel="Huỷ"
        apiError={editApiError}
      />

      {/* Edit Profile confirmation */}
      <ConfirmModal
        isOpen={confirmEditOpen}
        onClose={() => setConfirmEditOpen(false)}
        onConfirm={handleEditConfirm}
        title="Cập nhật tài khoản"
        message={`Thay đổi thông tin cá nhân của "${pendingEditData?.username}"?`}
        confirmLabel={editLoading ? "Đang thay đổi..." : "Lưu thay đổi"}
        cancelLabel="Huỷ"
      />

      {/* Logout modal */}
      <ConfirmModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleLogout}
        title="Đăng xuất"
        message="Bạn có muốn đăng xuất tài khoản?"
        confirmLabel="Đăng xuất"
        cancelLabel="Huỷ"
        isDanger={true}
      />
    </div>
  );
};

export default DropdownProfile;