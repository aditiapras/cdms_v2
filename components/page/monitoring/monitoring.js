"use client";
import CarcassDrum from "./drum";
import { useFetch } from "@/lib/fetcher/fetchHelper";
import Spinner from "../../ui/spinner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Monitoring() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params =
    !searchParams.get("phase") || searchParams.get("phase") == "1"
      ? "Phase 1"
      : "Phase 2";
  const [phase, setPhase] = useState(params);

  const { data, error, isLoading } = useFetch(
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
            onClick={() => {
              setPhase(router.replace("/dashboard/monitoring"));
              params == "Phase 1" ? setPhase("Phase 2") : setPhase("Phase 1");
            }}
            variant={phase == "Phase 1" ? "" : "outline"}
          >
            Phase 1
          </Button>
          <Button
            onClick={() => {
              setPhase(router.replace("/dashboard/monitoring?phase=2"));
              params == "Phase 1" ? setPhase("Phase 2") : setPhase("Phase 1");
            }}
            variant={phase == "Phase 2" ? "" : "outline"}
          >
            Phase 2
          </Button>
        </div>
        <p className="px-2 bg-emerald-500 text-white font-medium rounded-full">
          OE Size
        </p>
      </div>
      <div className="grid grid-cols-5 gap-10 w-full p-5 bg-zinc-100 h-full">
        {data
          .filter((drum) => drum.phase == phase)
          .map((drum) => (
            <div key={drum.building_mc} className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
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
                      ? "bg-emerald-500 font-medium w-fit px-2 text-white rounded-full"
                      : "font-semibold"
                  }`}
                >
                  {drum.building_mc}
                </p>
                {drum.tub_width == 0 || drum.tub_width == null ? (
                  <></>
                ) : (
                  <p className="font-medium text-xs rounded-full bg-blue-200 px-2 text-zinc-950">
                    TUB: {drum.tub_width}
                  </p>
                )}
              </div>
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
