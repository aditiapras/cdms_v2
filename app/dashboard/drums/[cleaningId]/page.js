"use client";
import moment from "moment-timezone";
import Link from "next/link";
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useFetch } from "@/lib/fetcher/fetchHelper";
import { redirect } from "next/navigation";
import { cleanDrumMonitoring, cleanDrums } from "@/lib/api-call/cleanHelper";
import { Button } from "@/components/ui/button";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";

export default function CleaningCC({ params }) {
  const [rbChange, setRbChange] = useState("");
  const [rbCondition, setRbCondition] = useState("");
  const [rbQty, setRbQty] = useState(0);
  const [sfChange, setSfChange] = useState("");
  const [sfCondition, setSfCondition] = useState("");
  const [sfQty, setSfQty] = useState(0);
  const [blChange, setBlChange] = useState("");
  const [blCondition, setBlCondition] = useState("");
  const [blQty, setBlQty] = useState(0);
  const [shfChange, setShfChange] = useState("");
  const [shfCondition, setShfCondition] = useState("");
  const [shfQty, setShfQty] = useState(0);
  const [tuChange, setTuChange] = useState("");
  const [tuCondition, setTuCondition] = useState("");
  const [tuQty, setTuQty] = useState(0);
  const [cvChange, setCvChange] = useState("");
  const [cvCondition, setCvCondition] = useState("");
  const [cvQty, setCvQty] = useState(0);
  const [sorChange, setSorChange] = useState("");
  const [sorCondition, setSorCondition] = useState("");
  const [sorQty, setSorQty] = useState(0);
  const [bdChange, setBdChange] = useState("");
  const [bdCondition, setBdCondition] = useState("");
  const [bdQty, setBdQty] = useState(0);
  const [csChange, setCsChange] = useState("");
  const [csCondition, setCsCondition] = useState("");
  const [csQty, setCsQty] = useState(0);
  const [tsChange, setTsChange] = useState("");
  const [tsCondition, setTsCondition] = useState("");
  const [tsQty, setTsQty] = useState(0);

  const { register, handleSubmit, control, reset } = useForm();

  const { fields } = useFieldArray({
    control,
    name: "parts",
  });

  const router = useRouter();

  const {
    data: drums,
    error,
    isLoading,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/drums?id=${params.cleaningId}`
  );

  const { data: session } = useSession();

  if (!session) {
    return redirect("/");
  }

  const onSubmit = async (res) => {
    const data = {
      id_drum: res.id_drum,
      pic: session?.user?.username,
      parts: [
        {
          name: "Rubber Band",
          qty: rbQty,
          change: rbChange,
          status: rbCondition,
        },
        {
          name: "Spring Finger",
          qty: sfQty,
          change: sfChange,
          status: sfCondition,
        },
        {
          name: "Bead Lock",
          qty: blQty,
          change: blChange,
          status: blCondition,
        },
        {
          name: "Shoulder Finger",
          qty: shfQty,
          change: shfChange,
          status: shfCondition,
        },
        {
          name: "Turn Up Bladder",
          qty: tuQty,
          change: tuChange,
          status: tuCondition,
        },
        {
          name: "Check & Valve",
          qty: cvQty,
          change: cvChange,
          status: cvCondition,
        },
        {
          name: "Seal O Ring",
          qty: sorQty,
          change: sorChange,
          status: sorCondition,
        },
        {
          name: "Bolt Disc",
          qty: bdQty,
          change: bdChange,
          status: bdCondition,
        },
        {
          name: "Cylinder Spring",
          qty: csQty,
          change: csChange,
          status: csCondition,
        },
        {
          name: "Thread & Screw",
          qty: tsQty,
          change: tsChange,
          status: tsCondition,
        },
      ],
    };
    console.log(data);
    const clean = await cleanDrums(data);
    const cleanDrum = await cleanDrumMonitoring(data);
    console.log(clean);
    console.log(cleanDrum);
    router.push("/dashboard/drums");
  };

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  return (
    <div className="w-full h-full bg-zinc-100 flex flex-col gap-5 p-5 items-center justify-center">
      <div className="flex justify-between gap-5 bg-white p-5 rounded-md shadow-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full p-3 gap-3 text-sm"
        >
          <p className="text-xl font-semibold">Cleaning Carcass Drum</p>
          <div className="flex gap-3">
            <p>ID Drum:</p>
            <input
              type="text"
              className="bg-white focus-visible:outline-none font-semibold"
              {...register("id_drum")}
              readOnly
              value={params.cleaningId}
            />
          </div>
          <div className="flex gap-3">
            <p>Cleaning Date:</p>
            <p className="font-semibold">
              {moment().local().format("DD-MMM-YYYY HH:mm")}
            </p>
          </div>
          <div className="grid grid-cols-4 font-semibold border-b text-center mt-5">
            <p className="">List Item</p>
            <p className="">OK/NG</p>
            <p className="">Ganti/Tidak</p>
            <p className="">Qty</p>
          </div>

          <div className="grid grid-cols-4 text-center">
            <input type="text" value={"Rubber Band"} readOnly />
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  rbCondition === "OK" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="rbcondition"
                  id={"rbok"}
                  onChange={() => setRbCondition("OK")}
                  required
                />
                <label htmlFor="rbok">OK</label>
              </div>
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  rbCondition === "NG" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="rbcondition"
                  id="rbng"
                  onChange={() => setRbCondition("NG")}
                  required
                />
                <label htmlFor="rbng">NG</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  rbChange === "Yes" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="rbchange"
                  id="rbchange"
                  onChange={() => setRbChange("Yes")}
                  required
                />
                <label htmlFor="rbchange">YES</label>
              </div>
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  rbChange === "No" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="rbchange"
                  id="rbnochange"
                  onChange={() => setRbChange("No")}
                  required
                />
                <label htmlFor="rbnochange">NO</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <button
                type="button"
                onClick={() => (rbQty <= 0 ? setRbQty(0) : setRbQty(rbQty - 1))}
              >
                <AiOutlineMinusCircle className="text-xl" />
              </button>
              <p className="text-center text-lg font-semibold">{rbQty}</p>
              <button
                type="button"
                onClick={() => (rbQty >= 5 ? setRbQty(5) : setRbQty(rbQty + 1))}
              >
                <AiFillPlusCircle className="text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 text-center">
            <input type="text" value={"Spring Finger"} readOnly />
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  sfCondition === "OK" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="sfcondition"
                  id={"sfok"}
                  onChange={() => setSfCondition("OK")}
                  required
                />
                <label htmlFor="sfok">OK</label>
              </div>
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  sfCondition === "NG" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="sfcondition"
                  id="sfng"
                  onChange={() => setSfCondition("NG")}
                  required
                />
                <label htmlFor="sfng">NG</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  sfChange === "Yes" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="sfchange"
                  id="sfchange"
                  onChange={() => setSfChange("Yes")}
                  required
                />
                <label htmlFor="sfchange">YES</label>
              </div>
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  sfChange === "No" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="sfchange"
                  id="sfnochange"
                  onChange={() => setSfChange("No")}
                  required
                />
                <label htmlFor="sfnochange">NO</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <button
                type="button"
                onClick={() => (sfQty <= 0 ? setSfQty(0) : setSfQty(sfQty - 1))}
              >
                <AiOutlineMinusCircle className="text-xl" />
              </button>
              <p className="text-center text-lg font-semibold">{sfQty}</p>
              <button
                type="button"
                onClick={() => (sfQty >= 5 ? setSfQty(5) : setSfQty(sfQty + 1))}
              >
                <AiFillPlusCircle className="text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 text-center">
            <input type="text" value={"Bead Lock"} readOnly />
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  blCondition === "OK" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="blcondition"
                  id={"blok"}
                  onChange={() => setBlCondition("OK")}
                  required
                />
                <label htmlFor="blok">OK</label>
              </div>
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  blCondition === "NG" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="blcondition"
                  id="blng"
                  onChange={() => setBlCondition("NG")}
                  required
                />
                <label htmlFor="blng">NG</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  blChange === "Yes" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="blchange"
                  id="blchange"
                  onChange={() => setBlChange("Yes")}
                  required
                />
                <label htmlFor="blchange">YES</label>
              </div>
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  blChange === "No" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="blchange"
                  id="blnochange"
                  onChange={() => setBlChange("No")}
                  required
                />
                <label htmlFor="blnochange">NO</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <button
                type="button"
                onClick={() => (blQty <= 0 ? setBlQty(0) : setBlQty(blQty - 1))}
              >
                <AiOutlineMinusCircle className="text-xl" />
              </button>
              <p className="text-center text-lg font-semibold">{blQty}</p>
              <button
                type="button"
                onClick={() => (blQty >= 5 ? setBlQty(5) : setBlQty(blQty + 1))}
              >
                <AiFillPlusCircle className="text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 text-center">
            <input type="text" value={"Shoulder Finger"} readOnly />
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  shfCondition === "OK" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="shfcondition"
                  id={"shfok"}
                  onChange={() => setShfCondition("OK")}
                  required
                />
                <label htmlFor="shfok">OK</label>
              </div>
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  shfCondition === "NG" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="shfcondition"
                  id="shfng"
                  onChange={() => setShfCondition("NG")}
                  required
                />
                <label htmlFor="shfng">NG</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  shfChange === "Yes" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="shfchange"
                  id="shfchange"
                  onChange={() => setShfChange("Yes")}
                  required
                />
                <label htmlFor="shfchange">YES</label>
              </div>
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  shfChange === "No" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="shfchange"
                  id="shfnochange"
                  onChange={() => setShfChange("No")}
                  required
                />
                <label htmlFor="shfnochange">NO</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <button
                type="button"
                onClick={() =>
                  shfQty <= 0 ? setShfQty(0) : setShfQty(shfQty - 1)
                }
              >
                <AiOutlineMinusCircle className="text-xl" />
              </button>
              <p className="text-center text-lg font-semibold">{shfQty}</p>
              <button
                type="button"
                onClick={() =>
                  shfQty >= 5 ? setShfQty(5) : setShfQty(shfQty + 1)
                }
              >
                <AiFillPlusCircle className="text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 text-center">
            <input type="text" value={"Turn Up Bladder"} readOnly />
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  tuCondition === "OK" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="tucondition"
                  id={"tuok"}
                  onChange={() => setTuCondition("OK")}
                  required
                />
                <label htmlFor="tuok">OK</label>
              </div>
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  tuCondition === "NG" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="tucondition"
                  id="tung"
                  onChange={() => setTuCondition("NG")}
                  required
                />
                <label htmlFor="tung">NG</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  tuChange === "Yes" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="tuchange"
                  id="tuchange"
                  onChange={() => setTuChange("Yes")}
                  required
                />
                <label htmlFor="tuchange">YES</label>
              </div>
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  tuChange === "No" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="tuchange"
                  id="tunochange"
                  onChange={() => setTuChange("No")}
                  required
                />
                <label htmlFor="tunochange">NO</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <button
                type="button"
                onClick={() => (tuQty <= 0 ? setTuQty(0) : setTuQty(tuQty - 1))}
              >
                <AiOutlineMinusCircle className="text-xl" />
              </button>
              <p className="text-center text-lg font-semibold">{tuQty}</p>
              <button
                type="button"
                onClick={() => (tuQty >= 5 ? setTuQty(5) : setTuQty(tuQty + 1))}
              >
                <AiFillPlusCircle className="text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 text-center">
            <input type="text" value={"Check & Valve"} readOnly />
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  cvCondition === "OK" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="cvcondition"
                  id={"cvok"}
                  onChange={() => setCvCondition("OK")}
                  required
                />
                <label htmlFor="cvok">OK</label>
              </div>
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  cvCondition === "NG" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="cvcondition"
                  id="cvng"
                  onChange={() => setCvCondition("NG")}
                  required
                />
                <label htmlFor="cvng">NG</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  cvChange === "Yes" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="cvchange"
                  id="cvchange"
                  onChange={() => setCvChange("Yes")}
                  required
                />
                <label htmlFor="cvchange">YES</label>
              </div>
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  cvChange === "No" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="cvchange"
                  id="cvnochange"
                  onChange={() => setCvChange("No")}
                  required
                />
                <label htmlFor="cvnochange">NO</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <button
                type="button"
                onClick={() => (cvQty <= 0 ? setCvQty(0) : setCvQty(cvQty - 1))}
              >
                <AiOutlineMinusCircle className="text-xl" />
              </button>
              <p className="text-center text-lg font-semibold">{cvQty}</p>
              <button
                type="button"
                onClick={() => (cvQty >= 5 ? setCvQty(5) : setCvQty(cvQty + 1))}
              >
                <AiFillPlusCircle className="text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 text-center">
            <input type="text" value={"Seal O Ring"} readOnly />
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  sorCondition === "OK" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="sorcondition"
                  id={"sorok"}
                  onChange={() => setSorCondition("OK")}
                  required
                />
                <label htmlFor="sorok">OK</label>
              </div>
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  sorCondition === "NG" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="sorcondition"
                  id="sorng"
                  onChange={() => setSorCondition("NG")}
                  required
                />
                <label htmlFor="sorng">NG</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  sorChange === "Yes" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="sorchange"
                  id="sorchange"
                  onChange={() => setSorChange("Yes")}
                  required
                />
                <label htmlFor="sorchange">YES</label>
              </div>
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  sorChange === "No" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="sorchange"
                  id="sornochange"
                  onChange={() => setSorChange("No")}
                  required
                />
                <label htmlFor="sornochange">NO</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <button
                type="button"
                onClick={() =>
                  sorQty <= 0 ? setSorQty(0) : setSorQty(sorQty - 1)
                }
              >
                <AiOutlineMinusCircle className="text-xl" />
              </button>
              <p className="text-center text-lg font-semibold">{sorQty}</p>
              <button
                type="button"
                onClick={() =>
                  sorQty >= 5 ? setSorQty(5) : setSorQty(sorQty + 1)
                }
              >
                <AiFillPlusCircle className="text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 text-center">
            <input type="text" value={"Bolt Disc"} readOnly />
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  bdCondition === "OK" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="bdcondition"
                  id={"bdok"}
                  onChange={() => setBdCondition("OK")}
                  required
                />
                <label htmlFor="bdok">OK</label>
              </div>
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  bdCondition === "NG" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="bdcondition"
                  id="bdng"
                  onChange={() => setBdCondition("NG")}
                  required
                />
                <label htmlFor="bdng">NG</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  bdChange === "Yes" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="bdchange"
                  id="bdchange"
                  onChange={() => setBdChange("Yes")}
                  required
                />
                <label htmlFor="bdchange">YES</label>
              </div>
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  bdChange === "No" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="bdchange"
                  id="bdnochange"
                  onChange={() => setBdChange("No")}
                  required
                />
                <label htmlFor="bdnochange">NO</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <button
                type="button"
                onClick={() => (bdQty <= 0 ? setBdQty(0) : setBdQty(bdQty - 1))}
              >
                <AiOutlineMinusCircle className="text-xl" />
              </button>
              <p className="text-center text-lg font-semibold">{bdQty}</p>
              <button
                type="button"
                onClick={() => (bdQty >= 5 ? setBdQty(5) : setBdQty(bdQty + 1))}
              >
                <AiFillPlusCircle className="text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 text-center">
            <input type="text" value={"Cylinder Spring"} readOnly />
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  csCondition === "OK" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="cscondition"
                  id={"csok"}
                  onChange={() => setCsCondition("OK")}
                  required
                />
                <label htmlFor="csok">OK</label>
              </div>
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  csCondition === "NG" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="cscondition"
                  id="csng"
                  onChange={() => setCsCondition("NG")}
                  required
                />
                <label htmlFor="csng">NG</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  csChange === "Yes" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="cschange"
                  id="cschange"
                  onChange={() => setCsChange("Yes")}
                  required
                />
                <label htmlFor="cschange">YES</label>
              </div>
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  csChange === "No" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="cschange"
                  id="csnochange"
                  onChange={() => setCsChange("No")}
                  required
                />
                <label htmlFor="csnochange">NO</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <button
                type="button"
                onClick={() => (csQty <= 0 ? setCsQty(0) : setCsQty(csQty - 1))}
              >
                <AiOutlineMinusCircle className="text-xl" />
              </button>
              <p className="text-center text-lg font-semibold">{csQty}</p>
              <button
                type="button"
                onClick={() => (csQty >= 5 ? setCsQty(5) : setCsQty(csQty + 1))}
              >
                <AiFillPlusCircle className="text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 text-center">
            <input type="text" value={"Thread and Screw"} readOnly />
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  tsCondition === "OK" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="tscondition"
                  id={"tsok"}
                  onChange={() => setTsCondition("OK")}
                  required
                />
                <label htmlFor="tsok">OK</label>
              </div>
              <div
                className={`flex gap-2 items-center p-2 border rounded-md font-semibold ${
                  tsCondition === "NG" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="tscondition"
                  id="tsng"
                  onChange={() => setTsCondition("NG")}
                  required
                />
                <label htmlFor="tsng">NG</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  tsChange === "Yes" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="tschange"
                  id="tschange"
                  onChange={() => setTsChange("Yes")}
                  required
                />
                <label htmlFor="tschange">YES</label>
              </div>
              <div
                className={`flex gap-2 items-center border rounded-md font-semibold p-2 ${
                  tsChange === "No" ? "bg-green-600 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="tschange"
                  id="tsnochange"
                  onChange={() => setTsChange("No")}
                  required
                />
                <label htmlFor="tsnochange">NO</label>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <button
                type="button"
                onClick={() => (tsQty <= 0 ? setTsQty(0) : setTsQty(tsQty - 1))}
              >
                <AiOutlineMinusCircle className="text-xl" />
              </button>
              <p className="text-center text-lg font-semibold">{tsQty}</p>
              <button
                type="button"
                onClick={() => (tsQty >= 5 ? setTsQty(5) : setTsQty(tsQty + 1))}
              >
                <AiFillPlusCircle className="text-xl" />
              </button>
            </div>
          </div>

          <div className="flex text-center w-full mt-5 gap-2">
            <Button variant="destructive" className="w-full" asChild>
              <Link href="/dashboard/drums">Cancel</Link>
            </Button>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
