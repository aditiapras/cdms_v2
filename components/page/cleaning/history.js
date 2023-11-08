"use client";
import { Button } from "@/components/ui/button";
import Change from "./change";
import Cleaning from "./cleaning";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function HistoryCleaning() {
  const params = useSearchParams();
  const router = useRouter();

  return (
    <div className="flex flex-col w-full bg-zinc-50 h-full z-10">
      <div className="flex w-full gap-5 items-center border px-5 py-2 bg-white sticky top-14 z-10">
        <p className="font-semibold text-xl">History</p>
        <Button
          onClick={() => router.replace("/dashboard/history")}
          variant={!params.get("page") ? "" : "outline"}
        >
          Change
        </Button>
        <Button
          onClick={() => router.replace("/dashboard/history?page=cleaning")}
          variant={params.get("page") == "cleaning" ? "" : "outline"}
        >
          Cleaning
        </Button>
      </div>
      <div className="w-full flex flex-col p-5">
        {!params.get("page") && <Change />}
        {params.get("page") == "cleaning" && <Cleaning />}
      </div>
    </div>
  );
}
