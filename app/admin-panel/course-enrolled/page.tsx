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

import { Command, ChevronUp, ChevronDown } from "lucide-react";

interface CourseEnrollment {
  id: number;
  userName: string;
  course: string;
  dateOfAdd: string;
  dateOfExpire: string;
}

const courseEnrollmentsData: CourseEnrollment[] = [
  {
    id: 1,
    userName: "Testing guy",
    course: "The Complete 2022 Web Development Bootcamp",
    dateOfAdd: "29-05-2022",
    dateOfExpire: "28-06-2022",
  },
  {
    id: 2,
    userName: "Testing guy",
    course: "Without",
    dateOfAdd: "29-05-2022",
    dateOfExpire: "28-06-2022",
  },
  {
    id: 3,
    userName: "Testing guy",
    course: "Love baghel",
    dateOfAdd: "29-05-2022",
    dateOfExpire: "30-05-2022",
  },
  {
    id: 4,
    userName: "Deepak Arya",
    course: "Youtube Shorts",
    dateOfAdd: "29-05-2022",
    dateOfExpire: "30-05-2022",
  },
  {
    id: 5,
    userName: "Rahul Sharma",
    course: "React Advanced Concepts",
    dateOfAdd: "30-05-2022",
    dateOfExpire: "30-06-2022",
  },
  {
    id: 6,
    userName: "Priya Singh",
    course: "Digital Marketing Masterclass",
    dateOfAdd: "31-05-2022",
    dateOfExpire: "31-07-2022",
  },
  {
    id: 7,
    userName: "Amit Kumar",
    course: "Python for Data Science",
    dateOfAdd: "01-06-2022",
    dateOfExpire: "01-08-2022",
  },
  {
    id: 8,
    userName: "Sneha Patel",
    course: "Machine Learning Fundamentals",
    dateOfAdd: "02-06-2022",
    dateOfExpire: "02-09-2022",
  },
  {
    id: 9,
    userName: "Vikash Gupta",
    course: "Java Spring Boot",
    dateOfAdd: "03-06-2022",
    dateOfExpire: "03-08-2022",
  },
  {
    id: 10,
    userName: "Anita Verma",
    course: "Graphic Design Essentials",
    dateOfAdd: "04-06-2022",
    dateOfExpire: "04-07-2022",
  },
];

export default function CoursesEnrolled() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<keyof CourseEnrollment | null>(
    null
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [typeFilter, setTypeFilter] = useState("Start Date");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Filter course enrollments based on search term
  const filteredEnrollments = useMemo(() => {
    return courseEnrollmentsData.filter(
      (enrollment) =>
        enrollment.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrollment.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrollment.dateOfAdd.includes(searchTerm) ||
        enrollment.dateOfExpire.includes(searchTerm)
    );
  }, [searchTerm]);

  // Sort enrollments
  const sortedEnrollments = useMemo(() => {
    if (!sortField) return filteredEnrollments;

    return [...filteredEnrollments].sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (typeof aValue === "string" && typeof bValue === "string") {
        const comparison = aValue.localeCompare(bValue);
        return sortDirection === "asc" ? comparison : -comparison;
      }

      return 0;
    });
  }, [filteredEnrollments, sortField, sortDirection]);

  // Calculate pagination
  const totalEntries = sortedEnrollments.length;
  const entriesPerPageNum = Number.parseInt(entriesPerPage);
  const totalPages = Math.ceil(totalEntries / entriesPerPageNum);
  const startIndex = (currentPage - 1) * entriesPerPageNum;
  const endIndex = Math.min(startIndex + entriesPerPageNum, totalEntries);
  const currentEntries = sortedEnrollments.slice(startIndex, endIndex);

  // Handle sorting
  const handleSort = (field: keyof CourseEnrollment) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

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

  const handleSearch = () => {
    // Handle search functionality here
    console.log("Search clicked", { typeFilter, startDate, endDate });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Command className="w-5 h-5 text-gray-600" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Courses Enrolled
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-8 sm:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-medium text-gray-900">
                Course Enrollments
              </h2>
              <div className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                {totalEntries} Total
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter Type
                </label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Start Date">Start Date</SelectItem>
                    <SelectItem value="End Date">End Date</SelectItem>
                    <SelectItem value="Course Name">Course Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-end">
                <Button
                  onClick={handleSearch}
                  className="bg-[#db9407] text-white px-8 py-2.5 w-full font-medium rounded-lg transition-colors"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Show</span>
                <Select
                  value={entriesPerPage}
                  onValueChange={handleEntriesPerPageChange}
                >
                  <SelectTrigger className="w-20 border-gray-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
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

              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">
                  Search:
                </span>
                <Input
                  placeholder="Search by name, course, or date..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-64 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="w-12 min-w-[50px] text-left text-gray-700 font-semibold py-4 px-4">
                        #
                      </th>
                      <th className="min-w-[150px] text-left text-gray-700 font-semibold py-4 px-4">
                        <button
                          className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                          onClick={() => handleSort("userName")}
                        >
                          User Name
                          {sortField === "userName" &&
                            (sortDirection === "asc" ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            ))}
                        </button>
                      </th>
                      <th className="min-w-[200px] text-left text-gray-700 font-semibold py-4 px-4">
                        <button
                          className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                          onClick={() => handleSort("course")}
                        >
                          Course
                          {sortField === "course" &&
                            (sortDirection === "asc" ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            ))}
                        </button>
                      </th>
                      <th className="min-w-[120px] text-left text-gray-700 font-semibold py-4 px-4">
                        <button
                          className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                          onClick={() => handleSort("dateOfAdd")}
                        >
                          Date Added
                          {sortField === "dateOfAdd" &&
                            (sortDirection === "asc" ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            ))}
                        </button>
                      </th>
                      <th className="min-w-[120px] text-left text-gray-700 font-semibold py-4 px-4">
                        <button
                          className="flex items-center gap-2 hover:text-gray-900 transition-colors"
                          onClick={() => handleSort("dateOfExpire")}
                        >
                          Expires On
                          {sortField === "dateOfExpire" &&
                            (sortDirection === "asc" ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            ))}
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentEntries.map((enrollment, index) => (
                      <tr
                        key={enrollment.id}
                        className={`${
                          index % 2 === 1 ? "bg-gray-50/50" : "bg-white"
                        } hover:bg-blue-50/50 transition-colors`}
                      >
                        <td className="text-gray-600 py-4 px-4 font-medium">
                          {startIndex + index + 1}
                        </td>
                        <td className="text-gray-900 py-4 px-4 font-medium">
                          {enrollment.userName}
                        </td>
                        <td className="text-gray-700 py-4 px-4">
                          {enrollment.course}
                        </td>
                        <td className="text-gray-600 py-4 px-4">
                          {enrollment.dateOfAdd}
                        </td>
                        <td className="text-gray-600 py-4 px-4">
                          {enrollment.dateOfExpire}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 pt-6 border-t border-gray-100">
              <div className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-medium text-gray-900">
                  {startIndex + 1}
                </span>{" "}
                to <span className="font-medium text-gray-900">{endIndex}</span>{" "}
                of{" "}
                <span className="font-medium text-gray-900">
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
                  className="px-4 py-2 text-sm border-gray-200 hover:bg-gray-50"
                >
                  Previous
                </Button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
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
                      className={`w-10 h-10 p-0 text-sm ${
                        currentPage === pageNum
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
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
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm border-gray-200 hover:bg-gray-50"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
