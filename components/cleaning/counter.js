"use client";
import { useState } from "react";
import { BiSolidPlusCircle, BiSolidMinusCircle } from "react-icons/bi";

export default function Counter({ min, max }) {
  const [qty, setQty] = useState(0);
  return (
    <div className="flex gap-1 items-center">
      <BiSolidMinusCircle
        onClick={() => {
          qty == min ? 0 : setQty(qty - 1);
        }}
        className="text-2xl cursor-pointer hover:text-zinc-500"
      ></BiSolidMinusCircle>
      <input
        type="text"
        name="qty"
        id="qty"
        className="w-10 p-2 rounded-md"
        value={qty}
        readOnly
      />
      <BiSolidPlusCircle
        onClick={() => {
          qty == max ? 1 : setQty(qty + 1);
        }}
        className="text-2xl cursor-pointer hover:text-zinc-500"
      ></BiSolidPlusCircle>
    </div>
  );
}
