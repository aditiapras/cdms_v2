"use client";
import { BiSolidPlusCircle, BiSolidMinusCircle } from "react-icons/bi";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import moment from "moment-timezone";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function CleaningCC({ params }) {
  const [qty, setQty] = useState(0);
  const [show, setShow] = useState(false);
  const { register, handleSubmit, control, reset } = useForm();
  const { fields } = useFieldArray({
    control,
    name: "parts",
  });

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

  const onSubmit = (res) => {
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
    console.log(data);
  };

  return (
    <div className="w-full h-full bg-zinc-100 flex flex-col gap-5 p-5">
      <p className="text-xl font-semibold">Cleaning Carcass Drum</p>
      <div className="flex justify-between gap-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full p-3 gap-3 text-sm"
        >
          <div className="flex gap-3">
            <p>ID Drum:</p>
            <input
              type="text"
              className="bg-zinc-100 focus-visible:outline-none"
              {...register("id_drum")}
              readOnly
              value={params.cleaningId}
            />
          </div>
          <div className="flex gap-3">
            <p>Cleaning Date:</p>
            <p>{moment().local().format("DD-MMM-YYYY HH:mm")}</p>
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
                className="bg-zinc-100 focus-visible:outline-none"
                {...register(`parts.${index}.name`)}
                readOnly
              />
              <select
                className="p-2 rounded-md"
                {...register(`parts.${index}.status`)}
                defaultValue={"OK"}
              >
                <option value="OK">OK</option>
                <option value="NG">NG</option>
              </select>
              <select
                className="p-2 rounded-md"
                {...register(`parts.${index}.change`)}
                defaultValue={"No"}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <input
                type="number"
                defaultValue={0}
                className="p-2 rounded-md"
                {...register(`parts.${index}.qty`)}
              />
            </div>
          ))}
          <div className="flex justify-between gap-5 text-center">
            <Link
              href="/dashboard/drums"
              className="bg-zinc-200 hover:bg-zinc-50 p-2 rounded-md w-full transition duration-200"
            >
              Cancel
            </Link>
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
