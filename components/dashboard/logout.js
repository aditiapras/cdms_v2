"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <div>
      <button onClick={() => signOut()} className="border p-2">
        Sign out
      </button>
    </div>
  );
}
