import Logout from "@/components/dashboard/logout";
import DashboardSession from "@/components/dashboard/session";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <DashboardSession />
      <Logout />
    </div>
  );
}
