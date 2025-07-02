"use client";

import { Button } from "@/components/ui/button";
import { Tag, Database, Settings, Star } from "lucide-react";

export default function Courses() {
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
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    1
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-blue-600">
                        The Complete 2022 Web Developm...
                      </div>
                      <div className="text-sm text-gray-500">
                        Instructor: Praveen Vats
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded">
                      Finance
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div>Total section: 2</div>
                    <div>Total lesson: 3</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Total enrollment: 1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹1000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹2,450
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    2
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-blue-600">
                        Learn Python: The Complete Pyt...
                      </div>
                      <div className="text-sm text-gray-500">
                        Instructor: Praveen Vats
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-200 text-blue-800 rounded">
                      Web Development
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div>Total section: 1</div>
                    <div>Total lesson: 1</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Total enrollment: 0
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-200 text-green-800 rounded">
                      Free
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹1,200
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    3
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-blue-600">
                        sddha
                      </div>
                      <div className="text-sm text-gray-500">
                        Instructor: Praveen Vats
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-200 text-blue-800 rounded">
                      Web Development
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div>Total section: 1</div>
                    <div>Total lesson: 1</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Total enrollment: 0
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-200 text-green-800 rounded">
                      Free
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹850
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    4
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-blue-600">
                        Without
                      </div>
                      <div className="text-sm text-gray-500">
                        Instructor: Praveen Vats
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded">
                      Finance
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div>Total section: 0</div>
                    <div>Total lesson: 0</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Total enrollment: 1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹200
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹500
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    5
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-blue-600">
                        Youtube Millionaire
                      </div>
                      <div className="text-sm text-gray-500">
                        Instructor: Praveen Vats
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-purple-200 text-purple-800 rounded">
                      Test English
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div>Total section: 1</div>
                    <div>Total lesson: 3</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Total enrollment: 0
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-200 text-green-800 rounded">
                      Free
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹3,200
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    6
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-blue-600">
                        Love hacker
                      </div>
                      <div className="text-sm text-gray-500">
                        Instructor: Praveen Vats
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded">
                      Finance
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div>Total section: 0</div>
                    <div>Total lesson: 1</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Total enrollment: 1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹5000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹1,750
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
