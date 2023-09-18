"use client";
import { useFetch } from "@/lib/fetchHelper";
import Spinner from "../ui/spinner";
import { Separator } from "@/components/ui/separator";
import EachDrum from "./eachDrum";
import { useState } from "react";

export default function CcDrum() {
  const { data, error, isLoading } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api/cdms/drums`
  );

  const [phase, setPhase] = useState("Phase 1");

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
    <main className="flex flex-col gap-5 w-full h-full bg-zinc-50 p-5">
      <div className="flex gap-3 bg-zinc-50 -m-5 px-5 py-2 sticky top-[62px] justify-end z-10">
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
      <div className="flex gap-3 bg-zinc-50 py-2 sticky top-[90px] z-10">
        <select
          name="phase"
          id="phase"
          className="p-2 bg-zinc-100 hover:bg-zinc-200 transition duration-200 rounded-md"
          onChange={(e) => setPhase(e.target.value)}
        >
          <option value="Phase 1">Phase 1</option>
          <option value="Phase 2">Phase 2</option>
        </select>
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
