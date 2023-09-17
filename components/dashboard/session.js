"use client";

import { useSession } from "next-auth/react";
import { BiSolidDashboard } from "react-icons/bi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { AiOutlineClear } from "react-icons/ai";
import { GiOilDrum } from "react-icons/gi";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import Link from "next/link";
import Logout from "./logout";
import { usePathname } from "next/navigation";

export default function DashboardSession({ components }) {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <main className="flex w-full min-h-screen">
      <div className="flex flex-col gap-5 w-20 border-r p-4 max-h-screen sticky top-0 z-10">
        <div className="flex flex-col h-full gap-5 items-center">
          <Link
            href={"/dashboard"}
            className="flex items-center bg-zinc-200 rounded-md p-2 hover:bg-zinc-300"
          >
            <BiSolidDashboard
              className={`${
                pathname === "/dashboard" ? "text-blue-600" : "text-zinc-400"
              } text-4xl`}
            ></BiSolidDashboard>
          </Link>
          <Link
            href={"/dashboard/input"}
            className="flex items-center bg-zinc-200 rounded-md p-2 hover:bg-zinc-300"
          >
            <BsFileEarmarkPlusFill
              className={`${
                pathname === "/dashboard/input"
                  ? "text-blue-600"
                  : "text-zinc-400"
              } text-4xl`}
            ></BsFileEarmarkPlusFill>
          </Link>
          <Link
            href={"/dashboard/monitoring"}
            className="flex items-center bg-zinc-200 rounded-md p-2 hover:bg-zinc-300"
          >
            <TbHeartRateMonitor
              className={`${
                pathname === "/dashboard/monitoring"
                  ? "text-blue-600"
                  : "text-zinc-400"
              } text-4xl`}
            ></TbHeartRateMonitor>
          </Link>
          <Link
            href={"/dashboard/drums"}
            className="flex items-center bg-zinc-200 rounded-md p-2 hover:bg-zinc-300"
          >
            <GiOilDrum
              className={`${
                pathname === "/dashboard/drums"
                  ? "text-blue-600"
                  : "text-zinc-400"
              } text-4xl`}
            ></GiOilDrum>
          </Link>
          <Link
            href={"/dashboard/historycleaning"}
            className="flex items-center bg-zinc-200 rounded-md p-2 hover:bg-zinc-300"
          >
            <FaHistory
              className={`${
                pathname === "/dashboard/historycleaning"
                  ? "text-blue-600"
                  : "text-zinc-400"
              } text-4xl`}
            ></FaHistory>
          </Link>
          <Link
            href={"/dashboard/clean-carcass"}
            className="flex items-center bg-zinc-200 rounded-md p-2 hover:bg-zinc-300"
          >
            <AiOutlineClear
              className={`${
                pathname === "/dashboard/clean-carcass"
                  ? "text-blue-600"
                  : "text-zinc-400"
              } text-4xl`}
            ></AiOutlineClear>
          </Link>
        </div>
        <Logout />
      </div>
      <div className="flex w-full flex-col">
        <div className="w-full h-16 shadow-md px-5 flex items-center justify-between sticky top-0 bg-white/60 backdrop-blur-md z-10">
          <p className="text-2xl font-semibold">Dashboard</p>
          <p className="text-xs bg-green-100 text-green-700 p-1 rounded-md">
            Logged in as:{" "}
            <span className="font-semibold">{session?.user?.username}</span>
          </p>
        </div>
        <div className="w-full flex flex-col h-full">{components}</div>
      </div>
    </main>
  );
}
