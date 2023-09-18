"use client";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Spinner from "../ui/spinner";
import { useFetch } from "@/lib/fetchHelper";
import Select from "react-select";
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
  const [age, setAge] = useState(false);
  const [success, setSuccess] = useState(false);
  const [phase, setPhase] = useState("Phase 1");

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const resetForm = () => {
    reset({
      id_drum: "",
      building_mc: "",
      tub: "",
    });
  };

  const onSubmit = async (queryValue) => {
    const data = {
      id_drum: queryValue.id_drum.value,
      building_mc: queryValue.building_mc.value,
      tub: queryValue.tub.value,
      status: "use",
      method: "naik",
    };
    // console.log(data);

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
      setAge(false);
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
      if (drumStatus.age >= 14) {
        setDrum(false);
        setAge(true);
        setDrumName(data.id_drum);
      } else {
        setAge(false);
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
    }
  };

  const {
    data: drums,
    error: error1,
    isLoading: loading1,
  } = useFetch(`${process.env.NEXT_PUBLIC_URL}/api/cdms/drums`);

  const {
    data: machines,
    error: error2,
    isLoading: loading2,
  } = useFetch(`${process.env.NEXT_PUBLIC_URL}/api/cdms/machine`);

  const {
    data: tubs,
    error: error3,
    isLoading: loading3,
  } = useFetch(`${process.env.NEXT_PUBLIC_URL}/api/cdms/tub`);

  if (error1 || error2 || error3) return <option value="Error">Error</option>;
  if (loading1 || loading2 || loading3) return <Spinner />;

  const mesin = machines
    .filter((mc) => mc.phase == phase)
    .map((machine) => {
      return { value: machine.building_mc, label: machine.building_mc };
    });

  const ccdrum = drums
    .filter((drum) => drum.phase == phase)
    .map((drum) => {
      return { value: drum.id_drum, label: drum.id_drum };
    });

  const tub = tubs.map((tub) => {
    return { value: tub.tub_width, label: tub.tub_width };
  });

  return (
    <main className="flex flex-col items-center justify-center h-full py-7 bg-zinc-100">
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-5 py-10 border rounded-md w-96 text-sm bg-white"
        >
          {/* STATUS MESSAGE SUCCESS */}
          {success && (
            <p className="bg-green-200 p-2 rounded-md text-green-700">
              Berhasil
            </p>
          )}

          {/* FORM TITLE */}

          <p className="font-semibold text-xl">Input Naik</p>

          <label htmlFor="phase">Phase</label>
          <select
            name="phase"
            id="phase"
            onChange={(e) => setPhase(e.target.value)}
            className="bg-zinc-100 hover:bg-zinc-200 p-2 rounded-md transition duration-200"
          >
            <option value="Phase 1">Phase 1</option>
            <option value="Phase 2">Phase 2</option>
          </select>

          {/* INPUT ID DRUM */}
          <label htmlFor="id_drum">ID Drum</label>
          <Controller
            name="id_drum"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Select options={ccdrum} {...field} />}
          />

          {errors.id_drum && (
            <p className="text-red-500 text-xs border border-red-500 p-2 rounded-md">
              ID Drum belum dipilih.
            </p>
          )}
          {drum && (
            <p className="text-red-500 text-xs border border-red-500 p-2 rounded-md">
              ID Drum <span className="font-semibold">{drumName}</span> sudah
              terpasang di mesin{" "}
              <span className="font-semibold">{machineName}</span>.
            </p>
          )}
          {age && (
            <p className="text-red-500 text-xs border border-red-500 p-2 rounded-md">
              ID Drum <span className="font-semibold">{drumName}</span> sudah
              melebihi batas umur pakai, lakukan cleaning terlebih dahulu.
            </p>
          )}

          {/* INPUT BUILDING MACHINE */}
          <label htmlFor="building_mc">Building Machine</label>
          <Controller
            name="building_mc"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Select options={mesin} {...field} />}
          />

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

          {/* INPUT TUB */}

          <label htmlFor="tub">TUB Width</label>
          <Controller
            name="tub"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Select options={tub} {...field} />}
          />

          {errors.tub && (
            <p className="text-red-500 text-xs border border-red-500 p-2 rounded-md">
              Lebar TUB belum dipilih.
            </p>
          )}

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
