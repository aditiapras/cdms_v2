"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
export default function CreateAccount() {
  const [nik, setNik] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [workgroup, setWorkgroup] = useState("");
  const [show, setShow] = useState(false);
  const [exist, setExist] = useState(false);
  const [errorNik, setErrorNik] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorWorkgroup, setErrorWorkgroup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nik || !username || !password || !workgroup) {
      setErrorNik(true);
      setErrorUsername(true);
      setErrorPassword(true);
      setErrorWorkgroup(true);
      return;
    }
    setErrorNik(false);
    setErrorUsername(false);
    setErrorPassword(false);
    setErrorWorkgroup(false);

    const data = { nik, username, password, workgroup };
    console.log(data);
    try {
      axios.post("/api/register", data).then((res) => {
        if (res.data.registered == false) {
          setExist(true);
        }
      });
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center p-5 xl:p-0 bg-zinc-10">
      <div className="p-8 flex flex-col gap-5 border rounded-md w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">Create Account</p>
          <p className="text-xs text-zinc-500">
            Already have account?{" "}
            <Link href="/" className="underline hover:text-zinc-950">
              Sign In
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
          <label htmlFor="nik" className="text-sm">
            NIK
          </label>
          <input
            type="text"
            name="nik"
            id="nik"
            placeholder="NIK"
            className="p-2 bg-zinc-100 rounded-md"
            onChange={(e) => {
              setNik(e.target.value), setErrorNik(false);
            }}
          />
          {errorNik && <p className="text-xs text-red-500">NIK harus diisi</p>}
          {exist && (
            <p className="text-xs text-red-500 bg-red-100 px-2 rounded-md py-0.5">
              NIK sudah terdaftar
            </p>
          )}
          <label htmlFor="username" className="text-sm">
            Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Name"
            className="p-2 bg-zinc-100 rounded-md"
            onChange={(e) => {
              setUsername(e.target.value), setErrorUsername(false);
            }}
          />
          {errorUsername && (
            <p className="text-xs text-red-500">Username harus diisi</p>
          )}

          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            className="p-2 bg-zinc-100 rounded-md"
            onChange={(e) => {
              setPassword(e.target.value), setErrorPassword(false);
            }}
          />
          {errorPassword && (
            <p className="text-xs text-red-500">Password harus diisi</p>
          )}
          <label htmlFor="workgroup" className="text-sm">
            Workgroup
          </label>
          <select
            name="workgroup"
            id="workgroup"
            className="p-2 bg-zinc-100 rounded-md"
            onChange={(e) => {
              setWorkgroup(e.target.value), setErrorWorkgroup(false);
            }}
          >
            <option value="">Select Workgroup</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="NS">NS</option>
          </select>
          {errorWorkgroup && (
            <p className="text-xs text-red-500">Workgroup belum dipilih</p>
          )}
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="show"
              id="show"
              onChange={() => setShow(!show)}
            />
            <label htmlFor="show" className="text-sm">
              Show Password
            </label>
          </div>
          <button
            type="submit"
            className="mt-7 text-sm bg-zinc-950 text-white py-1.5 rounded-md hover:bg-zinc-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}
