"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HeroSection from "@/app/student/common/hero-section";
import Image from "next/image";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Volume2,
  ChevronDown,
  LogIn,
  UserPlus,
  GraduationCap,
  Users,
} from "lucide-react";
import { useState } from "react";
import Footer from "@/app/student/common/footer";

const BeforeLogin = () => {
  const [date, setDate] = useState(new Date());

  const announcements = [
    {
      time: "Today at 3:00PM",
      title: "Upcoming Course Enrollment",
      description:
        "Enrollment for the July 2025 batch opens on June 20th. Limited seats available. Book your slot early!",
    },
    {
      time: "Today at 2:30PM",
      title: "New Course Launch",
      description:
        "New Course Alert: UI/UX Design Bootcamp now available. Starts July 5th. Enroll now!",
    },
    {
      time: "Today at 1:54PM",
      title: "Schedule Changes Course Enrollment",
      description:
        "Class timing for 'Advanced JavaScript' has been rescheduled to 5 PM (IST) starting June 18th.",
    },
    {
      time: "Today at 12:45PM",
      title: "Website Maintenance",
      description:
        "Scheduled Maintenance: The site will be unavailable on June 22nd from 1 AM to 5 AM IST. Please save your work in advance.",
    },
  ];

  return (
    <div>
      <div className="h-14 flex items-center justify-center border-b border-black/10">
        <Image
          src="/xcrino.png"
          alt="logo"
          width={100}
          height={50}
          className="mt-4"
        />
      </div>
      <HeroSection />
      <div className="px-4 mx-3 sm:mx-5 md:mx-8 mt-8">
        <div className="flex items-center justify-between font-medium">
          <div className="flex space-x-3">
            {/* Sign In Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-6 py-3 sm:px-8 sm:py-4 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
                >
                  <LogIn className="h-4 w-4" />
                  Sign In
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border-0 shadow-2xl rounded-xl p-2 mt-2">
                <DropdownMenuItem asChild>
                  <Link
                    href="/auth/login"
                    className="cursor-pointer rounded-lg p-3 hover:bg-blue-50 transition-colors duration-150"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Sign in as Student
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Access your courses and assignments
                        </p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/teacher/auth/teacherlogin"
                    className="cursor-pointer rounded-lg p-3 hover:bg-green-50 transition-colors duration-150"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Sign in as Teacher
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Manage your classes and students
                        </p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Register Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 sm:px-8 sm:py-4 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
                >
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border-0 shadow-2xl rounded-xl p-2 mt-2">
                <DropdownMenuItem asChild>
                  <Link
                    href="/auth/signup"
                    className="cursor-pointer rounded-lg p-3 hover:bg-blue-50 transition-colors duration-150"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 ro  unded-full bg-blue-100 flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Sign Up as Student
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Start your learning journey
                        </p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/teacher"
                    className="cursor-pointer rounded-lg p-3 hover:bg-green-50 transition-colors duration-150"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Sign Up as Teacher
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Share your knowledge with students
                        </p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex space-x-2">
            <Button
              size="sm"
              className="rounded-full bg-green-610 sm:px-7 sm:py-6 text-white"
            >
              Donate
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="sm"
                  className="rounded-full sm:px-7 sm:py-6 border border-gray-9 flex items-center gap-2"
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
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Button
              size="sm"
              className="rounded-full sm:px-7 sm:py-6 border border-gray-9"
            >
              Contact
            </Button>
          </div>
        </div>
        <div className="relative w-full mt-10 z-10">
          <Image
            src="/beforelogin.png"
            alt="Working guy banner"
            width={1200}
            height={600}
            className="w-full h-auto rounded-xl"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <Button className="bg-stone-400 rounded-4xl sm:w-15 sm:h-15 sm:rounded-full">
              <Play fill="#FFFFFF" className="text-white" />
            </Button>
          </div>

          <div className="absolute bottom-2 sm:bottom-10 left-4 sm:left-10 text-white text-xs sm:text-lg md:text-xl lg:text-4xl z-20">
            <p>Transforming Ideas Into Reality</p>
            <p>Watch how we're making a difference in communities worldwide</p>
          </div>
        </div>
      </div>

      <div className="-mt-33 sm:-mt-60 md:-mt-80 lg:-mt-110 bg-black h-60 sm:h-80 md:h-110 lg:h-140 z-0 relative flex items-center justify-center">
        <div className="absolute bottom-8 sm:bottom-5 md:bottom-9 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <Button size="sm" className=" border-1 border-white text-white">
            <ChevronLeft />
          </Button>
          <Button size="sm" className="bg-sky-600 text-white">
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* Announcements Section */}
      <div className=" ">
        <div className="bg-black p-18">
          <div className="flex items-center gap-2 mb-6">
            <Volume2 className="text-white h-5 w-5" />
            <h2 className="text-white text-lg font-medium">Announcements</h2>
          </div>

          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="border-b border-gray-800 pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="text-gray-400 text-sm whitespace-nowrap">
                    {announcement.time}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {announcement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              variant="link"
              className="text-gray-400 hover:text-white p-0"
            >
              See all →
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BeforeLogin;
