"use client";

import Header from "./_components/header/page";
import Sidebar from "./_components/sidebar/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Header />

      <div className="flex ">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="p-4  flex-1">{children}</main>
      </div>
    </div>
  );
}
