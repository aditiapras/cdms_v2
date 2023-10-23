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
import { Button } from "./ui/button";

export default function DataTable({ data: datas, columns, page }) {
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
      // globalFilter: filter,
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
                  className="border p-0 hover:bg-zinc-200 hover:cursor-pointer"
                  style={{
                    width: header.column.getSize(),
                  }}
                >
                  <p className="flex justify-between px-2">
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
                <TableCell
                  key={cell.id}
                  className={`border ${
                    page == "change" ? "p-4" : "px-2 py-1"
                  }  text-sm`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex gap-2">
        <Button
          size="icon"
          className="text-2xl"
          variant="outline"
          onClick={() => table.setPageIndex(0)}
        >
          <BiFirstPage />
        </Button>
        <Button
          size="icon"
          className="text-sm"
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </Button>
        <Button
          size="icon"
          className="text-sm"
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
        <Button
          size="icon"
          className="text-2xl"
          variant="outline"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <BiLastPage />
        </Button>
      </div>
    </div>
  );
}
