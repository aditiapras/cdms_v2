"use client";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Spinner from "../../ui/spinner";
import { useFetch } from "@/lib/fetcher/fetchHelper";
import Select from "react-select";
import {
  getDrumStatus,
  getMachineStatus,
  getMonitoringStatus,
  postDrum,
  postMonitoring,
} from "@/lib/api-call/postHelper";
import { useSession } from "next-auth/react";
import { postHistory } from "@/lib/api-call/updateHistory";
import { inputPhase } from "@/lib/global-state/globalState";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";

export default function InputNaik() {
  const { data: session } = useSession();
  const [drumName, setDrumName] = useState("");
  const [machineName, setMachineName] = useState("");

  const phase = inputPhase((state) => state.default);
  const phase2 = inputPhase((state) => state.phase2);
  const phase1 = inputPhase((state) => state.phase1);

  const { handleSubmit, control, reset } = useForm();

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

    const drumStatus = await getDrumStatus(data);
    const machineStatus = await getMachineStatus(data);
    const monitoringStatus = await getMonitoringStatus(data);
    const monitoring = monitoringStatus.data;

    const history = {
      id_drum: queryValue.id_drum.value,
      building_mc: queryValue.building_mc.value,
      age: Number(drumStatus.age),
      reason: "-",
      pic: session?.user?.username,
      type: "Naik",
    };

    const complete = () => {
      setMachine(false);
      setMachineName(data.building_mc);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      toast.success(`Success, Mesin ${data.building_mc} berhasil digunakan.`);
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
      setDrumName(data.id_drum);
      setMachineName(drumStatus.building_mc);
      toast.error(
        `Drum ${drumName} sudah digunakan di mesin ${machineName}, silakan pilih drum yang lain.`
      );
      if (machineStatus.length == 2) {
        setMachineName(data.building_mc);
        toast.error(
          `Mesin ${machineName} sudah terpasang C/C Drum, silakan pilih mesin yang lain.`
        );
      } else {
        setMachineName(drumStatus.building_mc);
      }
    } else {
      if (drumStatus.age >= 14) {
        setDrumName(data.id_drum);
        toast.error(
          `Drum ${drumName} sudah melebihi batas umur pakai, lakukan cleaning terlebih dahulu.`
        );
      } else {
        setDrumName(data.id_drum);
        if (machineStatus.length == 2) {
          setMachineName(data.building_mc);
        } else {
          if (phase != drumStatus.phase || phase != monitoring.phase) {
            toast.error(`Drum/Mesin berbeda dengan Phase yang dipilih`);
          } else {
            postDrum(data);
            inputMonitoring();
            postHistory(history);
            complete();
          }
        }
      }
    }
  };

  const {
    data: drums,
    error: error1,
    isLoading: loading1,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/drums`);

  const {
    data: machines,
    error: error2,
    isLoading: loading2,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/machines`);

  const {
    data: tubs,
    error: error3,
    isLoading: loading3,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/tubs`);

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
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-5 py-10 border rounded-md w-[400px] text-sm bg-white"
        >
          {/* FORM TITLE */}

          <p className="font-semibold text-xl">Input Naik</p>

          <label htmlFor="phase">Phase</label>
          <div className="flex gap-2">
            <Button
              type="button"
              onClick={phase1}
              variant={phase == "Phase 1" ? "" : "outline"}
            >
              Phase 1
            </Button>
            <Button
              type="button"
              onClick={phase2}
              variant={phase == "Phase 2" ? "" : "outline"}
            >
              Phase 2
            </Button>
          </div>

          <label htmlFor="id_drum">ID Drum</label>
          <Controller
            name="id_drum"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select required options={ccdrum} {...field} />
            )}
          />

          {/* INPUT BUILDING MACHINE */}
          <label htmlFor="building_mc">Building Machine</label>
          <Controller
            name="building_mc"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select required options={mesin} {...field} />
            )}
          />

          {/* INPUT TUB */}

          <label htmlFor="tub">TUB Width</label>
          <Controller
            name="tub"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Select required options={tub} {...field} />}
          />

          <Button className="w-full mt-10" type="submit">
            Input
          </Button>
        </form>
      </div>
      <p className="text-xs text-zinc-400 mt-10">
        Copyright © 2023 Hankook Tire Indonesia
      </p>
    </main>
  );
}
