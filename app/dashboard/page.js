import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-full bg-zinc-100">
      <p className="text-4xl">
        Welcome back,{" "}
        <span className="font-bold">{session?.user?.username}</span>
      </p>
      <p className="mt-20 text-xs text-zinc-400">
        Copyright © 2023 Hankook Tire Indonesia
      </p>
    </div>
  );
}
