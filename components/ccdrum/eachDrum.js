import React from "react";
import { useFetch } from "@/lib/fetchHelper";
import Spinner from "../ui/spinner";
import moment from "moment-timezone";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export default function EachDrum({ id_drum }) {
  const { data, error, isLoading } = useFetch(
    `http://localhost:3000/api/cdms/drums?id=${id_drum}`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  const age =
    data.status == "use"
      ? moment().local().diff(moment(data.date_naik).local(), "days") + data.age
      : data.age;

  return (
    <>
      {data.status == "unuse" ? (
        <div
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
          <p className="">{data.id_drum}</p>
          <p className="">{age}</p>
        </div>
      ) : (
        <HoverCard openDelay={200} closeDelay={0}>
          <HoverCardTrigger asChild>
            <button
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
              <p className="">{data.id_drum}</p>
              <p className="">{age}</p>
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="w-72" align="start">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{data.id_drum}</h4>
                <p className="text-xs">
                  Mesin Building:{" "}
                  <span className="font-semibold">{data.building_mc}</span>
                </p>
                <p className="text-xs">
                  Umur Pakai: <span className="font-semibold">{age} Hari</span>
                </p>
                <div className="flex items-center pt-2">
                  {age == 0 ? (
                    ""
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Tanggal Naik:{" "}
                      {moment(data.date_naik).format("DD MMMM YYYY HH:mm")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      )}
    </>
  );
}
