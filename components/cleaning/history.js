"use client";
import { useState } from "react";
import Change from "./change";
import Cleaning from "./cleaning";
export default function HistoryCleaning() {
  const [history, setHistory] = useState("Change");
  return (
    <div className="flex flex-col w-full bg-zinc-50 h-full">
      <div className="flex w-full gap-5 items-center border px-5 py-2 bg-white sticky top-14">
        <p className="font-semibold text-xl">History</p>
        <select
          name="phase"
          id="phase"
          className="p-2 rounded-md bg-zinc-100 hover:bg-zinc-200 transition duration-200"
          onChange={(e) => setHistory(e.target.value)}
        >
          <option value="Change">Change</option>
          <option value="Cleaning">Cleaning</option>
        </select>
      </div>
      <div className="w-full flex flex-col p-5">
        {history == "Change" && <Change />}
        {history == "Cleaning" && <Cleaning />}
      </div>
    </div>
  );
}
