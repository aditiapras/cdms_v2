import { useFetch } from "@/lib/fetchHelper";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import moment from "moment-timezone";
import Spinner from "../ui/spinner";
import DataTable from "./data-table";

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
    },
    {
      header: "ID Drum",
      accessorKey: "id_drum",
    },
    {
      header: "PIC",
      accessorKey: "pic",
    },
    {
      header: "Date",
      accessorKey: "date_cleaning",
      cell: (info) => moment(info.getValue()).format("DD MMMM YYYY HH:mm"),
    },
    {
      header: "Parts Change",
      accessorKey: "parts",
      cell: ({ row }) => {
        const part = row.original;
        return (
          <Popover>
            <PopoverTrigger>
              <button className="px-5 py-1 border rounded-md hover:border-zinc-800">
                View
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-[400px]">
              <ScrollArea className="h-[350px] w-full">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-xl">C/C Drum Part</p>
                  <p className="font-semibold text-lg">{part.id_drum}</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {part.parts.map((part) => (
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
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </PopoverContent>
          </Popover>
        );
      },
    },
  ];

  return <DataTable data={cleaning} columns={columns} />;
}
