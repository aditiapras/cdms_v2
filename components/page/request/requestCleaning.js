"use client";
import { useFetch } from "@/lib/fetcher/fetchHelper";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Spinner from "../../ui/spinner";
import { useState } from "react";
import axios from "axios";
import { useSWRConfig } from "swr";

export default function RequestCleaning() {
  const { mutate } = useSWRConfig();
  const [drum, setDrum] = useState("");
  const [team, setTeam] = useState("");
  const [type, setType] = useState("Cleaning C/C Drum");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState(false);
  const [currentPhase, setCurrentPhase] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (drum == "" || team == "" || type == "" || name == "") {
      setErrors(true);
    } else {
      setErrors(false);
      const query = {
        id_drum: drum,
        team: team,
        type: type,
        name: name,
        status: "New Request",
      };
      const data = axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_API_URL}/requests`,
        data: query,
      }).then((res) => res.data);
      console.log(await data);
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/requests`);
    }
  };

  const { data, error, isLoading } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/drums`
  );

  if (error) return null;
  if (isLoading) return <Spinner />;

  const drums = data
    .filter((drum) => drum.phase == currentPhase)
    .map((drum) => {
      return { value: drum.id_drum, label: drum.id_drum };
    });

  const teams = [
    { value: "QTT", label: "Quality Technology" },
    { value: "M2", label: "Manufacturing 2" },
  ];

  const phase = [
    { value: "Phase 1", label: "Phase 1" },
    { value: "Phase 2", label: "Phase 2" },
  ];

  const types = [{ value: "Cleaning C/C Drum", label: "Cleaning C/C Drum" }];

  return (
    <form
      action=""
      className="flex flex-col gap-5 mt-5"
      onSubmit={handleSubmit}
    >
      <DialogHeader>
        <DialogTitle>Requests Cleaning</DialogTitle>
        <DialogDescription>
          Add request for cleaning C/C drum to relatable team. Click add request
          when {`you're`} done.
        </DialogDescription>
      </DialogHeader>
      {errors && (
        <p className="bg-red-100 p-1 text-sm rounded-md text-red-500">
          Please fill all fields
        </p>
      )}
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Requester Name</Label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-zinc-300 px-2 py-1.5 rounded-md transition duration-200 focus-visible:outline-blue-500 focus-visible:border-blue-500 hover:border-zinc-400"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="team">Team</Label>
        <Select options={teams} onChange={(e) => setTeam(e.value)} required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phase">Building Phase</Label>
        <Select options={phase} onChange={(e) => setCurrentPhase(e.value)} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="id_drum">Carcass Drum</Label>
        <Select options={drums} onChange={(e) => setDrum(e.value)} required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="request">Request type</Label>
        <Select options={types} value={types} defaultValue={types} required />
      </div>
      <DialogFooter className={"flex justify-end mt-5"}>
        <Button type="submit">Add Rrequest</Button>
      </DialogFooter>
    </form>
  );
}
