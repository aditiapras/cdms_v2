"use client";
import { Button } from "@/components/ui/button";
import { globalHistory } from "@/lib/global-state/globalState";
import Change from "./change";
import Cleaning from "./cleaning";

export default function HistoryCleaning() {
  const history = globalHistory((state) => state.history);
  const change = globalHistory((state) => state.change);
  const cleaning = globalHistory((state) => state.cleaning);

  return (
    <div className="flex flex-col w-full bg-zinc-50 h-full z-10">
      <div className="flex w-full gap-5 items-center border px-5 py-2 bg-white sticky top-14 z-10">
        <p className="font-semibold text-xl">History</p>
        <Button onClick={change} variant={history == "Change" ? "" : "outline"}>
          Change
        </Button>
        <Button
          onClick={cleaning}
          variant={history == "Cleaning" ? "" : "outline"}
        >
          Cleaning
        </Button>
      </div>
      <div className="w-full flex flex-col p-5">
        {history == "Change" && <Change />}
        {history == "Cleaning" && <Cleaning />}
      </div>
    </div>
  );
}
