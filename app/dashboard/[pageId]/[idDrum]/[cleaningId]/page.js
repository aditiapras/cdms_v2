"use client";
import moment from "moment-timezone";
import Link from "next/link";
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useFetch } from "@/lib/fetchHelper";
import { redirect } from "next/navigation";
import { cleanDrumMonitoring, cleanDrums } from "@/lib/cleanHelper";
import { useState } from "react";

export default function CleaningCC({ params }) {
  const [qty, setQty] = useState(0);
  const { register, handleSubmit, control, reset } = useForm();
  const { fields } = useFieldArray({
    control,
    name: "parts",
  });
  const router = useRouter();

  const {
    data: drums,
    error,
    isLoading,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/drums?id=${params.cleaningId}`
  );

  if (drums == null) {
    redirect("/dashboard/drums");
  }

  const { data: session } = useSession();

  const parts = [
    { id: 1, name: "Rubber Band" },
    { id: 2, name: "Spring Finger" },
    { id: 3, name: "Bead Lock" },
    { id: 4, name: "Shoulder Finger" },
    { id: 5, name: "Turn Up Bladder" },
    { id: 6, name: "Check & Valve" },
    { id: 7, name: "Seal O Ring" },
    { id: 8, name: "Bolt Disc" },
    { id: 9, name: "Cylinder Spring" },
    { id: 10, name: "Thread & Screw" },
  ];

  const onSubmit = async (res) => {
    const data = {
      id_drum: res.id_drum,
      pic: session?.user?.username,
      parts: res.parts.map((p) => {
        return {
          name: p.name,
          status: p.status,
          change: p.change,
          qty: Number(p.qty),
        };
      }),
    };
    const clean = await cleanDrums(data);
    const cleanDrum = await cleanDrumMonitoring(data);
    console.log(clean);
    console.log(cleanDrum);
    router.push("/dashboard/drums");
  };

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  return (
    <div className="w-full h-full bg-zinc-100 flex flex-col gap-5 p-5 items-center justify-center">
      <div className="flex justify-between gap-5 bg-white p-5 rounded-md shadow-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full p-3 gap-3 text-sm"
        >
          <Link
            href="/dashboard/drums"
            className="bg-red-400 hover:bg-red-300 text-white p-2 rounded-md w-[80px] text-center transition duration-200"
          >
            Cancel
          </Link>
          <p className="text-xl font-semibold">Cleaning Carcass Drum</p>
          <div className="flex gap-3">
            <p>ID Drum:</p>
            <input
              type="text"
              className="bg-white focus-visible:outline-none font-semibold"
              {...register("id_drum")}
              readOnly
              value={params.cleaningId}
            />
          </div>
          <div className="flex gap-3">
            <p>Cleaning Date:</p>
            <p className="font-semibold">
              {moment().local().format("DD-MMM-YYYY HH:mm")}
            </p>
          </div>
          <div className="grid grid-cols-4 font-semibold border-b text-center mt-5">
            <p className="">List Item</p>
            <p className="">OK/NG</p>
            <p className="">Ganti/Tidak</p>
            <p className="">Qty</p>
          </div>
          {parts.map((part, index) => (
            <div
              key={part.id}
              className="grid grid-cols-4 text-center place-items-center"
            >
              <input
                type="text"
                value={part.name}
                className="bg-white focus-visible:outline-none"
                {...register(`parts.${index}.name`)}
                readOnly
              />
              <select
                className="p-2 rounded-md border"
                {...register(`parts.${index}.status`)}
                defaultValue={"OK"}
              >
                <option value="OK">OK</option>
                <option value="NG">NG</option>
              </select>
              <select
                className="p-2 rounded-md border"
                {...register(`parts.${index}.change`)}
                defaultValue={"No"}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <input
                type="number"
                defaultValue={0}
                className="p-2 rounded-md w-14 border"
                {...register(`parts.${index}.qty`)}
              />
            </div>
          ))}
          <div className="flex text-center w-full mt-5">
            <button
              type="submit"
              className="bg-zinc-950 text-white hover:bg-zinc-700 p-2 rounded-md w-full transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
