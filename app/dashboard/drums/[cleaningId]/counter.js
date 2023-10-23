"use client";

import { useState } from "react";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function Counter({ min, max }) {
  const [qty, setQty] = useState(0);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => {
          qty <= min ? setQty(min) : setQty(qty - 1);
        }}
        className="text-xl"
      >
        <AiOutlineMinusCircle />
      </button>
      <input
        type="number"
        readOnly
        value={qty}
        className="w-12 p-2 text-center"
      />
      <button
        onClick={() => {
          qty >= max ? setQty(max) : setQty(qty + 1);
        }}
        className="text-xl"
      >
        <AiFillPlusCircle />
      </button>
    </div>
  );
}
