import Link from "next/link";
import { useFetch } from "@/lib/fetchHelper";
import moment from "moment-timezone";

export default function CarcassDrum({ drum }) {
  const { data, error, isLoading } = useFetch(
    `http://localhost:3000/api/cdms/drums?id=${drum}`
  );

  if (error) return null;
  if (isLoading)
    return (
      <p className="text-sm text-white bg-white flex items-center justify-between border rounded-lg p-2 h-12 animate-pulse">
        No C/C Drum Mounted
      </p>
    );

  const age = moment().diff(moment(data.date_naik), "days") + data.age;

  return (
    <>
      {data.length > 1 ? (
        <p className="text-zinc-400 text-xs bg-white flex items-center justify-between border rounded-lg p-2 h-12">
          No C/C Drum Mounted
        </p>
      ) : (
        <Link
          href={`/dashboard/monitoring/${drum}`}
          className={`${
            age < 10
              ? "bg-green-200 hover:bg-green-300"
              : age >= 10 && age <= 14
              ? "bg-amber-200 hover:bg-amber-300"
              : "bg-red-200 hover:bg-red-300"
          } flex items-center justify-between border border-zinc-300 rounded-lg px-5 md:px-2 h-12 transition duration-200 text-sm`}
        >
          <p>{drum}</p>
          <p>{age}</p>
        </Link>
      )}
    </>
  );
}
