import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Monitoring from "@/components/monitoring/monitoring";
import InputNaik from "@/components/input/input";

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
      ) : (
        params.pageId
      )}
    </div>
  );
}
