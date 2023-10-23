import Request from "@/components/page/request/request";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/");
  }

  return (
    <div>
      <Request />
    </div>
  );
}
