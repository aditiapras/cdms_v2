"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast, Toaster } from "sonner";
import { BiLoaderCircle } from "react-icons/bi";

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const resetForm = () => {
    resetField("nik");
    resetField("username");
    resetField("password");
    resetField("workgroup");
  };

  const [show, setShow] = useState(false);
  const [getLoading, setGetLoading] = useState(false);

  const onLoading = (status) => {
    setGetLoading(true);
    setTimeout(() => {
      if (status == true) {
        toast.error("NIK sudah terdaftar");
        setGetLoading(false);
      } else {
        toast.success("Akun berhasil didaftarkan");
        setGetLoading(false);
        resetForm();
      }
    }, 2000);
  };

  const onSubmit = (data) => {
    try {
      axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_API}/api/register`,
        data,
      }).then((res) => {
        if (res.data.registered === false) {
          const status = true;
          onLoading(status);
        } else {
          const status = false;
          onLoading(status);
        }
      });
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return (
    <>
      <main className="w-full min-h-screen flex flex-col items-center justify-center p-10 sm:px-20 md:px-0 xl:p-0 bg-zinc-10">
        <Toaster position="top-center" richColors closeButton />
        <div className="p-8 flex flex-col gap-5 border rounded-md w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 bg-white">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">Create Account</p>
            <p className="text-xs text-zinc-400">
              Sudah punya akun?{" "}
              <Link href="/" className="underline hover:text-zinc-950">
                Sign In
              </Link>
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 mt-5"
          >
            <label htmlFor="nik" className="text-sm">
              NIK
            </label>
            <input
              type="text"
              name="nik"
              id="nik"
              placeholder="NIK"
              disabled={getLoading}
              className="px-2 py-1.5 bg-zinc-50 rounded-md border focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-zinc-400"
              {...register("nik", {
                required: "NIK tidak boleh kosong",
                minLength: 8,
                maxLength: 8,
              })}
            />
            {errors.nik && (
              <p className="text-xs text-red-500 -mt-2">{errors.nik.message}</p>
            )}
            {errors.nik?.type === "minLength" && (
              <p className="text-xs text-red-500 -mt-3">
                NIK minimal 8 karakter
              </p>
            )}
            {errors.nik?.type === "maxLength" && (
              <p className="text-xs text-red-500 -mt-3">
                NIK maksimal 8 karakter
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
              disabled={getLoading}
              className="px-2 py-1.5 bg-zinc-50 rounded-md border focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-zinc-400"
              {...register("username", {
                required: "Name tidak boleh kosong",
              })}
            />
            {errors.username && (
              <p className="text-xs text-red-500 -mt-2">
                {errors.username.message}
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
              disabled={getLoading}
              className="px-2 py-1.5 bg-zinc-50 rounded-md border focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-zinc-400"
              {...register("password", {
                required: "Password tidak boleh kosong",
              })}
            />
            {errors.password && (
              <p className="text-xs text-red-500 -mt-2">
                {errors.password.message}
              </p>
            )}

            <label htmlFor="workgroup" className="text-sm">
              Workgroup
            </label>
            <select
              name="workgroup"
              id="workgroup"
              disabled={getLoading}
              className="px-2 py-1.5 bg-zinc-50 rounded-md border focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-zinc-400"
              {...register("workgroup", {
                required: "Workgroup belum dipilih",
              })}
            >
              <option value="">Select Workgroup</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="NS">NS</option>
            </select>
            {errors.workgroup && (
              <p className="text-xs text-red-500 -mt-2">
                {errors.workgroup.message}
              </p>
            )}

            <div className="flex gap-2 items-center mt-3">
              <Checkbox id="show" onCheckedChange={() => setShow(!show)} />
              <Label htmlFor="show">Show Password</Label>
            </div>
            <button
              disabled={getLoading}
              className="mt-5 flex items-center justify-center px-4 py-2 bg-zinc-950 text-white rounded-md hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {getLoading && (
                <p className="flex items-center justify-center gap-2">
                  <BiLoaderCircle className="animate-spin" /> Loading...
                </p>
              )}
              {!getLoading && "Create Account"}
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
