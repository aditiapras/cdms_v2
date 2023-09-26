import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMemo, useState } from "react";
import { BiLastPage, BiFirstPage } from "react-icons/bi";

export default function DataTable({ data: datas, columns }) {
  const data = useMemo(() => datas, []);

  const [sorting, setSorting] = useState([]);
  const [filter, setFilter] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: sorting,
      //   globalFilter: filter,
    },
    onSortingChange: setSorting,
    // onGlobalFilterChange: setFilter,
  });

  return (
    <div className="flex flex-col gap-5">
      {/* <input
        type="text"
        placeholder="Search"
        className="w-1/5 p-2 rounded-md border"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      /> */}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="border w-40"
                >
                  <p className="flex justify-between py-0.5 px-2 hover:cursor-pointer hover:bg-zinc-200 rounded-md">
                    <span>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>
                    <span>
                      {
                        { asc: "▲", desc: "▼" }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </span>
                  </p>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex gap-2">
        <button
          onClick={() => table.setPageIndex(0)}
          className="p-1 rounded-md border hover:border-zinc-900"
        >
          <BiFirstPage />
        </button>
        <button
          onClick={() => table.previousPage()}
          className="px-2 rounded-md border hover:border-zinc-900 disabled:text-zinc-500 disabled:hover:border-zinc-300 disabled:cursor-not-allowed"
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </button>
        <button
          onClick={() => table.nextPage()}
          className="px-2 rounded-md border hover:border-zinc-900 disabled:text-zinc-500 disabled:hover:border-zinc-300 disabled:cursor-not-allowed"
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="px-2 rounded-md border hover:border-zinc-900"
        >
          <BiLastPage />
        </button>
      </div>
    </div>
  );
}
