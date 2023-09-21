import { useFetch } from "@/lib/fetchHelper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment-timezone";
import Spinner from "../ui/spinner";

export default function Change() {
  const { data, error, isLoading } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api/cdms/histories`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">ID Change</TableHead>
            <TableHead className="w-[200px]">ID Drum</TableHead>
            <TableHead>Machine</TableHead>
            <TableHead className="w-[80px]">Age</TableHead>
            <TableHead className="text-left">Reason</TableHead>
            <TableHead className="text-left">PIC</TableHead>
            <TableHead className="text-left">Type</TableHead>
            <TableHead className="text-left">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="font-medium">{item.id_drum}</TableCell>
              <TableCell>{item.building_mc}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell className="text-left">{item.reason}</TableCell>
              <TableCell className="text-left">{item.PIC}</TableCell>
              <TableCell className="text-left">{item.type}</TableCell>
              <TableCell className="text-left">
                {moment(item.date).format("DD MMMM YYYY HH:mm:ss")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
