"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [errorNik, setErrorNik] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nik || !password) {
      setErrorNik(true);
      setErrorPassword(true);
      return;
    } else {
      try {
        const res = await signIn("credentials", {
          nik,
          password,
          redirect: false,
        });
        if (res.error) {
          setError(true);
        } else {
          router.push("/dashboard");
        }
      } catch (error) {
        console.log("Something went wrong");
      }
    }
  };

  return (
    <>
      <main className="w-full min-h-screen flex flex-col items-center justify-center p-10 sm:px-20 md:px-0 xl:p-0 bg-zinc-10">
        <div className="p-8 flex flex-col gap-5 border rounded-md w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 bg-white">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">Sign In</p>
            <p className="text-xs text-zinc-400">
              Belum punya akun?{" "}
              <Link href="/register" className="underline hover:text-zinc-950">
                Sign Up
              </Link>
            </p>
            {error && (
              <p className="text-xs text-red-500 -mb-5 mt-2 bg-red-100 p-1 rounded-md">
                NIK/Password salah
              </p>
            )}
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
              className="px-2 py-1.5 bg-zinc-50 rounded-md border focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-zinc-400"
              onChange={(e) => {
                setNik(e.target.value), setErrorNik(false);
              }}
            />
            {errorNik && (
              <p className="text-xs text-red-500 bg-red-100 p-1 rounded-md">
                NIK harus diisi
              </p>
            )}

            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="px-2 py-1.5 bg-zinc-50 rounded-md border focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-zinc-400"
              onChange={(e) => {
                setPassword(e.target.value), setErrorPassword(false);
              }}
            />
            {errorPassword && (
              <p className="text-xs text-red-500 bg-red-100 p-1 rounded-md">
                Password harus diisi
              </p>
            )}

            <div className="flex gap-2 items-center mt-3">
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
              className="mt-7 text-sm bg-zinc-950 text-white py-2 rounded-md hover:bg-zinc-700 transition duration-200"
            >
              Sign In
            </button>
          </form>
        </div>
        <p className="stiky bottom-0 mt-5 text-xs text-zinc-400">
          Copyright © 2023 Hankook Tire Indonesia
        </p>
      </main>
    </>
  );
}
