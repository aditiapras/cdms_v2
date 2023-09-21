import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Monitoring from "@/components/monitoring/monitoring";
import InputNaik from "@/components/input/input";
import CcDrum from "@/components/ccdrum/ccdrum";
import HistoryCleaning from "@/components/cleaning/history";

export default async function DynamicDash({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      {params.pageId == "monitoring" ? (
        <Monitoring />
      ) : params.pageId == "input" ? (
        <InputNaik />
      ) : params.pageId == "drums" ? (
        <CcDrum />
      ) : params.pageId == "history" ? (
        <HistoryCleaning />
      ) : (
        params.pageId
      )}
    </div>
  );
}
