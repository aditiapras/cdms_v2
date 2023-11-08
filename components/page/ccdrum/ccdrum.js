"use client";
import { useFetch } from "@/lib/fetcher/fetchHelper";
import Spinner from "../../ui/spinner";
import { Separator } from "@/components/ui/separator";
import { drumPhase } from "@/lib/global-state/globalState";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BsPlusLg } from "react-icons/bs";
import Link from "next/link";
import React from "react";
import moment from "moment-timezone";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
export default function CcDrum() {
  // const phase = drumPhase((state) => state.default);
  // const phase1 = drumPhase((state) => state.phase1);
  // const phase2 = drumPhase((state) => state.phase2);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params =
    !searchParams.get("phase") || searchParams.get("phase") == "1"
      ? "Phase 1"
      : "Phase 2";

  const [phase, setPhase] = useState(params);

  const { data, error, isLoading } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/drums`
  );

  const inchesPhase2 = [
    { id: 1, inch: 13 },
    { id: 2, inch: 14 },
    { id: 3, inch: 15 },
    { id: 4, inch: 16 },
    { id: 5, inch: 17 },
    { id: 6, inch: 18 },
    { id: 7, inch: 19 },
    { id: 8, inch: 20 },
    { id: 9, inch: 21 },
    { id: 10, inch: 22 },
  ];

  const inchesPhase1 = [
    { id: 1, inch: 13 },
    { id: 2, inch: 14 },
    { id: 3, inch: 15 },
    { id: 4, inch: 16 },
    { id: 5, inch: 17 },
    { id: 6, inch: 18 },
  ];

  const inch = phase == "Phase 1" ? inchesPhase1 : inchesPhase2;

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  return (
    <main className="flex flex-col gap-5 w-full h-full bg-zinc-100 p-5">
      <div className="flex gap-3 bg-zinc-50 -m-5 px-5 py-2 sticky top-[62px] justify-between items-center z-10 border-b">
        <div className="flex gap-3 bg-zinc-50 py-0.5 sticky top-[90px] z-10 items-center">
          <p className="text-xl font-semibold mr-3">Carcass Drum</p>
          <Button
            onClick={() => {
              setPhase(router.replace("/dashboard/drums"));
              params == "Phase 1" ? setPhase("Phase 2") : setPhase("Phase 1");
            }}
            variant={phase == "Phase 1" ? "" : "outline"}
          >
            Phase 1
          </Button>
          <Button
            onClick={() => {
              setPhase(router.replace("/dashboard/drums?phase=2"));
              params == "Phase 1" ? setPhase("Phase 2") : setPhase("Phase 1");
            }}
            variant={phase == "Phase 2" ? "" : "outline"}
          >
            Phase 2
          </Button>
        </div>
        <div className="flex gap-3">
          <Badge className="bg-green-200 text-green-600 hover:bg-green-300 hover:text-green-600">
            OK
          </Badge>
          <Badge className="bg-amber-200 text-amber-600 hover:bg-amber-300 hover:text-amber-600">
            Prepared to clean
          </Badge>
          <Badge className="bg-red-200 text-red-600 hover:bg-red-300 hover:text-red-600">
            Change immidiately
          </Badge>
        </div>
      </div>

      <Button asChild>
        <Link href="/dashboard/drums/add" className="w-fit mt-5 flex gap-2">
          <BsPlusLg /> Add New C/C Drum
        </Link>
      </Button>

      <p className="text-2xl font-bold mt-5">PCR</p>
      <div
        className={`grid  ${
          phase == "Phase 1" ? "grid-cols-8 gap-5" : "grid-cols-10 gap-5"
        }`}
      >
        {inch.map((inch) => {
          return (
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
                  .map((drum) => {
                    const age =
                      drum.status == "use"
                        ? moment()
                            .local()
                            .diff(moment(drum.date_naik).local(), "days") +
                          drum.age
                        : drum.age;
                    return (
                      <div key={drum.id_drum}>
                        {drum.status == "unuse" ? (
                          <Link
                            href={`/dashboard/drums/${drum.id_drum}`}
                            className={`${
                              age > 0 && age < 10
                                ? "bg-green-200 hover:bg-green-300"
                                : age >= 10 && age <= 14
                                ? "bg-amber-200 hover:bg-amber-300"
                                : age > 14
                                ? "bg-red-200 hover:bg-red-300"
                                : "bg-white hover:bg-zinc-100"
                            } flex justify-between h-12 items-center p-2 border rounded-md text-xs transition duration-200`}
                          >
                            <p className="">{drum.id_drum}</p>
                            <p className="">{age}</p>
                          </Link>
                        ) : (
                          <HoverCard openDelay={200} closeDelay={0}>
                            <HoverCardTrigger asChild>
                              <div
                                className={`${
                                  age > -1 && age < 10
                                    ? "bg-green-200 hover:bg-green-300"
                                    : age >= 10 && age <= 14
                                    ? "bg-amber-200 hover:bg-amber-300"
                                    : age > 14
                                    ? "bg-red-200 hover:bg-red-300"
                                    : "bg-white hover:bg-zinc-100"
                                } relative flex justify-between h-12 items-center p-2 border rounded-md text-xs transition duration-200`}
                              >
                                <p className="absolute -top-1 -left-1 text-[20px] text-emerald-500 animate-pulse">
                                  ◉
                                </p>
                                <p className="">{drum.id_drum}</p>
                                <p className="">{age}</p>
                              </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-72" align="start">
                              <div className="flex justify-between space-x-4">
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold">
                                    {drum.id_drum}
                                  </h4>
                                  <p className="text-xs">
                                    Mesin Building:{" "}
                                    <span className="font-semibold">
                                      {drum.building_mc}
                                    </span>
                                  </p>
                                  <p className="text-xs">
                                    Umur Pakai:{" "}
                                    <span className="font-semibold">
                                      {age} Hari
                                    </span>
                                  </p>
                                  <div className="flex items-center pt-2">
                                    <span className="text-xs text-muted-foreground">
                                      Tanggal Naik:{" "}
                                      {moment(drum.date_naik).format(
                                        "DD MMMM YYYY HH:mm"
                                      )}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
      <Separator />
      <p className="text-2xl font-semibold">LTR</p>
      <div
        className={`grid ${
          phase == "Phase 1" ? "grid-cols-8 gap-5" : "grid-cols-10 gap-5"
        }`}
      >
        {inch.map((inch) => (
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
                .map((drum) => {
                  const age =
                    drum.status == "use"
                      ? moment()
                          .local()
                          .diff(moment(drum.date_naik).local(), "days") +
                        drum.age
                      : drum.age;
                  return (
                    <div key={drum.id_drum}>
                      {drum.status == "unuse" ? (
                        <Link
                          href={`/dashboard/drums/${drum.id_drum}`}
                          className={`${
                            age > 0 && age < 10
                              ? "bg-green-200 hover:bg-green-300"
                              : age >= 10 && age <= 14
                              ? "bg-amber-200 hover:bg-amber-300"
                              : age > 14
                              ? "bg-red-200 hover:bg-red-300"
                              : "bg-white hover:bg-zinc-100"
                          } flex justify-between h-12 items-center p-2 border rounded-md text-xs transition duration-200`}
                        >
                          <p className="">{drum.id_drum}</p>
                          <p className="">{age}</p>
                        </Link>
                      ) : (
                        <HoverCard openDelay={200} closeDelay={0}>
                          <HoverCardTrigger asChild>
                            <div
                              className={`${
                                age > -1 && age < 10
                                  ? "bg-green-200 hover:bg-green-300"
                                  : age >= 10 && age <= 14
                                  ? "bg-amber-200 hover:bg-amber-300"
                                  : age > 14
                                  ? "bg-red-200 hover:bg-red-300"
                                  : "bg-white hover:bg-zinc-100"
                              } relative flex justify-between h-12 items-center p-2 border rounded-md text-xs transition duration-200`}
                            >
                              <p className="absolute top-0 left-1 text-[7px] text-green-500 animate-pulse">
                                ◉
                              </p>
                              <p className="">{drum.id_drum}</p>
                              <p className="">{age}</p>
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-72" align="start">
                            <div className="flex justify-between space-x-4">
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold">
                                  {drum.id_drum}
                                </h4>
                                <p className="text-xs">
                                  Mesin Building:{" "}
                                  <span className="font-semibold">
                                    {drum.building_mc}
                                  </span>
                                </p>
                                <p className="text-xs">
                                  Umur Pakai:{" "}
                                  <span className="font-semibold">
                                    {age} Hari
                                  </span>
                                </p>
                                <div className="flex items-center pt-2">
                                  <span className="text-xs text-muted-foreground">
                                    Tanggal Naik:{" "}
                                    {moment(drum.date_naik).format(
                                      "DD MMMM YYYY HH:mm"
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
