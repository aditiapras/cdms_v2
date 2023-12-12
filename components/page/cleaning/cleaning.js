import { useFetch } from "@/lib/fetcher/fetchHelper";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import moment from "moment-timezone";
import Spinner from "../../ui/spinner";
import DataTable from "../../data-table";
import { Button } from "@/components/ui/button";
import { BsEyeFill } from "react-icons/bs";

export default function Cleaning() {
  const {
    data: cleaning,
    error,
    isLoading,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/cleaning`);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  const columns = [
    {
      header: "ID",
      accessorKey: "cleaning_id",
      cell: (info) => String(info.getValue()),
      maxSize: 25,
    },
    {
      header: "ID Drum",
      accessorKey: "id_drum",
      size: 150,
    },
    {
      header: "PIC",
      accessorKey: "pic",
      size: 200,
    },
    {
      header: "Workgroup",
      size: 75,
      accessorKey: "workgroup",
    },
    {
      header: "Date",
      accessorKey: "date_cleaning",
      size: 250,
      cell: (info) => moment(info.getValue()).format("DD MMM YYYY HH:mm"),
    },
    {
      header: "Vacuum Check",
      accessorKey: "parts",
      size: 75,
      cell: ({ row }) => {
        const part = row.original;
        return part?.parts[10]?.status;
      },
    },
    {
      header: "Rubber Band",
      accessorKey: "parts",
      size: 75,
      cell: ({ row }) => {
        const part = row.original;
        return part.parts[0].qty == "0" ? <p>-</p> : <p>{part.parts[0].qty}</p>;
      },
    },
    {
      header: "Spring Finger",
      accessorKey: "parts",
      size: 75,
      cell: ({ row }) => {
        const part = row.original;
        return part.parts[1].qty == "0" ? <p>-</p> : <p>{part.parts[1].qty}</p>;
      },
    },
    {
      header: "Bead Lock",
      accessorKey: "parts",
      size: 75,
      cell: ({ row }) => {
        const part = row.original;
        return part.parts[2].qty == "0" ? <p>-</p> : <p>{part.parts[2].qty}</p>;
      },
    },
    {
      header: "Shoulder Finger",
      accessorKey: "parts",
      size: 75,
      cell: ({ row }) => {
        const part = row.original;
        return part.parts[3].qty == "0" ? <p>-</p> : <p>{part.parts[3].qty}</p>;
      },
    },
    {
      header: "Turn Up Bladder",
      accessorKey: "parts",
      size: 50,
      cell: ({ row }) => {
        const part = row.original;
        return part.parts[4].qty == "0" ? <p>-</p> : <p>{part.parts[4].qty}</p>;
      },
    },
    {
      header: "Check & Valve",
      accessorKey: "parts",
      size: 75,
      cell: ({ row }) => {
        const part = row.original;
        return part.parts[5].qty == "0" ? <p>-</p> : <p>{part.parts[5].qty}</p>;
      },
    },
    {
      header: "Seal O Ring",
      accessorKey: "parts",
      size: 75,
      cell: ({ row }) => {
        const part = row.original;
        return part.parts[6].qty == "0" ? <p>-</p> : <p>{part.parts[6].qty}</p>;
      },
    },
    {
      header: "Bolt Disc",
      accessorKey: "parts",
      size: 75,
      cell: ({ row }) => {
        const part = row.original;
        return part.parts[7].qty == "0" ? <p>-</p> : <p>{part.parts[7].qty}</p>;
      },
    },
    {
      header: "Cylinder Spring",
      accessorKey: "parts",
      size: 75,
      cell: ({ row }) => {
        const part = row.original;
        return part.parts[8].qty == "0" ? <p>-</p> : <p>{part.parts[8].qty}</p>;
      },
    },
    {
      header: "Thread & Screw",
      accessorKey: "parts",
      size: 75,
      cell: ({ row }) => {
        const part = row.original;
        return part.parts[9].qty == "0" ? <p>-</p> : <p>{part.parts[9].qty}</p>;
      },
    },
    {
      header: "TOTAL",
      accessorKey: "parts",
      size: 50,
      cell: ({ row }) => {
        const part = row.original;
        const total =
          part.parts[0].qty +
          part.parts[1].qty +
          part.parts[2].qty +
          part.parts[3].qty +
          part.parts[4].qty +
          part.parts[5].qty +
          part.parts[6].qty +
          part.parts[7].qty +
          part.parts[8].qty +
          part.parts[9].qty;
        return <p>{total} ea</p>;
      },
    },

    {
      header: "Parts Change",
      accessorKey: "parts",
      size: 50,

      cell: ({ row }) => {
        const part = row.original;
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button size="sm" className="flex gap-2 items-center">
                View <BsEyeFill />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-[400px]">
              <ScrollArea className="h-[350px] w-full">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-xl">C/C Drum Part</p>
                  <p className="font-semibold text-lg">{part.id_drum}</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {part.parts
                      .map((part) => (
                        <div key={part.id} className="flex flex-col gap-1">
                          <p className="font-semibold">{part.name}</p>
                          <div className="flex gap-3">
                            <div className="flex flex-col gap-1">
                              <p>Status</p>
                              <p>Change</p>
                              <p>Change Qty.</p>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p>: {part.status}</p>
                              <p>: {part.change}</p>
                              <p>: {String(part.qty)} ea</p>
                            </div>
                          </div>
                        </div>
                      ))
                      .slice(0, 10)}
                  </div>
                </div>
              </ScrollArea>
            </PopoverContent>
          </Popover>
        );
      },
    },
  ];

  return <DataTable data={cleaning} columns={columns} page="cleaning" />;
}
