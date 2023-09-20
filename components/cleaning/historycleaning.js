import React from "react";

export default async function HistoryCleaning() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/cdms/cleaning`
  ).then((res) => res.json());
  return (
    <div className="flex p-5 w-full">
      <p>{JSON.stringify(data)}</p>
      HistoryCleaning
    </div>
  );
}
