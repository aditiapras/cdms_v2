"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { addNewDrum } from "@/lib/api-call/postHelper";
import toast, { Toaster } from "react-hot-toast";

export default function AddForm() {
  const { handleSubmit, control, reset, register } = useForm();
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const resetForm = () => {
    reset({
      id_drum: "",
      rim: "",
      type: "",
      phase: "",
    });
  };

  const rims = [
    { value: "13", label: "13 Inch" },
    { value: "14", label: "14 Inch" },
    { value: "15", label: "15 Inch" },
    { value: "16", label: "16 Inch" },
    { value: "17", label: "17 Inch" },
    { value: "18", label: "18 Inch" },
    { value: "19", label: "19 Inch" },
    { value: "20", label: "20 Inch" },
  ];

  const types = [
    { value: "PCR", label: "PCR" },
    { value: "LTR", label: "LTR" },
  ];

  const phases = [
    { value: "Phase 1", label: "Phase 1" },
    { value: "Phase 2", label: "Phase 2" },
  ];

  const onSubmit = async (queryValue) => {
    const data = {
      id_drum: queryValue.id_drum,
      rim: Number(queryValue.rim.value),
      type: queryValue.type.value,
      phase: queryValue.phase.value,
      status: "unuse",
    };

    const res = await addNewDrum(data);

    if (res.data.error == true) {
      toast.error("ID Drum sudah ada dalam list.");
    } else {
      toast.success("Berhasil menambahkan ID Drum baru");
      resetForm();
    }
  };

  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <div className="flex flex-col gap-2">
          <label htmlFor="id_drum" className="font-semibold text-sm">
            ID Drum
          </label>
          <input
            className="border border-zinc-300 p-1.5 rounded-md focus-visible:outline-blue-600 hover:border-zinc-400 transition duration-200"
            onInput={(e) => {
              e.target.value = e.target.value.toUpperCase();
            }}
            required
            {...register("id_drum", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm">Rim Size</p>
          <Controller
            name="rim"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select instanceId={"rim"} required options={rims} {...field} />
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm">Type</p>
          <Controller
            name="type"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select instanceId={"type"} required options={types} {...field} />
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm">Phase</p>
          <Controller
            name="phase"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                instanceId={"phase"}
                required
                options={phases}
                {...field}
              />
            )}
          />
        </div>
        <Button className="w-full mt-5">Submit</Button>
      </form>
    </>
  );
}
