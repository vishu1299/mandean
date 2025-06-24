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
import { Command, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Payout {
  id: number;
  image: string;
  instructor: string;
  paymentType: string;
  payoutDate: string;
  payoutAmount: number;
}

const payoutsData: Payout[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Deepak Arya",
    paymentType: "Course Revenue",
    payoutDate: "15-06-2022",
    payoutAmount: 2500,
  },
  {
    id: 2,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Mayank Jedia",
    paymentType: "Live Class",
    payoutDate: "20-06-2022",
    payoutAmount: 1800,
  },
  {
    id: 3,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Love Baghel",
    paymentType: "Counselling",
    payoutDate: "25-06-2022",
    payoutAmount: 3200,
  },
  {
    id: 4,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Narendra Modi",
    paymentType: "Course Revenue",
    payoutDate: "30-06-2022",
    payoutAmount: 4500,
  },
  {
    id: 5,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Mohit Sharma",
    paymentType: "Live Class",
    payoutDate: "05-07-2022",
    payoutAmount: 2100,
  },
  {
    id: 6,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Rahul Gupta",
    paymentType: "Counselling",
    payoutDate: "10-07-2022",
    payoutAmount: 2800,
  },
  {
    id: 7,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Priya Sharma",
    paymentType: "Course Revenue",
    payoutDate: "15-07-2022",
    payoutAmount: 3600,
  },
  {
    id: 8,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Amit Singh",
    paymentType: "Live Class",
    payoutDate: "20-07-2022",
    payoutAmount: 1950,
  },
  {
    id: 9,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Sneha Patel",
    paymentType: "Counselling",
    payoutDate: "25-07-2022",
    payoutAmount: 2750,
  },
  {
    id: 10,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Vikash Kumar",
    paymentType: "Course Revenue",
    payoutDate: "30-07-2022",
    payoutAmount: 4200,
  },
  {
    id: 11,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Anita Verma",
    paymentType: "Live Class",
    payoutDate: "05-08-2022",
    payoutAmount: 2300,
  },
  {
    id: 12,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Rohit Agarwal",
    paymentType: "Counselling",
    payoutDate: "10-08-2022",
    payoutAmount: 3100,
  },
  {
    id: 13,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Kavya Reddy",
    paymentType: "Course Revenue",
    payoutDate: "15-08-2022",
    payoutAmount: 3800,
  },
  {
    id: 14,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Arjun Mehta",
    paymentType: "Live Class",
    payoutDate: "20-08-2022",
    payoutAmount: 2650,
  },
  {
    id: 15,
    image: "/placeholder.svg?height=40&width=40",
    instructor: "Pooja Jain",
    paymentType: "Counselling",
    payoutDate: "25-08-2022",
    payoutAmount: 2900,
  },
];

export default function InstructorPayouts() {
  const [activePayoutTab, setActivePayoutTab] = useState("completed");
  const [activeTypeTab, setActiveTypeTab] = useState("counselling");
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("25");
  const [currentPage, setCurrentPage] = useState(1);
  const [monthFilter, setMonthFilter] = useState("4");
  const [yearFilter, setYearFilter] = useState("2025");

  // Filter payouts based on active tabs and search
  const filteredPayouts = useMemo(() => {
    let filtered = payoutsData;

    // Filter by payout status (for demo, showing data only for completed)
    if (activePayoutTab === "pending") {
      filtered = []; // No pending payouts for demo
    }

    // Filter by type
    if (activeTypeTab === "counselling") {
      filtered = filtered.filter(
        (payout) => payout.paymentType === "Counselling"
      );
    } else if (activeTypeTab === "liveclass") {
      filtered = filtered.filter(
        (payout) => payout.paymentType === "Live Class"
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (payout) =>
          payout.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          payout.paymentType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [activePayoutTab, activeTypeTab, searchTerm]);

  // Calculate pagination
  const totalEntries = filteredPayouts.length;
  const entriesPerPageNum = Number.parseInt(entriesPerPage);
  const totalPages = Math.ceil(totalEntries / entriesPerPageNum);
  const startIndex = (currentPage - 1) * entriesPerPageNum;
  const endIndex = Math.min(startIndex + entriesPerPageNum, totalEntries);
  const currentEntries = filteredPayouts.slice(startIndex, endIndex);

  // Calculate grand total
  const grandTotal = filteredPayouts.reduce(
    (sum, payout) => sum + payout.payoutAmount,
    0
  );

  const handleFilter = () => {
    console.log("Filter applied:", { monthFilter, yearFilter });
    // Apply additional filtering logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="w-full mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Command className="w-6 h-6 text-gray-500" />
            <h1 className="text-2xl font-semibold text-gray-800">
              Instructor payouts
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-8">
            <h2 className="text-sm font-semibold text-gray-900 mb-8 tracking-wide">
              LIST OF PAYOUTS
            </h2>

            {/* Tabs */}
            <div className="mb-8">
              {/* Payout Status Tabs */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setActivePayoutTab("completed")}
                  className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activePayoutTab === "completed"
                      ? "bg-gray-800 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Completed payouts
                </button>
                <button
                  onClick={() => setActivePayoutTab("pending")}
                  className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activePayoutTab === "pending"
                      ? "bg-gray-800 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Pending payouts
                </button>
              </div>

              {/* Type Tabs */}
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveTypeTab("counselling")}
                  className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeTypeTab === "counselling"
                      ? "bg-gray-800 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Counselling
                </button>
                <button
                  onClick={() => setActiveTypeTab("liveclass")}
                  className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeTypeTab === "liveclass"
                      ? "bg-gray-800 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Live Class
                </button>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 font-medium">Show</span>
                <Select
                  value={entriesPerPage}
                  onValueChange={setEntriesPerPage}
                >
                  <SelectTrigger className="w-24 h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-600 font-medium">
                  entries
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 font-medium">
                    Search:
                  </span>
                  <Input
                    placeholder="Search instructors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-40 h-10"
                  />
                </div>

                <Select value={monthFilter} onValueChange={setMonthFilter}>
                  <SelectTrigger className="w-20 h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="11">11</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger className="w-24 h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  onClick={handleFilter}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 h-10 rounded-lg font-medium transition-colors duration-200"
                >
                  Filter
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-16 min-w-[60px] text-gray-700 font-semibold py-4 px-6">
                      #
                    </TableHead>
                    <TableHead className="min-w-[100px] text-gray-700 font-semibold py-4 px-6">
                      Image
                    </TableHead>
                    <TableHead className="min-w-[180px] text-gray-700 font-semibold py-4 px-6">
                      Instructor
                    </TableHead>
                    <TableHead className="min-w-[150px] text-gray-700 font-semibold py-4 px-6">
                      Payment type
                    </TableHead>
                    <TableHead className="min-w-[140px] text-gray-700 font-semibold py-4 px-6">
                      Payout date
                    </TableHead>
                    <TableHead className="min-w-[140px] text-gray-700 font-semibold py-4 px-6">
                      Payout amount
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentEntries.length > 0 ? (
                    currentEntries.map((payout, index) => (
                      <TableRow
                        key={payout.id}
                        className={`${
                          index % 2 === 1 ? "bg-gray-50" : "bg-white"
                        } hover:bg-gray-100 transition-colors duration-150`}
                      >
                        <TableCell className="text-gray-600 py-5 px-6 font-medium">
                          {startIndex + index + 1}
                        </TableCell>
                        <TableCell className="py-5 px-6">
                          <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm">
                            <Image
                              src={"/profile.png"}
                              alt={payout.instructor}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-700 py-5 px-6 font-medium">
                          {payout.instructor}
                        </TableCell>
                        <TableCell className="text-gray-600 py-5 px-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {payout.paymentType}
                          </span>
                        </TableCell>
                        <TableCell className="text-gray-600 py-5 px-6">
                          {payout.payoutDate}
                        </TableCell>
                        <TableCell className="text-gray-700 py-5 px-6 font-semibold">
                          ₹{payout.payoutAmount.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-center text-gray-500 py-12 px-6"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <div className="text-lg font-medium">
                            No data available in table
                          </div>
                          <div className="text-sm text-gray-400">
                            Try adjusting your filters or search terms
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-8 pt-6">
              <div className="flex items-center gap-8">
                <div className="text-sm text-gray-600">
                  Showing{" "}
                  <span className="font-medium">
                    {currentEntries.length > 0 ? startIndex + 1 : 0}
                  </span>{" "}
                  to <span className="font-medium">{endIndex}</span> of{" "}
                  <span className="font-medium">{totalEntries}</span> entries
                </div>
                <div className="text-lg font-semibold text-gray-900 bg-gray-100 px-4 py-2 rounded-lg">
                  Grand Total: ₹{grandTotal.toLocaleString()}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1 || totalEntries === 0}
                  className="w-10 h-10 p-0 rounded-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages || totalEntries === 0}
                  className="w-10 h-10 p-0 rounded-lg"
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
