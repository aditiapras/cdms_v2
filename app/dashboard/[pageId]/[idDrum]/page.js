"use client";
import { useFetch } from "@/lib/fetchHelper";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Spinner from "@/components/ui/spinner";
import Link from "next/link";
import moment from "moment-timezone";
import { unmountDrum, unmountMachine } from "@/lib/unmountHelper";
import { redirect } from "next/navigation";

export default function TurunCC({ params }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  if (params.idDrum == "cleaning") {
    redirect("/dashboard/drums");
  }

  const { data, error, isLoading } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api/cdms/drums?id=${params.idDrum}`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;
  if (data.building_mc == "") {
    redirect("/dashboard/monitoring");
  }

  const age = moment().diff(moment(data.date_naik), "days") + data.age;

  const onSubmit = async (queryData) => {
    const data = {
      id_drum: queryData.id_drum,
      building_mc: queryData.building_mc,
      status: "unuse",
      age: Number(age),
      reason: queryData.reason,
      method: "turun",
    };
    const data2 = {
      id_drum: queryData.id_drum,
      building_mc: "",
      status: "unuse",
      age: Number(age),
      reason: queryData.reason,
      method: "turun",
    };

    const turunDrum = await unmountDrum(data2);
    console.log(turunDrum.data);

    const turunMesin = await unmountMachine(data);
    console.log(turunMesin);
    router.push("/dashboard/monitoring");
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-full bg-zinc-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 p-5 rounded-md border w-96 bg-white"
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold">Turun C/C Drum</p>
          <p className="text-xs bg-green-200 text-green-600 p-1 rounded-md animate-pulse">
            status: mounted
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <label htmlFor="id_drum" className="text-zinc-500">
            ID Drum
          </label>
          <input
            type="text"
            id="id_drum"
            {...register("id_drum")}
            defaultValue={params.idDrum}
            className="p-1 border rounded-md bg-sky-50"
            readOnly
          />
          <label htmlFor="building_mc" className="text-zinc-500">
            Mesin Building
          </label>
          <input
            type="text"
            id="building_mc"
            {...register("building_mc")}
            defaultValue={data.building_mc}
            className="p-1 border rounded-md bg-sky-50"
            readOnly
          />
          <label htmlFor="date_naik" className="text-zinc-500">
            Tanggal Naik
          </label>
          <input
            type="text"
            id="date_naik"
            {...register("date_naik")}
            defaultValue={moment(data.date_naik)
              .local()
              .format("YYYY-MM-DD HH:mm:ss")}
            className="p-1 border rounded-md bg-sky-50"
            readOnly
          />
          <label htmlFor="date_turun" className="text-zinc-500">
            Tanggal Turun
          </label>
          <input
            type="text"
            id="date_turun"
            {...register("date_turun")}
            defaultValue={moment().local().format("YYYY-MM-DD HH:mm:ss")}
            className="p-1 border rounded-md bg-sky-50"
            readOnly
          />
          <label htmlFor="age" className="text-zinc-500">
            Umur Pakai
          </label>
          <div className="flex w-full gap-2 items-center">
            <input
              type="text"
              id="age"
              {...register("age")}
              defaultValue={age}
              className="p-1 border rounded-md bg-sky-50 w-full"
              readOnly
            />
            <p className="w-fit">Hari</p>
          </div>
          <label htmlFor="date_turun" className="text-zinc-500">
            Reason
          </label>
          <select
            name="reason"
            id="reason"
            className="p-1 border rounded-md bg-sky-50 w-full"
            {...register("reason", { required: true })}
          >
            <option value="">Select Reason</option>
            <option value="Bladder Bocor">Bladder Bocor</option>
            <option value="NC Uniformity">NC Uniformity</option>
            <option value="Cleaning">Cleaning</option>
            <option value="NC Visual">NC Visual</option>
            <option value="Ganti Inch">Ganti Inch</option>
            <option value="Lebar Bladder">Lebar Bladder</option>
            <option value="Ganti Size">Ganti Size</option>
          </select>
          {errors.reason && (
            <p className="text-red-500 text-xs">Reason belum pilih</p>
          )}
        </div>
        <div className="flex gap-5 justify-between items-center text-sm mt-7">
          <Link
            href={`/dashboard/monitoring`}
            className="p-2 bg-sky-100 hover:bg-sky-200 text-sky-400 rounded-md w-1/2 text-center transition duration-200"
          >
            Cancel
          </Link>
          <button className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md w-1/2 text-center transition duration-200">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
