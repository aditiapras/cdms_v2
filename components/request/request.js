import { VscRequestChanges } from "react-icons/vsc";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RequestChange from "./requestChange";
import RequestCleaning from "./requestCleaning";

export default function Request() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-5 w-full px-5 py-2 border-b bg-zinc-50">
        <p className="font-semibold text-xl">Request</p>
      </div>
      <div className="w-full flex flex-col p-5">
        <Dialog>
          <DialogTrigger asChild>
            <div className="w-fit flex items-center gap-3 px-3 py-2 bg-zinc-950 text-white rounded-md hover:bg-zinc-700 active:scale-90 transition ease-in-out duration-200 hover:cursor-pointer">
              Add Request <VscRequestChanges className="text-xl" />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <Tabs defaultValue="change" className="sm:max-w-[425px]">
              <TabsList>
                <TabsTrigger value="change">Change C/C Drum</TabsTrigger>
                <TabsTrigger value="cleaning">Cleaning C/C Drum</TabsTrigger>
              </TabsList>
              <TabsContent value="change">
                <RequestChange />
              </TabsContent>
              <TabsContent value="cleaning">
                <RequestCleaning />
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
        <div className="flex flex-col gap-5 mt-5 border-t">
          <p className="mt-3">Request list</p>
        </div>
      </div>
    </div>
  );
}
