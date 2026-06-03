import React, { useState } from "react";
import "./Sidebar.css"
import ConfirmModal from "./ConfirmModal";
import { useAppContext } from "../context/AppContext";

const DropdownProfile = () => {
  const { logout } = useAppContext();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleLogout = async () => {
    setIsLogoutOpen(false);
    await logout(); // Calls API, clears state, navigates to /login
  };

  return (
    <div className="flex flex-col dropdown-profile">
      <ul className="flex flex-col gap-4">
        <li className="hover:underline cursor-pointer">Edit Profile</li>
        <li className="text-red-500 hover:underline cursor-pointer" onClick={() => setIsLogoutOpen(true)}>Log out</li>
      </ul>
      {/* Logout modal */}
      <ConfirmModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleLogout}
        title="Log out"
        message="Are you sure you want to log out?"
        confirmLabel="Log out"
        cancelLabel="Cancel"
      />
    </div>
  );
};

export default DropdownProfile;