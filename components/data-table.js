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
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import Select from "react-select";

export default function DataTable({
  data,
  columns,
  page,
  machine,
  drums,
  workgroup,
}) {
  const [sorting, setSorting] = useState([]);
  const [filter, setFilter] = useState("");
  const router = useRouter();
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState();

  const group = [
    { value: "NS", label: "NS" },
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
  ];

  const types = [
    { value: "Naik", label: "Naik" },
    { value: "Turun", label: "Turun" },
  ];

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
    const params = searchparams.get("page");
    const pageNumber = Number(searchparams.get("pagenumber"));

    setCurrentPage(pageNumber);

    if (params == "cleaning") {
      table.setPageIndex(pageNumber - 1);
      router.replace(`${pathname}?page=cleaning&pagenumber=${pageNumber || 1}`);
    } else {
      table.setPageIndex(pageNumber - 1);
      router.replace(`${pathname}?pagenumber=${pageNumber || 1}`);
    }
  }, [searchparams, router, table, currentPage, pathname]);

  return (
    <main className="flex flex-col gap-5">
      <div className="flex gap-2 items-center">
        <div className="grid gap-1">
          <label htmlFor="search" className="text-xs">
            Search
          </label>
          <input
            type="text"
            placeholder="Search"
            className="w-56 p-2 rounded-md border"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        {/* <div className="flex items-center gap-2">
          <div className="flex gap-2 items-end">
            {searchparams.get("page") == "cleaning" && (
              <div className="grid gap-1">
                <label htmlFor="workgroup" className="text-xs">
                  Workgroup
                </label>
                <Select
                  options={group}
                  className="w-32"
                  placeholder="Group"
                  onChange={(e) => {
                    table.setColumnFilters([
                      {
                        id: "workgroup",
                        value: e.value,
                      },
                    ]);
                  }}
                />
              </div>
            )}
            <div className="grid gap-1">
              <label htmlFor="workgroup" className="text-xs">
                ID Drum
              </label>
              <Select
                options={drums}
                className="w-44 text-sm"
                placeholder="Group"
                onChange={(e) => {
                  table.setColumnFilters([
                    {
                      id: "id_drum",
                      value: e.value,
                    },
                  ]);
                }}
              />
            </div>
            {searchparams.get("page") != "cleaning" && (
              <div className="grid gap-1">
                <label htmlFor="workgroup" className="text-xs">
                  Type
                </label>
                <Select
                  options={types}
                  className="w-28 text-sm"
                  placeholder="Group"
                  onChange={(e) => {
                    table.setColumnFilters([
                      {
                        id: "type",
                        value: e.value,
                      },
                    ]);
                  }}
                />
              </div>
            )}
            <button
              className="text-sm font-semibold"
              onClick={() => {
                table.resetColumnFilters();
              }}
            >
              clear
            </button>
          </div>
        </div> */}
      </div>

      <Table>
        <ScrollArea className="h-[550px] w-full">
          <TableHeader className="border">
            {table.getHeaderGroups().map((headerGroup, index) => (
              <TableRow key={index} className="border">
                {headerGroup.headers.map((header, index) => (
                  <TableHead
                    key={index}
                    onClick={header.column.getToggleSortingHandler()}
                    className="border hover:bg-zinc-200 hover:cursor-pointer sticky top-0 bg-zinc-100 text-center px-1"
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
            {table.getRowModel().rows.map((row, index) => (
              <TableRow key={index}>
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={index}
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
          onClick={() => {
            table.setPageIndex(0);
            if (searchparams.get("page") == "cleaning") {
              router.replace(`${pathname}?page=cleaning&pagenumber=${1}`);
            } else {
              router.replace(`${pathname}?pagenumber=${1}`);
              table.setPageIndex(0);
            }
          }}
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
                    } else if (
                      searchparams.get("page") == "change" ||
                      !searchparams.get("page")
                    ) {
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
          onClick={() => {
            if (searchparams.get("page") == "cleaning") {
              table.setPageIndex(table.getPageCount() - 1);
              router.replace(
                `${pathname}?page=cleaning&pagenumber=${table.getPageCount()}`
              );
            } else {
              router.replace(`${pathname}?pagenumber=${table.getPageCount()}`);
              table.setPageIndex(table.getPageCount() - 1);
            }
          }}
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
    </main>
  );
}
