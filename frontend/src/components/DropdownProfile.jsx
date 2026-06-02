import { React, useState } from "react";
import "./Sidebar.css"

const DropdownProfile = () => {
  return (
    <div className="flex flex-col dropdown-profile">
      <ul className="flex flex-col gap-4">
        <li className="hover:underline cursor-pointer">Edit Profile</li>
        <li className="text-red-500 hover:underline cursor-pointer">Log out</li>
      </ul>
    </div>
  )
}

export default DropdownProfile;