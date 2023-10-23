import { useFetch } from "@/lib/fetcher/fetchHelper";
import moment from "moment-timezone";
import Spinner from "../../ui/spinner";
import DataTable from "../../data-table";

export default function Change() {
  const status = "change";
  const {
    data: change,
    error,
    isLoading,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/histories`);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  /** @type import("@tanstack/react-table").ColumnDef<any> */

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      cell: (info) => String(info.getValue()),
      maxSize: 40,
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
      header: "Age",
      accessorKey: "age",
      cell: (info) => String(info.getValue()),
    },
    {
      header: "Reason",
      accessorKey: "reason",
    },
    {
      header: "PIC",
      accessorKey: "PIC",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Date",
      accessorKey: "date",
      cell: (info) => moment(info.getValue()).format("DD MMMM YYYY HH:mm"),
    },
  ];

  return <DataTable data={change} columns={columns} page={status} />;
}
