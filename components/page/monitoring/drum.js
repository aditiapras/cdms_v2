import Link from "next/link";
import { useFetch } from "@/lib/fetcher/fetchHelper";
import moment from "moment-timezone";
import Spinner from "../../ui/spinner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function CarcassDrum({ drum, mesin }) {
  const { data, error, isLoading } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/drums?id=${drum}`
  );

  if (error) return null;
  if (isLoading) return <Spinner />;

  const age =
    moment().local().diff(moment(data.date_naik).local(), "days") + data.age;

  return (
    <>
      {data.length > 1 ? (
        <p className="text-zinc-400 text-xs bg-white flex items-center justify-between border rounded-lg p-2 h-12">
          No C/C Drum Mounted
        </p>
      ) : (
        <AlertDialog>
          <AlertDialogTrigger
            className={`${
              mesin == "H1305" ||
              mesin == "H1502" ||
              mesin == "H1601" ||
              mesin == "H1603" ||
              mesin == "H1701" ||
              mesin == "H1703" ||
              mesin == "H1704" ||
              mesin == "H1705" ||
              mesin == "H1801" ||
              mesin == "H1804" ||
              mesin == "H1805"
                ? age < 10
                  ? "bg-green-200 hover:bg-green-300"
                  : age >= 10 && age <= 14
                  ? "bg-amber-200 hover:bg-amber-300"
                  : "bg-red-200 hover:bg-red-300"
                : age < 25
                ? "bg-green-200 hover:bg-green-300"
                : age >= 25 && age <= 30
                ? "bg-amber-200 hover:bg-amber-300"
                : "bg-red-200 hover:bg-red-300"
            } flex items-center justify-between border border-zinc-300 rounded-lg px-5 md:px-2 h-12 transition duration-200 text-sm`}
          >
            <p className="flex items-center gap-2">
              {drum}
              {drum == "I16L-H30B-19" ||
              drum == "I16L-H30B-21" ||
              drum == "I16L-H30B-07" ||
              drum == "I16L-H30B-08" ? (
                <span className="text-xs px-2 rounded-full bg-zinc-700 text-zinc-50">
                  OE
                </span>
              ) : (
                ""
              )}
            </p>
            <p>{age}</p>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
              <AlertDialogDescription>
                Proses ini akan menurunkan C/C Drum{" "}
                <span className="font-bold text-zinc-950">{drum}</span> dari
                mesin <span className="font-bold text-zinc-950">{mesin}</span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Link href={`/dashboard/monitoring/${drum}`}>
                  <p>Continue</p>
                </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
