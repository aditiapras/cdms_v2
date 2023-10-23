import InputNaik from "@/components/page/input/input";
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
    <div className="h-full">
      <InputNaik />
    </div>
  );
}
