"use client";
import { useFetch } from "@/lib/fetchHelper";
import Spinner from "../ui/spinner";
import { Separator } from "@/components/ui/separator";
import EachDrum from "./eachDrum";
import { useState } from "react";
import { drumPhase } from "@/lib/globalState";

export default function CcDrum() {
  const phase = drumPhase((state) => state.default);
  const phase1 = drumPhase((state) => state.phase1);
  const phase2 = drumPhase((state) => state.phase2);

  const { data, error, isLoading } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/drums`
  );

  const inches = [
    { id: 1, inch: 13 },
    { id: 2, inch: 14 },
    { id: 3, inch: 15 },
    { id: 4, inch: 16 },
    { id: 5, inch: 17 },
    { id: 6, inch: 18 },
    { id: 7, inch: 19 },
    { id: 8, inch: 20 },
  ];

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  return (
    <main className="flex flex-col gap-5 w-full h-full bg-zinc-100 p-5">
      <div className="flex gap-3 bg-zinc-50 -m-5 px-5 py-2 sticky top-[62px] justify-between items-center z-10 border-b">
        <div className="flex gap-3 bg-zinc-50 py-0.5 sticky top-[90px] z-10 items-center">
          <p className="text-xl font-semibold mr-3">Carcass Drum</p>
          <button
            onClick={phase1}
            className={`${
              phase == "Phase 1"
                ? "bg-zinc-950 text-white"
                : "text-zinc-300 hover:text-zinc-600"
            } border px-3 py-1 rounded-md`}
          >
            Phase 1
          </button>
          <button
            onClick={phase2}
            className={`${
              phase == "Phase 2"
                ? "bg-zinc-950 text-white"
                : "text-zinc-300 hover:text-zinc-600"
            } border px-3 py-1 rounded-md`}
          >
            Phase 2
          </button>
        </div>
        <div className="flex gap-3">
          <p className="bg-green-200 px-3 py-0.5 rounded-full text-xs text-green-600">
            OK
          </p>
          <p className="bg-amber-200 px-3 py-0.5 rounded-full text-xs text-amber-600">
            Prepared to clean
          </p>
          <p className="bg-red-200 px-3 py-0.5 rounded-full text-xs text-red-600">
            Change immidiately
          </p>
        </div>
      </div>

      <p className="text-2xl font-bold mt-5">PCR</p>
      <div className="grid grid-cols-8 gap-5">
        {inches.map((inch) => (
          <div key={inch.id} className="flex flex-col gap-5">
            <p className="font-semibold">Inch {inch.inch}</p>
            <div className="grid gap-2">
              {data
                .filter(
                  (drum) =>
                    drum.rim == inch.inch &&
                    drum.type == "PCR" &&
                    drum.phase == phase
                )
                .map((drum) => (
                  <EachDrum key={drum.id_drum} id_drum={drum.id_drum} />
                ))}
            </div>
          </div>
        ))}
      </div>
      <Separator />
      <p className="text-2xl font-semibold">LTR</p>
      <div className="grid grid-cols-8 gap-5">
        {inches.map((inch) => (
          <div key={inch.id} className="flex flex-col gap-5">
            <p className="font-semibold">Inch {inch.inch}</p>
            <div className="grid gap-2">
              {data
                .filter(
                  (drum) =>
                    drum.rim == inch.inch &&
                    drum.type == "LTR" &&
                    drum.phase == phase
                )
                .map((drum) => (
                  <EachDrum key={drum.id_drum} id_drum={drum.id_drum} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
