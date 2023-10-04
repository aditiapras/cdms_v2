"use client";

import { globalHistory } from "@/lib/global-state/globalState";
import { useState } from "react";
import Change from "./change";
import Cleaning from "./cleaning";
export default function HistoryCleaning() {
  // const [history, setHistory] = useState("Change");

  const history = globalHistory((state) => state.history);
  const change = globalHistory((state) => state.change);
  const cleaning = globalHistory((state) => state.cleaning);

  return (
    <div className="flex flex-col w-full bg-zinc-50 h-full z-10">
      <div className="flex w-full gap-5 items-center border px-5 py-2 bg-white sticky top-14 z-10">
        <p className="font-semibold text-xl">History</p>
        {/* <select
          name="history"
          id="history"
          className="p-2 rounded-md bg-zinc-100 hover:bg-zinc-200 transition duration-200"
          onChange={(e) => setHistory(e.target.value)}
        >
          <option value={"Change"}>Change</option>
          <option value={"Cleaning"}>Cleaning</option>
        </select> */}
        <button
          onClick={change}
          className={`${
            history == "Change"
              ? "bg-zinc-950 text-white"
              : "hover:text-zinc-600 text-zinc-300"
          } px-3 py-1 border rounded-md`}
        >
          Change
        </button>
        <button
          onClick={cleaning}
          className={`${
            history == "Cleaning"
              ? "bg-zinc-950 text-white"
              : "hover:text-zinc-600 text-zinc-300"
          } px-3 py-1 border rounded-md`}
        >
          Cleaning
        </button>
      </div>
      <div className="w-full flex flex-col p-5">
        {history == "Change" && <Change />}
        {history == "Cleaning" && <Cleaning />}
      </div>
    </div>
  );
}
