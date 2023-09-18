import { BiLoaderCircle } from "react-icons/bi";

export default function Spinner() {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen flex items-center justify-center bg-zinc-100">
      <div className="flex items-center justify-center gap-2 text-xl">
        <BiLoaderCircle className="animate-spin"></BiLoaderCircle>
        <p>Loading...</p>
      </div>
    </div>
  );
}
