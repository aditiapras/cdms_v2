import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function DynamicDash({ params }) {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) {
    return redirect("/");
  }

  return <div>{params.pageId}</div>;
}
