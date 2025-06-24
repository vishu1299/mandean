"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
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
  Plus,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Search,
  Users,
} from "lucide-react";

interface Instructor {
  id: number;
  name: string;
  email: string;
  photo: string;
}

const instructorsData: Instructor[] = [
  {
    id: 1,
    name: "Teacher One",
    email: "neha@gmail.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Deepak Arya",
    email: "deepak@gmail.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Mayank Jedia",
    email: "mayank@gmail.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Love Baghel",
    email: "lovebaghel@gmail.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Narendra Modi",
    email: "lv9045@gmail.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Mohit Sharma",
    email: "mohit@xcrino.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    name: "John Doe",
    email: "john@example.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    name: "Jane Smith",
    email: "jane@example.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 9,
    name: "Mike Johnson",
    email: "mike@example.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 10,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 11,
    name: "David Brown",
    email: "david@example.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 12,
    name: "Lisa Davis",
    email: "lisa@example.com",
    photo: "/placeholder.svg?height=40&width=40",
  },
];

export default function InstructorManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter instructors based on search term
  const filteredInstructors = useMemo(() => {
    return instructorsData.filter(
      (instructor) =>
        instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        instructor.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Calculate pagination
  const totalEntries = filteredInstructors.length;
  const entriesPerPageNum = Number.parseInt(entriesPerPage);
  const totalPages = Math.ceil(totalEntries / entriesPerPageNum);
  const startIndex = (currentPage - 1) * entriesPerPageNum;
  const endIndex = Math.min(startIndex + entriesPerPageNum, totalEntries);
  const currentEntries = filteredInstructors.slice(startIndex, endIndex);

  // Reset to first page when search changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Reset to first page when entries per page changes
  const handleEntriesPerPageChange = (value: string) => {
    setEntriesPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Command className="w-5 h-5 text-gray-500" />
            <h1 className="text-xl font-medium text-gray-700">Instructor</h1>
          </div>
          <Button
            variant="outline"
            className="text-blue-500 border-blue-200 hover:bg-blue-50"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add instructor
          </Button>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  All Instructors
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {totalEntries} total instructors
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search instructors..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 w-64 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Show</span>
                <Select
                  value={entriesPerPage}
                  onValueChange={handleEntriesPerPageChange}
                >
                  <SelectTrigger className="w-20 border-gray-200 rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-0 shadow-lg rounded-lg">
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm font-medium text-gray-700">
                  entries
                </span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-gray-50 to-blue-50 border-0 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50">
                    <TableHead className="font-semibold text-gray-700 border-0 py-4">
                      #
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 border-0 py-4">
                      Photo
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 border-0 py-4">
                      Name
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 border-0 py-4">
                      Email
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 border-0 py-4 text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentEntries.map((instructor, index) => (
                    <TableRow
                      key={instructor.id}
                      className="border-0 hover:bg-blue-50/50 transition-colors duration-200"
                    >
                      <TableCell className="font-medium text-gray-600 border-0 py-4">
                        {startIndex + index + 1}
                      </TableCell>
                      <TableCell className="border-0 py-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-100">
                          <Image
                            src="/profile.png"
                            alt={instructor.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-gray-800 border-0 py-4">
                        {instructor.name}
                      </TableCell>
                      <TableCell className="text-gray-600 border-0 py-4">
                        {instructor.email}
                      </TableCell>
                      <TableCell className="text-right border-0 py-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-8 h-8 p-0 bg-gray-100 hover:bg-gray-200 border-0 rounded-lg"
                            >
                              <MoreVertical className="w-4 h-4 text-gray-600" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="border-0 shadow-lg rounded-lg"
                          >
                            <DropdownMenuItem className="hover:bg-blue-50">
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-blue-50">
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600 hover:bg-red-50">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8">
              <div className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-medium text-gray-800">
                  {startIndex + 1}
                </span>{" "}
                to <span className="font-medium text-gray-800">{endIndex}</span>{" "}
                of{" "}
                <span className="font-medium text-gray-800">
                  {totalEntries}
                </span>{" "}
                entries
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="w-9 h-9 p-0 border-gray-200 hover:bg-blue-50 hover:border-blue-300 rounded-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 p-0 rounded-lg ${
                        currentPage === page
                          ? "bg-black text-white border-0 shadow-lg"
                          : "border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                      }`}
                    >
                      {page}
                    </Button>
                  )
                )}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 p-0 border-gray-200 hover:bg-blue-50 hover:border-blue-300 rounded-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
