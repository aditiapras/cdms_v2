"use client";
import CarcassDrum from "./drum";
import { useFetch } from "@/lib/fetcher/fetchHelper";
import Spinner from "../../ui/spinner";
import { machinePhase } from "@/lib/global-state/globalState";
import { Button } from "@/components/ui/button";

export default function Monitoring() {
  const phase = machinePhase((state) => state.default);
  const phase1 = machinePhase((state) => state.phase1);
  const phase2 = machinePhase((state) => state.phase2);

  const { data, error, isLoading, mutate } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/monitoring`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  return (
    <main className="flex flex-col h-full">
      <div className="flex items-center justify-between w-full px-5 py-2 border-b bg-zinc-50">
        <div className="flex items-center gap-5">
          <p className="font-semibold text-xl">Monitoring</p>
          <Button
            onClick={phase1}
            variant={phase == "Phase 1" ? "" : "outline"}
          >
            Phase 1
          </Button>
          <Button
            onClick={phase2}
            variant={phase == "Phase 2" ? "" : "outline"}
          >
            Phase 2
          </Button>
        </div>
        <p className="px-2 bg-emerald-500 text-white font-medium">OE Size</p>
      </div>
      <div className="grid grid-cols-5 gap-5 w-full p-5 bg-zinc-100 h-full">
        {data
          .filter((drum) => drum.phase == phase)
          .map((drum) => (
            <div key={drum.building_mc} className="flex flex-col gap-2">
              <p
                className={`${
                  drum.building_mc == "H1305" ||
                  drum.building_mc == "H1502" ||
                  drum.building_mc == "H1601" ||
                  drum.building_mc == "H1603" ||
                  drum.building_mc == "H1701" ||
                  drum.building_mc == "H1703" ||
                  drum.building_mc == "H1704" ||
                  drum.building_mc == "H1705" ||
                  drum.building_mc == "H1801" ||
                  drum.building_mc == "H1804" ||
                  drum.building_mc == "H1805"
                    ? "bg-emerald-500 font-medium w-fit px-2 text-white"
                    : "font-semibold"
                }`}
              >
                {drum.building_mc}
              </p>
              <div className="flex flex-col gap-1">
                <CarcassDrum drum={drum.id_left} mesin={drum.building_mc} />
                <CarcassDrum drum={drum.id_right} mesin={drum.building_mc} />
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
