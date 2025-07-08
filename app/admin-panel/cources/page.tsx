"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Tag,
  Database,
  Settings,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Courses() {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(5); // You can make this dynamic if needed

  // Sample course data (you would replace this with your actual data)
  const coursesData = [
    {
      id: 1,
      title: "The Complete 2022 Web Developm...",
      instructor: "Praveen Vats",
      category: "Finance",
      categoryColor: "bg-gray-200 text-gray-800",
      totalSections: 2,
      totalLessons: 3,
      totalEnrollment: 1,
      status: "active",
      price: "₹1000",
      donationCollected: "₹2,450",
    },
    {
      id: 2,
      title: "Learn Python: The Complete Pyt...",
      instructor: "Praveen Vats",
      category: "Web Development",
      categoryColor: "bg-blue-200 text-blue-800",
      totalSections: 1,
      totalLessons: 1,
      totalEnrollment: 0,
      status: "active",
      price: "Free",
      priceColor: "bg-green-200 text-green-800",
      donationCollected: "₹1,200",
    },
    {
      id: 3,
      title: "sddha",
      instructor: "Praveen Vats",
      category: "Web Development",
      categoryColor: "bg-blue-200 text-blue-800",
      totalSections: 1,
      totalLessons: 1,
      totalEnrollment: 0,
      status: "active",
      price: "Free",
      priceColor: "bg-green-200 text-green-800",
      donationCollected: "₹850",
    },
    {
      id: 4,
      title: "Without",
      instructor: "Praveen Vats",
      category: "Finance",
      categoryColor: "bg-gray-200 text-gray-800",
      totalSections: 0,
      totalLessons: 0,
      totalEnrollment: 1,
      status: "active",
      price: "₹200",
      donationCollected: "₹500",
    },
    {
      id: 5,
      title: "Youtube Millionaire",
      instructor: "Praveen Vats",
      category: "Test English",
      categoryColor: "bg-purple-200 text-purple-800",
      totalSections: 1,
      totalLessons: 3,
      totalEnrollment: 0,
      status: "active",
      price: "Free",
      priceColor: "bg-green-200 text-green-800",
      donationCollected: "₹3,200",
    },
    {
      id: 6,
      title: "Love hacker",
      instructor: "Praveen Vats",
      category: "Finance",
      categoryColor: "bg-gray-200 text-gray-800",
      totalSections: 0,
      totalLessons: 1,
      totalEnrollment: 1,
      status: "active",
      price: "₹5000",
      donationCollected: "₹1,750",
    },
  ];

  // Calculate pagination
  const totalEntries = coursesData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, totalEntries);
  const currentEntries = coursesData.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 ">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4 mx-auto">
              <Database className="w-6 h-6 text-gray-600" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">14</div>
              <div className="text-gray-500 text-sm">Active courses</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4 mx-auto">
              <Settings className="w-6 h-6 text-gray-600" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
              <div className="text-gray-500 text-sm">Pending courses</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4 mx-auto">
              <Star className="w-6 h-6 text-gray-600" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">6</div>
              <div className="text-gray-500 text-sm">Free courses</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4 mx-auto">
              <Tag className="w-6 h-6 text-gray-600" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
              <div className="text-gray-500 text-sm">Paid courses</div>
            </div>
          </div>
        </div>

        {/* Course List Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              COURSE LIST
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-end mb-6">
              <div className="flex-1 min-w-[150px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categories
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#db9407] focus:border-[#db9407]">
                  <option>All</option>
                  <option>Web Development</option>
                  <option>Finance</option>
                  <option>Programming</option>
                  <option>Test English</option>
                </select>
              </div>

              <div className="flex-1 min-w-[150px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#db9407] focus:border-[#db9407]">
                  <option>All</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Draft</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="flex-1 min-w-[150px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instructor
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#db9407] focus:border-[#db9407]">
                  <option>All</option>
                  <option>Praveen Vats</option>
                  <option>John Smith</option>
                  <option>Sarah Johnson</option>
                  <option>Mike Davis</option>
                </select>
              </div>

              <div className="flex-1 min-w-[150px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#db9407] focus:border-[#db9407]">
                  <option>All</option>
                  <option>Free</option>
                  <option>Under ₹1000</option>
                  <option>₹1000 - ₹5000</option>
                  <option>Above ₹5000</option>
                </select>
              </div>

              <Button className="bg-[#db9407] hover:bg-[#c2840b] text-white px-6 py-2">
                Filter
              </Button>
            </div>

            {/* Action Buttons and Search */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="bg-slate-600 text-white border-slate-600 hover:bg-slate-700"
                >
                  Copy
                </Button>
                <Button
                  variant="outline"
                  className="bg-slate-600 text-white border-slate-600 hover:bg-slate-700"
                >
                  CSV
                </Button>
                <Button
                  variant="outline"
                  className="bg-slate-600 text-white border-slate-600 hover:bg-slate-700"
                >
                  Print
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-700">Search:</label>
                <input
                  type="text"
                  className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#db9407] focus:border-[#db9407]"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lesson and section
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Enrolled student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Donation Collected
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentEntries.map((course, index) => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-blue-600">
                          {course.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          Instructor: {course.instructor}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${course.categoryColor}`}
                      >
                        {course.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div>Total section: {course.totalSections}</div>
                      <div>Total lesson: {course.totalLessons}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Total enrollment: {course.totalEnrollment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.priceColor ? (
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded ${course.priceColor}`}
                        >
                          {course.price}
                        </span>
                      ) : (
                        course.price
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.donationCollected}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mt-8 pt-8 px-6 pb-6 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-bold text-gray-900">
                {currentEntries.length > 0 ? startIndex + 1 : 0}
              </span>{" "}
              to <span className="font-bold text-gray-900">{endIndex}</span> of{" "}
              <span className="font-bold text-gray-900">{totalEntries}</span>{" "}
              entries
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
      </main>
    </div>
  );
}
