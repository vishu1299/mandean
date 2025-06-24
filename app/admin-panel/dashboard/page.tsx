"use client";

import Image from "next/image";

export default function MainContent() {
  return (
    <main className="flex-1 bg-[#023548] p-6 flex items-center justify-center">
      <div className="text-center">
        {/* XCRINO Logo */}
        <div className="mb-8">
          <div className="relative inline-block">
            {/* Stylized figure icon */}
            {/* <h1 className="text-6xl font-bold text-blue-300 tracking-wider">
              XCRINO
            </h1> */}
            <Image
              src="/xcrino.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>

        {/* Subtitle */}
        <h2 className="text-4xl font-light text-white">
          Mandaean{" "}
          <span className="text-orange-400 font-semibold">
            KNOWLEDGE CENTRE
          </span>
        </h2>
      </div>
    </main>
  );
}
