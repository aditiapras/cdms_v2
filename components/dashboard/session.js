"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function DashboardSession() {
  const { data: session } = useSession();
  console.log(session);
  return <div>DashboardSession</div>;
}
