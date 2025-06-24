"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#023548] h-20 flex items-center justify-between px-6 w-full">
      <div className="flex flex-col items-center space-x-3">
        {/* <div className="text-cyan-400 font-bold text-xl">XCRINO</div> */}
        <Image
          src="/xcrino.png"
          width={100}
          height={100}
          alt="Picture of the company"
        />
        <div className="text-[#db9407] text-sm ">
          {" "}
          <span className="text-xs text-white">Mandaean</span> KNOWLEDGE CENTRE
        </div>
      </div>
      <div className="bg-[#db9407] px-4 py-2 rounded flex items-center space-x-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src="/profile.png" alt="Praveen Vats" />
          <AvatarFallback>PV</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-white font-medium">Praveen Vats</span>
          <span className="text-white  text-xs">Admin</span>
        </div>
      </div>
    </header>
  );
}
