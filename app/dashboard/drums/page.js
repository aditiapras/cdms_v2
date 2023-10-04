import CcDrum from "@/components/page/ccdrum/ccdrum";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <CcDrum />
    </div>
  );
}
