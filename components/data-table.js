import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getGroupedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { BiLastPage, BiFirstPage } from "react-icons/bi";
import { Button } from "./ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DataTable({ data, columns, page }) {
  const [sorting, setSorting] = useState([]);
  const [filter, setFilter] = useState("");
  const router = useRouter();
  const searchparams = useSearchParams();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getGroupedRowModel: getGroupedRowModel(),

    state: {
      sorting: sorting,
      globalFilter: filter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilter,
  });

  useEffect(() => {
    const params = searchparams.get("pagenumber");
    if (searchparams.get("page") == "cleaning") {
      table.setPageIndex(params - 1);
      router.replace(
        `/dashboard/history?page=cleaning&pagenumber=${params || 1}`
      );
    } else if (searchparams.get("page") == "") {
      table.setPageIndex(params - 1);
      router.replace(`/dashboard/history?pagenumber=${params || 1}`);
    }
  }, [searchparams, router, table]);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-1/5 p-2 rounded-md border"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      {/* <div className="grid grid-cols-8">
        <div className="flex gap-2 items-center">
          <select
            name="building_mc"
            id="building_mc"
            onChange={(e) => {
              table.setColumnFilters([
                {
                  id: "building_mc",
                  value: e.target.value,
                },
              ]);
            }}
          >
            {table.getFilteredRowModel().rows.map((row) => (
              <option key={row.id} value={row.original.building_mc}>
                {row.original.building_mc}
              </option>
            ))}
          </select>
          <button onClick={() => table.resetColumnFilters()}>X</button>
        </div>
      </div> */}
      <Table>
        <ScrollArea className="h-[550px] w-full rounded-md border">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="border p-0 hover:bg-zinc-200 hover:cursor-pointer sticky -top-0.5 bg-zinc-100"
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
        </ScrollArea>
      </Table>
      <div className="flex gap-2 items-center">
        <Button
          size="icon"
          className="text-2xl"
          variant="outline"
          onClick={() => table.setPageIndex(0)}
        >
          <BiFirstPage />
        </Button>
        <div className="flex gap-3">
          {table
            .getPageOptions()
            .slice(
              table.getState().pagination.pageIndex <= 1
                ? 0
                : table.getState().pagination.pageIndex - 2,
              table.getState().pagination.pageIndex <= 1
                ? 5
                : table.getState().pagination.pageIndex + 3
            )
            .map((page, index) => {
              const active = table.getState().pagination.pageIndex === page;
              return (
                <button
                  key={index}
                  onClick={() => {
                    table.setPageIndex(page);
                    if (searchparams.get("page") == "cleaning") {
                      router.replace(
                        `/dashboard/history?page=cleaning&pagenumber=${
                          page + 1
                        }`
                      );
                    } else {
                      router.replace(
                        `/dashboard/history?pagenumber=${page + 1}`
                      );
                    }
                  }}
                  className={
                    active
                      ? "text-white p-2 rounded-md bg-zinc-300 w-10 transition-all"
                      : " hover:text-white p-2 rounded-md bg-zinc-zinc-300 w-10 hover:bg-zinc-400 transition-all"
                  }
                >
                  {page + 1}
                </button>
              );
            })}
        </div>
        <Button
          size="icon"
          className="text-2xl"
          variant="outline"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <BiLastPage />
        </Button>
        <p>
          Total page: <span className="font-bold">{table.getPageCount()}</span>
        </p>
        <p>
          Current page: {""}
          <span className="font-bold">
            {table.getState().pagination.pageIndex + 1}
          </span>
        </p>
        <div className="flex items-center gap-2">
          <p>Data per page:</p>
          <select
            name="data"
            id="data"
            onChange={(e) => {
              table.setPageSize(e.target.value);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
    </div>
  );
}
