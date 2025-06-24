"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Users,
  BookOpen,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

interface Student {
  id: number;
  name: string;
  email: string;
  mobile: string;
  state: string;
  registerDate: string;
  enrolledCourses: string[];
  enrolledLiveClass: string[];
  manualAccess: boolean;
  totalCourses: number;
  completedCourses: number;
  progress: number;
}

const studentsData: Student[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    mobile: "+91 9876543210",
    state: "Delhi",
    registerDate: "26-05-2022 17:06 PM",
    enrolledCourses: ["Web Development", "React Basics"],
    enrolledLiveClass: [],
    manualAccess: true,
    totalCourses: 2,
    completedCourses: 1,
    progress: 50,
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya.singh@gmail.com",
    mobile: "+91 8765432109",
    state: "Mumbai",
    registerDate: "26-05-2022 17:06 PM",
    enrolledCourses: ["Digital Marketing"],
    enrolledLiveClass: [],
    manualAccess: true,
    totalCourses: 1,
    completedCourses: 1,
    progress: 100,
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit.kumar@gmail.com",
    mobile: "+91 7654321098",
    state: "Bangalore",
    registerDate: "26-05-2022 17:06 PM",
    enrolledCourses: ["Python Programming"],
    enrolledLiveClass: ["finance"],
    manualAccess: true,
    totalCourses: 1,
    completedCourses: 0,
    progress: 75,
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha.patel@gmail.com",
    mobile: "+91 6543210987",
    state: "Gujarat",
    registerDate: "26-05-2022 17:06 PM",
    enrolledCourses: ["Data Science", "Machine Learning"],
    enrolledLiveClass: ["finance"],
    manualAccess: true,
    totalCourses: 2,
    completedCourses: 1,
    progress: 60,
  },
  {
    id: 5,
    name: "Vikash Gupta",
    email: "vikash.gupta@gmail.com",
    mobile: "+91 5432109876",
    state: "UP",
    registerDate: "26-05-2022 17:06 PM",
    enrolledCourses: ["Java Fundamentals"],
    enrolledLiveClass: [],
    manualAccess: true,
    totalCourses: 1,
    completedCourses: 0,
    progress: 30,
  },
  {
    id: 6,
    name: "Anita Verma",
    email: "anita.verma@gmail.com",
    mobile: "+91 4321098765",
    state: "Rajasthan",
    registerDate: "26-05-2022 17:06 PM",
    enrolledCourses: ["Graphic Design"],
    enrolledLiveClass: [],
    manualAccess: true,
    totalCourses: 1,
    completedCourses: 1,
    progress: 100,
  },
  {
    id: 7,
    name: "Rohit Agarwal",
    email: "rohit.agarwal@gmail.com",
    mobile: "+91 3210987654",
    state: "Haryana",
    registerDate: "27-05-2022 10:30 AM",
    enrolledCourses: ["Mobile App Development"],
    enrolledLiveClass: ["finance", "marketing"],
    manualAccess: false,
    totalCourses: 1,
    completedCourses: 0,
    progress: 45,
  },
  {
    id: 8,
    name: "Kavya Reddy",
    email: "kavya.reddy@gmail.com",
    mobile: "+91 2109876543",
    state: "Hyderabad",
    registerDate: "28-05-2022 14:15 PM",
    enrolledCourses: ["UI/UX Design", "Figma Mastery"],
    enrolledLiveClass: [],
    manualAccess: true,
    totalCourses: 2,
    completedCourses: 2,
    progress: 100,
  },
  {
    id: 9,
    name: "Arjun Mehta",
    email: "arjun.mehta@gmail.com",
    mobile: "+91 1098765432",
    state: "Chennai",
    registerDate: "29-05-2022 09:45 AM",
    enrolledCourses: ["Blockchain Development"],
    enrolledLiveClass: ["finance"],
    manualAccess: true,
    totalCourses: 1,
    completedCourses: 0,
    progress: 80,
  },
  {
    id: 10,
    name: "Pooja Jain",
    email: "pooja.jain@gmail.com",
    mobile: "+91 0987654321",
    state: "Pune",
    registerDate: "30-05-2022 16:20 PM",
    enrolledCourses: ["Content Writing", "SEO"],
    enrolledLiveClass: ["marketing"],
    manualAccess: false,
    totalCourses: 2,
    completedCourses: 1,
    progress: 65,
  },
  {
    id: 11,
    name: "Karan Singh",
    email: "karan.singh@gmail.com",
    mobile: "+91 9876543211",
    state: "Chandigarh",
    registerDate: "31-05-2022 11:30 AM",
    enrolledCourses: ["Cloud Computing", "AWS"],
    enrolledLiveClass: [],
    manualAccess: true,
    totalCourses: 2,
    completedCourses: 1,
    progress: 90,
  },
  {
    id: 12,
    name: "Ritu Sharma",
    email: "ritu.sharma@gmail.com",
    mobile: "+91 8765432110",
    state: "Jaipur",
    registerDate: "01-06-2022 13:45 PM",
    enrolledCourses: ["Photography", "Video Editing"],
    enrolledLiveClass: ["finance", "design"],
    manualAccess: true,
    totalCourses: 2,
    completedCourses: 0,
    progress: 25,
  },
  {
    id: 13,
    name: "Deepak Yadav",
    email: "deepak.yadav@gmail.com",
    mobile: "+91 7654321099",
    state: "Bihar",
    registerDate: "02-06-2022 08:20 AM",
    enrolledCourses: ["Cybersecurity", "Ethical Hacking"],
    enrolledLiveClass: ["technology"],
    manualAccess: true,
    totalCourses: 2,
    completedCourses: 1,
    progress: 70,
  },
  {
    id: 14,
    name: "Meera Nair",
    email: "meera.nair@gmail.com",
    mobile: "+91 6543210988",
    state: "Kerala",
    registerDate: "03-06-2022 15:10 PM",
    enrolledCourses: ["Digital Art", "Animation"],
    enrolledLiveClass: ["design"],
    manualAccess: true,
    totalCourses: 2,
    completedCourses: 2,
    progress: 100,
  },
  {
    id: 15,
    name: "Suresh Patel",
    email: "suresh.patel@gmail.com",
    mobile: "+91 5432109877",
    state: "Madhya Pradesh",
    registerDate: "04-06-2022 12:25 PM",
    enrolledCourses: ["Business Analytics"],
    enrolledLiveClass: ["finance", "business"],
    manualAccess: false,
    totalCourses: 1,
    completedCourses: 0,
    progress: 40,
  },
];

export default function StudentManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [stateFilter, setStateFilter] = useState("all");

  // Filter students based on search term and state
  const filteredStudents = useMemo(() => {
    let filtered = studentsData;

    // Filter by state
    if (stateFilter !== "all") {
      filtered = filtered.filter((student) => student.state === stateFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (student) =>
          student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.mobile.includes(searchTerm) ||
          student.state.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, stateFilter]);

  // Calculate pagination
  const totalEntries = filteredStudents.length;
  const entriesPerPageNum = Number.parseInt(entriesPerPage);
  const totalPages = Math.ceil(totalEntries / entriesPerPageNum);
  const startIndex = (currentPage - 1) * entriesPerPageNum;
  const endIndex = Math.min(startIndex + entriesPerPageNum, totalEntries);
  const currentEntries = filteredStudents.slice(startIndex, endIndex);

  // Calculate stats
  const totalCourses = filteredStudents.reduce(
    (sum, student) => sum + student.totalCourses,
    0
  );
  const completedCourses = filteredStudents.reduce(
    (sum, student) => sum + student.completedCourses,
    0
  );
  const averageProgress = Math.round(
    filteredStudents.reduce((sum, student) => sum + student.progress, 0) /
      filteredStudents.length
  );

  const getProgressBar = (progress: number) => {
    const color =
      progress >= 80
        ? "bg-green-500"
        : progress >= 50
        ? "bg-yellow-500"
        : "bg-red-500";
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };

  const getStateBadge = (state: string) => {
    const stateColors = {
      Delhi: "bg-purple-100 text-purple-800",
      Mumbai: "bg-blue-100 text-blue-800",
      Bangalore: "bg-green-100 text-green-800",
      Gujarat: "bg-orange-100 text-orange-800",
      UP: "bg-red-100 text-red-800",
      Rajasthan: "bg-pink-100 text-pink-800",
      Haryana: "bg-indigo-100 text-indigo-800",
      Hyderabad: "bg-cyan-100 text-cyan-800",
      Chennai: "bg-teal-100 text-teal-800",
      Pune: "bg-lime-100 text-lime-800",
      Chandigarh: "bg-yellow-100 text-yellow-800",
      Jaipur: "bg-rose-100 text-rose-800",
      Bihar: "bg-violet-100 text-violet-800",
      Kerala: "bg-emerald-100 text-emerald-800",
      "Madhya Pradesh": "bg-amber-100 text-amber-800",
    };

    return (
      <span
        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
          stateColors[state as keyof typeof stateColors] ||
          "bg-gray-100 text-gray-800"
        }`}
      >
        {state}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="w-full mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Command className="w-6 h-6 text-gray-600" />
          <span className="text-gray-800 font-semibold text-xl"> student</span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Students
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredStudents.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-xl">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Enrollments
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalCourses}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-xl">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Completed Courses
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {completedCourses}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Avg Progress
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {averageProgress}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-8">STUDENT</h2>

            {/* Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 font-semibold">
                    Show
                  </span>
                  <Select
                    value={entriesPerPage}
                    onValueChange={setEntriesPerPage}
                  >
                    <SelectTrigger className="w-24 h-11 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-gray-600 font-semibold">
                    entries
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 font-semibold">
                    State:
                  </span>
                  <Select value={stateFilter} onValueChange={setStateFilter}>
                    <SelectTrigger className="w-36 h-11 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All States</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Mumbai">Mumbai</SelectItem>
                      <SelectItem value="Bangalore">Bangalore</SelectItem>
                      <SelectItem value="Gujarat">Gujarat</SelectItem>
                      <SelectItem value="UP">UP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 font-semibold">
                  Search:
                </span>
                <Input
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 h-11 rounded-xl"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-2xl">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-gray-50 hover:bg-gray-50">
                    <TableHead className="w-16 min-w-[60px] text-gray-800 font-bold py-6 px-8 rounded-tl-2xl">
                      #
                    </TableHead>
                    <TableHead className="min-w-[180px] text-gray-800 font-bold py-6 px-8">
                      Name
                    </TableHead>
                    <TableHead className="min-w-[220px] text-gray-800 font-bold py-6 px-8">
                      Email
                    </TableHead>
                    <TableHead className="min-w-[140px] text-gray-800 font-bold py-6 px-8">
                      Mobile
                    </TableHead>
                    <TableHead className="min-w-[120px] text-gray-800 font-bold py-6 px-8">
                      State
                    </TableHead>
                    <TableHead className="min-w-[180px] text-gray-800 font-bold py-6 px-8">
                      Register Date
                    </TableHead>
                    <TableHead className="min-w-[180px] text-gray-800 font-bold py-6 px-8">
                      Enrolled courses
                    </TableHead>
                    <TableHead className="min-w-[160px] text-gray-800 font-bold py-6 px-8">
                      Enrolled Live Class
                    </TableHead>
                    <TableHead className="min-w-[140px] text-gray-800 font-bold py-6 px-8">
                      Manual Access
                    </TableHead>
                    <TableHead className="min-w-[100px] text-gray-800 font-bold py-6 px-8 rounded-tr-2xl">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentEntries.length > 0 ? (
                    currentEntries.map((student, index) => (
                      <TableRow
                        key={student.id}
                        className={`${
                          index % 2 === 1 ? "bg-gray-50" : "bg-white"
                        } hover:bg-blue-50 transition-all duration-200`}
                      >
                        <TableCell className="text-gray-600 py-6 px-8 font-bold text-lg">
                          {startIndex + index + 1}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()}
                            </div>
                            <span className="text-gray-800 font-semibold">
                              {student.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-600 py-6 px-8 text-sm">
                          {student.email}
                        </TableCell>
                        <TableCell className="text-gray-600 py-6 px-8">
                          {student.mobile}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          {getStateBadge(student.state)}
                        </TableCell>
                        <TableCell className="text-gray-600 py-6 px-8 text-sm font-medium whitespace-nowrap">
                          {student.registerDate}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          {student.enrolledCourses.length > 0 ? (
                            <div className="space-y-1">
                              {student.enrolledCourses.map((course, idx) => (
                                <div
                                  key={idx}
                                  className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full inline-block mr-1 mb-1 font-medium"
                                >
                                  {course}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          {student.enrolledLiveClass.length > 0 ? (
                            <div className="space-y-2">
                              {student.enrolledLiveClass.map(
                                (liveClass, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2"
                                  >
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                      {liveClass}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </TableCell>

                        <TableCell className="py-6 px-8">
                          {student.manualAccess && (
                            <Button
                              size="sm"
                              className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-4 py-2 rounded-xl font-semibold whitespace-nowrap shadow-sm"
                            >
                              Select Courses
                            </Button>
                          )}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-10 h-10 p-0 bg-gray-800 hover:bg-gray-700 rounded-xl"
                              >
                                <MoreVertical className="w-4 h-4 text-white" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="rounded-xl"
                            >
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit Student</DropdownMenuItem>
                              <DropdownMenuItem>
                                Manage Courses
                              </DropdownMenuItem>
                              <DropdownMenuItem>View Progress</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={11}
                        className="text-center text-gray-500 py-16 px-8"
                      >
                        <div className="flex flex-col items-center gap-4">
                          <Users className="w-16 h-16 text-gray-300" />
                          <div className="text-xl font-semibold">
                            No students found
                          </div>
                          <div className="text-sm text-gray-400">
                            Try adjusting your search or filters
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mt-8 pt-8">
              <div className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-bold text-gray-900">
                  {currentEntries.length > 0 ? startIndex + 1 : 0}
                </span>{" "}
                to <span className="font-bold text-gray-900">{endIndex}</span>{" "}
                of{" "}
                <span className="font-bold text-gray-900">{totalEntries}</span>{" "}
                entries
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1 || totalEntries === 0}
                  className="w-12 h-12 p-0 rounded-xl"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-12 h-12 p-0 rounded-xl font-semibold ${
                        currentPage === pageNum
                          ? "bg-gray-900 text-white shadow-lg"
                          : ""
                      }`}
                    >
                      {pageNum}
                    </Button>
                  );
                })}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages || totalEntries === 0}
                  className="w-12 h-12 p-0 rounded-xl"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
