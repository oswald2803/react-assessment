"use client";

import Image from "next/image";
import Link from "next/link"
import { ConnectingAirports } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-60 bg-white shadow-md flex flex-col border-r-2 border-r-[#c0d0e0]">
        <div className="p-12">
          <Image
            src="logos/auxo.svg"
            width={640}
            height={134}
            alt="Logo Auxo"
          />
        </div>
        <nav className="flex-1 px-5 justify-center items-center">
          <ul className="space-y-4">
            <li>
              <Link
                href="/itineraries"
                className="flex gap-2 items-center justify-center text-center py-2 rounded-lg bg-[#ddf0f2] hover:bg-[#bce1e5] text-[#2acbd8] hover:text-[#1ab2c0]"
              >
                <ConnectingAirports></ConnectingAirports>Itineraries
              </Link>
            </li>
          </ul>
        </nav>
        <div className="px-5 py-4">
          <button className="w-full py-2 text-[#9ea0a0] border-t-2 border-t-[#00FF85] text-center">
            <Logout></Logout>Log out
          </button>
        </div>
      </div>

      <div className="flex-1 p-11 overflow-y-scroll h-screen">{children}</div>
    </div>
  );
}
