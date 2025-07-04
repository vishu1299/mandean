"use client";
import Image from "next/image";
// import { Search } from 'lucide-react'
import Search from "@/components/ui/input-search";
import DonateButton from "../../_components/donate";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

type UploadItem = {
  img: string;
};

type LibraryItem = {
  title: string;
  count: number;
};

const recentUploads: UploadItem[] = [
  { img: "/recentUploads/one.png" },
  { img: "/recentUploads/two.png" },
  { img: "/recentUploads/three.png" },
  { img: "/recentUploads/four.png" },
];

const libraryItems: LibraryItem[] = [
  { title: "Getting Started", count: 12 },
  { title: "Frontend Development", count: 25 },
  { title: "Backend Development", count: 18 },
  { title: "UI/UX", count: 15 },
  { title: "Mobile development", count: 20 },
];

const Sidebar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white rounded-lg px-8">
      <div className="flex gap-2 justify-end">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size="sm"
              className="rounded-lg bg-blue-500 text-white  border border-gray-9 flex items-center gap-2"
            >
              <CalendarIcon className="h-4 w-4" />
              Calendar
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white" align="end">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              required
            />
          </PopoverContent>
        </Popover>
        <div className="flex justify-end mb-4">
          <DonateButton />
        </div>
        <Button
          size="sm"
          className="bg-black text-white sm:size-sm md:size-md lg:size-xl xl:size-2xl rounded-md"
        >
          Contact
        </Button>
      </div>

      <Search className="border-none shadow-none bg-gray-100" />

      <div className="mb-6">
        <h2 className="text-lg sm:text-2xl">Library</h2>
        <ul className="mt-4 space-y-2">
          {libraryItems.map((item, index) => (
            <li
              key={index}
              className="pl-3 flex justify-between items-start space-y-5"
            >
              <span>{item.title}</span>
              <span className="text-gray-500">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg sm:text-2xl mb-3">Recent Uploads</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-7">
          {recentUploads.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Image
                src={item.img}
                alt="Recent Upload"
                width={120}
                height={80}
                className="rounded-md"
              />
              <div>
                <p className="">Advanced CSS Techniques</p>
                <p className="text-gray-500">Added 2 days ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
