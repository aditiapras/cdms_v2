import { useFetch } from "@/lib/fetchHelper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import moment from "moment-timezone";
import Spinner from "../ui/spinner";

export default function Change() {
  const { data, error, isLoading } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api/cdms/cleaning`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" text-left">Cleaning ID</TableHead>
            <TableHead className="">ID Drum</TableHead>
            <TableHead className="">PIC</TableHead>
            <TableHead className="text-left">View Details</TableHead>
            <TableHead className=" text-left">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.cleaning_id}</TableCell>
              <TableCell className="font-medium">{item.id_drum}</TableCell>
              <TableCell>{item.pic}</TableCell>
              <TableCell>
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
                        <p className="font-semibold text-lg">{item.id_drum}</p>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          {item.parts.map((part) => (
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
                                  <p>: {part.qty} ea</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollArea>
                  </PopoverContent>
                </Popover>
              </TableCell>
              <TableCell className="text-left">
                {moment(item.date_cleaning).format("DD/MM/YYYY HH:mm:ss")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
