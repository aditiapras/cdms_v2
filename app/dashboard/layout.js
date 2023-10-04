import React from "react";
import DashboardSession from "@/components/dashboard/dashboard-session";

export default function Layout({ children }) {
  return (
    <div>
      <DashboardSession components={children} />
    </div>
  );
}
