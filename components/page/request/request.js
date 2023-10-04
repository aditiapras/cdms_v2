"use client";
import { VscRequestChanges } from "react-icons/vsc";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RequestChange from "./requestChange";
import RequestCleaning from "./requestCleaning";
import { useFetch } from "@/lib/fetcher/fetchHelper";
import Spinner from "../../ui/spinner";
import DataTable from "../../data-table";
import moment from "moment-timezone";
import { useState } from "react";
import Select from "react-select";
import { Button } from "../../ui/button";
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
import axios from "axios";

export default function Request() {
  const [changeStatus, setChangeStatus] = useState("");
  const [errors, setErrors] = useState(false);

  const {
    data: requests,
    error,
    isLoading,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/requests`);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  /** @type import("@tanstack/react-table").ColumnDef<any> */

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      cell: (info) => String(info.getValue()),
      size: 25,
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "ID Drum",
      accessorKey: "id_drum",
    },
    {
      header: "Building MC",
      accessorKey: "building_mc",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => {
        const request = row.original;
        return (
          <div className="relative">
            <p
              className={`${
                request.status == "Complete"
                  ? "text-green-500 bg-green-200"
                  : request.status == "New Request"
                  ? "text-blue-500 bg-blue-200"
                  : "text-amber-500 bg-amber-200"
              } px-2 py-0.5 rounded-full text-center relative`}
            >
              {request.status}
            </p>
            {request.status == "New Request" && (
              <p className="absolute top-0 left-0 bg-red-500 w-2.5 h-2.5 rounded-full animate-bounce"></p>
            )}
          </div>
        );
      },
    },
    {
      header: "Request Date",
      accessorKey: "request_date",
      cell: (info) => moment(info.getValue()).format("DD MMMM YYYY HH:mm"),
    },
    {
      header: "Complete Date",
      accessorKey: "complete_date",
      cell: (info) => moment(info.getValue()).format("DD MMMM YYYY HH:mm"),
    },
    {
      header: "Action",
      cell: ({ row }) => {
        const request = row.original;

        const status =
          request.status == "New Request"
            ? [
                { value: "On Progress", label: "On Progress" },
                { value: "Complete", label: "Complete" },
              ]
            : [
                { value: "On Progress", label: "On Progress" },
                { value: "Complete", label: "Complete" },
              ];

        const handleSubmit = async (e) => {
          const query = {
            id: request.id,
            status: e.value,
          };
          const data = axios({
            method: "put",
            url: `${process.env.NEXT_PUBLIC_API_URL}/requests`,
            data: query,
          }).then((res) => res.data);

          console.log(await data);
        };

        if (request.status == "Complete") {
          return <Button disabled>Change Status</Button>;
        } else {
          return (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Change Status</Button>
              </DialogTrigger>
              <DialogContent>
                <form className="flex flex-col gap-5 mt-10">
                  <DialogHeader>
                    <DialogTitle>Change Status</DialogTitle>
                    <DialogDescription>
                      Change status of request.
                    </DialogDescription>
                    {errors && <p>Please select a status</p>}
                  </DialogHeader>
                  <Select
                    options={status}
                    onChange={(e) => handleSubmit(e)}
                    required
                  />
                  <Button type="submit">Save Changes</Button>
                </form>
              </DialogContent>
            </Dialog>
          );
        }
      },
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-5 w-full px-5 py-2 border-b bg-zinc-50">
        <p className="font-semibold text-xl">Request</p>
      </div>
      <div className="w-full flex flex-col p-5">
        <Dialog>
          <DialogTrigger asChild>
            <div className="w-fit flex items-center gap-3 px-3 py-2 bg-zinc-950 text-white rounded-md hover:bg-zinc-700 active:scale-90 transition ease-in-out duration-200 hover:cursor-pointer">
              Add Request <VscRequestChanges className="text-xl" />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <Tabs defaultValue="change" className="w-full mt-5">
              <TabsList className="w-full">
                <TabsTrigger className="w-full" value="change">
                  Change C/C Drum
                </TabsTrigger>
                <TabsTrigger className="w-full" value="cleaning">
                  Cleaning C/C Drum
                </TabsTrigger>
              </TabsList>
              <TabsContent value="change">
                <RequestChange />
              </TabsContent>
              <TabsContent value="cleaning">
                <RequestCleaning />
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
        <div className="flex flex-col gap-5 mt-5 border-t">
          <p className="mt-3 font-semibold">Request list</p>
          <div className="flex flex-col gap-5">
            <DataTable columns={columns} data={requests} />
          </div>
        </div>
      </div>
    </div>
  );
}
