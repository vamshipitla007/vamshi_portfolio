import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function TravelNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white">

        <h1 className="text-3xl font-bold">
          trxvl.
        </h1>

        <div className="hidden gap-10 md:flex">
          <a className="border-b border-white pb-1">Home</a>
          <a>Stays</a>
          <a>Flights</a>
          <a>Packages</a>
          <a className="font-semibold">
            Sign Up
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="bg-black/90 text-white md:hidden">
          <div className="flex flex-col gap-5 p-5">
            <a>Home</a>
            <a>Stays</a>
            <a>Flights</a>
            <a>Packages</a>
          </div>
        </div>
      )}
    </nav>
  );
}