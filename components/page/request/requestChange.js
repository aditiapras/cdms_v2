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

export default function RequestChange() {
  const [machine, setMachine] = useState("");
  const [drum, setDrum] = useState("");
  const [team, setTeam] = useState("");
  const [type, setType] = useState("Change C/C Drum");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (machine == "" || drum == "" || team == "" || type == "" || name == "") {
      setErrors(true);
      setTimeout(() => {
        setErrors(false);
      }, 6000);
    } else {
      setErrors(false);
      const query = {
        id_drum: drum,
        building_mc: machine,
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
      window.location.reload();
    }
  };

  const { data, error, isLoading } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/monitoring`
  );

  if (error) return null;
  if (isLoading) return <Spinner />;

  const mesin = data.map((machine) => {
    return { value: machine.building_mc, label: machine.building_mc };
  });

  const drums = data
    .filter((items) => items.building_mc == machine)
    .map((drum) => {
      const id_left = drum.id_left;
      const id_right = drum.id_right;
      if (id_left == "" && id_right == "") {
        const drumName = [
          { value: null, label: null },
          { value: null, label: null },
        ];
        setMachine("");
        return drumName;
      } else {
        const drumName = [
          { value: id_left, label: id_left },
          { value: id_right, label: id_right },
        ];
        return drumName;
      }
    });

  const teams = [
    { value: "QTT", label: "Quality Technology" },
    { value: "M2", label: "Manufacturing 2" },
  ];

  const types = [{ value: "Change C/C Drum", label: "Change C/C Drum" }];

  return (
    <form
      action=""
      className="flex flex-col gap-5 mt-5"
      onSubmit={handleSubmit}
    >
      <DialogHeader>
        <DialogTitle>Requests Change</DialogTitle>
        <DialogDescription>
          Add request for change C/C drum to relatable team. Click add request
          when {`you're`} done.
        </DialogDescription>
      </DialogHeader>
      {errors && (
        <p className="bg-red-100 p-2 text-sm rounded-md text-red-500">
          Harap cek kembali form, terutama bagian C/C Drum. Pastikan C/C Drum
          yang dipilih sesuai dengan mesin yang sedang digunakan.
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
        <Label htmlFor="building_mc">Building Machine</Label>
        <Select
          options={mesin}
          onChange={(e) => {
            setMachine(e.value);
          }}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="id_drum">Carcass Drum</Label>
        <Select
          options={drums[0]}
          onChange={(e) => {
            setDrum(e.value);
          }}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="request">Request type</Label>
        <Select
          options={types}
          onChange={(e) => setType(e.value)}
          value={types}
          required
        />
      </div>
      <DialogFooter className={"flex justify-end mt-5"}>
        <Button type="submit">Add Rrequest</Button>
      </DialogFooter>
    </form>
  );
}
