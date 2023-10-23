import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddForm from "./form";
import Link from "next/link";
export const dynamic = "force-dynamic";
export default async function AddCCDrum() {
  const session = getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="p-5 bg-zinc-100 h-full flex flex-col items-center justify-center gap-10">
      <div className="w-[400px] flex items-center justify-start -mb-7 hover:text-blue-600 font-semibold text-sm">
        <Link href={"/dashboard/drums"} className="w-full">
          ← Back
        </Link>
      </div>
      <div className="flex flex-col border w-[400px] gap-5 rounded-md px-7 py-10 bg-white">
        <p className="text-xl font-bold">Add new C/C Drum</p>
        <AddForm />
      </div>
      <p className="text-xs text-zinc-500">
        Copyright © 2023 Hankook Tire Indonesia
      </p>
    </div>
  );
}
