"use client";
import CarcassDrum from "./drum";
import { useFetch } from "@/lib/fetchHelper";
import Spinner from "../ui/spinner";

export default function Monitoring() {
  const { data, error, isLoading } = useFetch(
    `http://localhost:3000/api/cdms/monitoring`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  return (
    <main className="flex flex-col h-full">
      <div className="flex justify-between w-full p-5 border-b bg-zinc-50">
        <p className="font-semibold">Monitoring</p>
        <select name="phase" id="phase" className="bg-zinc-50">
          <option value="Phase 1">Phase 1</option>
          <option value="Phase 2">Phase 2</option>
        </select>
      </div>
      <div className="grid grid-cols-5 gap-5 w-full p-5 bg-zinc-100 h-full">
        {data.map((drum) => (
          <div key={drum.building_mc} className="flex flex-col gap-2">
            <p className="font-semibold">{drum.building_mc}</p>
            <div className="flex flex-col gap-0.5">
              <CarcassDrum drum={drum.id_left} />
              <CarcassDrum drum={drum.id_right} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
