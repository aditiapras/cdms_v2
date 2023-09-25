"use client";
import CarcassDrum from "./drum";
import { useFetch } from "@/lib/fetchHelper";
import Spinner from "../ui/spinner";
import { useState } from "react";

export default function Monitoring() {
  const { data, error, isLoading } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/monitoring`
  );

  const [phase, setPhase] = useState("Phase 1");

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  return (
    <main className="flex flex-col h-full">
      <div className="flex items-center gap-5 w-full p-5 border-b bg-zinc-50">
        <p className="font-semibold">Monitoring</p>
        <select
          name="phase"
          id="phase"
          className="bg-zinc-100 hover:bg-zinc-200 p-2 rounded-md transition duration-200"
          onChange={(e) => setPhase(e.target.value)}
        >
          <option value="Phase 1">Phase 1</option>
          <option value="Phase 2">Phase 2</option>
        </select>
      </div>
      <div className="grid grid-cols-5 gap-5 w-full p-5 bg-zinc-100 h-full">
        {data
          .filter((drum) => drum.phase == phase)
          .map((drum) => (
            <div key={drum.building_mc} className="flex flex-col gap-2">
              <p className="font-semibold">{drum.building_mc}</p>
              <div className="flex flex-col gap-0.5">
                <CarcassDrum drum={drum.id_left} mesin={drum.building_mc} />
                <CarcassDrum drum={drum.id_right} mesin={drum.building_mc} />
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
