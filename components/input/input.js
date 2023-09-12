"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Spinner from "../ui/spinner";
import { useFetch } from "@/lib/fetchHelper";
import {
  getDrumStatus,
  getMachineStatus,
  getMonitoringStatus,
  postDrum,
  postMonitoring,
} from "@/lib/postHelper";

export default function InputNaik() {
  const [machine, setMachine] = useState(false);
  const [drum, setDrum] = useState(false);
  const [drumName, setDrumName] = useState("");
  const [machineName, setMachineName] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const resetForm = () => {
    resetField("id_drum");
    resetField("building_mc");
    resetField("tub");
  };

  const onSubmit = async (data) => {
    const drumStatus = await getDrumStatus(data);
    const machineStatus = await getMachineStatus(data);
    const monitoringStatus = await getMonitoringStatus(data);
    const monitoring = monitoringStatus.data;

    const complete = () => {
      setMachine(false);
      setMachineName(data.building_mc);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      resetForm();
      console.log("Success");
    };

    const inputMonitoring = () => {
      if (monitoring.id_left == "" && monitoring.id_right == "") {
        const query = {
          id_left: data.id_drum,
          id_right: "",
          building_mc: data.building_mc,
          status: "use",
        };
        postMonitoring(query);
        console.log("Unuse");
      } else if (monitoring.id_left == "" && monitoring.id_right != "") {
        const query = {
          id_left: data.id_drum,
          id_right: monitoring.id_right,
          building_mc: data.building_mc,
          status: "use",
        };
        postMonitoring(query);
        console.log("Left");
      } else if (monitoring.id_left != "" && monitoring.id_right == "") {
        const query = {
          id_left: monitoring.id_left,
          id_right: data.id_drum,
          building_mc: data.building_mc,
          status: "use",
        };
        postMonitoring(query);
        console.log("Right");
      } else {
        console.log("Use");
      }
    };

    if (drumStatus.status == "use") {
      setDrum(true);
      setDrumName(data.id_drum);
      setMachineName(drumStatus.building_mc);
      if (machineStatus.length == 2) {
        setMachine(true);
        setMachineName(data.building_mc);
      } else {
        setMachine(false);
        setMachineName(drumStatus.building_mc);
      }
    } else {
      setDrum(false);
      setDrumName(data.id_drum);
      if (machineStatus.length == 2) {
        setMachine(true);
        setMachineName(data.building_mc);
      } else {
        postDrum(data);
        inputMonitoring();
        complete();
      }
    }
  };

  const {
    data: drums,
    error: error1,
    isLoading: loading1,
  } = useFetch("http://localhost:3000/api/cdms/drums");

  const {
    data: machines,
    error: error2,
    isLoading: loading2,
  } = useFetch("http://localhost:3000/api/cdms/machine");

  const {
    data: tubs,
    error: error3,
    isLoading: loading3,
  } = useFetch("http://localhost:3000/api/cdms/tub");

  if (error1 || error2 || error3) return <option value="Error">Error</option>;
  if (loading1 || loading2 || loading3) return <Spinner />;

  return (
    <main className="flex flex-col items-center justify-center h-full py-7 bg-zinc-100">
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-5 py-10 border rounded-md w-96 text-sm bg-white"
        >
          <p className="font-semibold text-xl">Input Naik</p>
          {success && (
            <p className="bg-green-200 p-2 rounded-md text-green-700">
              Berhasil
            </p>
          )}
          <label htmlFor="id_drum">ID Drum</label>
          <select
            name="id_drum"
            id="id_drum"
            className="p-2 rounded-md bg-zinc-100"
            {...register("id_drum", { required: true })}
          >
            <option value="">Pilih ID Drum</option>
            {drums.map((drum) => (
              <option key={drum.id_drum} value={drum.id_drum}>
                {drum.id_drum}
              </option>
            ))}
          </select>

          {drum && (
            <p className="text-red-500 text-xs border border-red-500 p-2 rounded-md">
              ID Drum <span className="font-semibold">{drumName}</span> sudah
              terpasang di mesin{" "}
              <span className="font-semibold">{machineName}</span>.
            </p>
          )}

          {errors.id_drum && (
            <p className="text-red-500 text-xs border border-red-500 p-2 rounded-md">
              ID Drum belum dipilih.
            </p>
          )}

          <label htmlFor="building_mc">Building Machine</label>
          <select
            name="building_mc"
            id="building_mc"
            className="p-2 rounded-md bg-zinc-100"
            {...register("building_mc", { required: true })}
          >
            <option value="">Pilih Mesin Building</option>
            {machines.map((machine) => (
              <option key={machine.building_mc} value={machine.building_mc}>
                {machine.building_mc}
              </option>
            ))}
          </select>

          {machine && (
            <p className="text-red-500 text-xs border border-red-500 p-2 rounded-md">
              Mesin building{" "}
              <span className="font-semibold">{machineName}</span> sudah
              terpasang C/C Drum.
            </p>
          )}

          {errors.building_mc && (
            <p className="text-red-500 text-xs border border-red-500 p-2 rounded-md">
              Mesin Building belum dipilih.
            </p>
          )}

          <label htmlFor="tub">TUB Width</label>
          <select
            name="tub"
            id="tub"
            className="p-2 rounded-md bg-zinc-100"
            {...register("tub", { required: true })}
          >
            <option value="">Pilih Lebar TUB</option>
            {tubs.map((tub) => (
              <option key={tub.id} value={tub.tub_width}>
                {tub.tub_width}
              </option>
            ))}
          </select>

          {errors.tub && (
            <p className="text-red-500 text-xs border border-red-500 p-2 rounded-md">
              Lebar TUB belum dipilih.
            </p>
          )}

          <input
            type="text"
            name="status"
            id="status"
            defaultValue={"use"}
            readOnly
            className="rounded-md bg-zinc-100 -mt-10 invisible"
            {...register("status")}
          />
          <input
            type="text"
            name="method"
            id="method"
            defaultValue={"naik"}
            readOnly
            className="rounded-md bg-zinc-100 -mt-10 invisible"
            {...register("method")}
          />
          <button
            type="submit"
            className="mt-5 px-5 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-700 transition duration-200"
          >
            Input
          </button>
        </form>
      </div>
      <p className="text-xs text-zinc-400 mt-10">
        Copyright © 2023 Hankook Tire Indonesia
      </p>
    </main>
  );
}
