import { VscRequestChanges } from "react-icons/vsc";

export default function Request() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-5 w-full px-5 py-2 border-b bg-zinc-50">
        <p className="font-semibold text-xl">Request</p>
      </div>
      <div className="w-full flex flex-col p-5">
        <button className="w-fit flex items-center gap-3 px-3 py-2 bg-zinc-950 text-white rounded-md hover:bg-zinc-700 active:scale-90 transition ease-in-out duration-200">
          Add Request <VscRequestChanges className="text-xl" />
        </button>
      </div>
    </div>
  );
}
