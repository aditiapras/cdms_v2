"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

export default function Logout() {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="flex items-center bg-zinc-200 rounded-md p-2 hover:bg-zinc-300"
      >
        <FaSignOutAlt className="text-4xl text-zinc-400"></FaSignOutAlt>
      </button>
    </div>
  );
}
