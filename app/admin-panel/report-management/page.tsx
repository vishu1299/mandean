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
import { Card, CardContent } from "@/components/ui/card";
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
  BarChart3,
  Users,
  BookOpen,
  TrendingUp,
  Download,
  Calendar,
  Eye,
  FileText,
  PieChart,
  Activity,
} from "lucide-react";

interface ReportData {
  id: number;
  reportName: string;
  reportType: "Student" | "Course" | "Instructor" | "Revenue" | "Engagement";
  generatedBy: string;
  generatedDate: string;
  status: "Generated" | "Processing" | "Failed";
  recordsCount: number;
  fileSize: string;
  downloadCount: number;
}

const reportsData: ReportData[] = [
  {
    id: 1,
    reportName: "Student Enrollment Report",
    reportType: "Student",
    generatedBy: "Admin",
    generatedDate: "2024-01-15 10:30 AM",
    status: "Generated",
    recordsCount: 1250,
    fileSize: "2.4 MB",
    downloadCount: 15,
  },
  {
    id: 2,
    reportName: "Course Performance Analytics",
    reportType: "Course",
    generatedBy: "Manager",
    generatedDate: "2024-01-14 02:15 PM",
    status: "Generated",
    recordsCount: 89,
    fileSize: "1.8 MB",
    downloadCount: 8,
  },
  {
    id: 3,
    reportName: "Instructor Payout Summary",
    reportType: "Instructor",
    generatedBy: "Finance Team",
    generatedDate: "2024-01-14 09:45 AM",
    status: "Generated",
    recordsCount: 45,
    fileSize: "856 KB",
    downloadCount: 12,
  },
  {
    id: 4,
    reportName: "Monthly Revenue Report",
    reportType: "Revenue",
    generatedBy: "Admin",
    generatedDate: "2024-01-13 04:20 PM",
    status: "Generated",
    recordsCount: 2340,
    fileSize: "3.2 MB",
    downloadCount: 25,
  },
  {
    id: 5,
    reportName: "Student Engagement Metrics",
    reportType: "Engagement",
    generatedBy: "Analytics Team",
    generatedDate: "2024-01-13 11:00 AM",
    status: "Processing",
    recordsCount: 0,
    fileSize: "-",
    downloadCount: 0,
  },
  {
    id: 6,
    reportName: "Course Completion Rates",
    reportType: "Course",
    generatedBy: "Manager",
    generatedDate: "2024-01-12 03:30 PM",
    status: "Generated",
    recordsCount: 156,
    fileSize: "1.2 MB",
    downloadCount: 18,
  },
  {
    id: 7,
    reportName: "New Student Registrations",
    reportType: "Student",
    generatedBy: "Admin",
    generatedDate: "2024-01-12 08:15 AM",
    status: "Generated",
    recordsCount: 89,
    fileSize: "945 KB",
    downloadCount: 7,
  },
  {
    id: 8,
    reportName: "Instructor Performance Review",
    reportType: "Instructor",
    generatedBy: "HR Team",
    generatedDate: "2024-01-11 01:45 PM",
    status: "Failed",
    recordsCount: 0,
    fileSize: "-",
    downloadCount: 0,
  },
  {
    id: 9,
    reportName: "Weekly Revenue Breakdown",
    reportType: "Revenue",
    generatedBy: "Finance Team",
    generatedDate: "2024-01-11 10:20 AM",
    status: "Generated",
    recordsCount: 567,
    fileSize: "1.6 MB",
    downloadCount: 14,
  },
  {
    id: 10,
    reportName: "Forum Activity Report",
    reportType: "Engagement",
    generatedBy: "Community Manager",
    generatedDate: "2024-01-10 04:00 PM",
    status: "Generated",
    recordsCount: 234,
    fileSize: "1.1 MB",
    downloadCount: 9,
  },
];

export default function Reports() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [reportTypeFilter, setReportTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] = useState("all");

  // Filter reports based on search term and filters
  const filteredReports = useMemo(() => {
    let filtered = reportsData;

    // Filter by report type
    if (reportTypeFilter !== "all") {
      filtered = filtered.filter(
        (report) => report.reportType === reportTypeFilter
      );
    }

    // Filter by status
    if (statusFilter !== "all") {
      filtered = filtered.filter((report) => report.status === statusFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (report) =>
          report.reportName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.generatedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.reportType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, reportTypeFilter, statusFilter]);

  // Calculate pagination
  const totalEntries = filteredReports.length;
  const entriesPerPageNum = Number.parseInt(entriesPerPage);
  const totalPages = Math.ceil(totalEntries / entriesPerPageNum);
  const startIndex = (currentPage - 1) * entriesPerPageNum;
  const endIndex = Math.min(startIndex + entriesPerPageNum, totalEntries);
  const currentEntries = filteredReports.slice(startIndex, endIndex);

  // Calculate stats
  const totalReports = filteredReports.length;
  const generatedReports = filteredReports.filter(
    (report) => report.status === "Generated"
  ).length;
  const totalDownloads = filteredReports.reduce(
    (sum, report) => sum + report.downloadCount,
    0
  );
  const totalRecords = filteredReports.reduce(
    (sum, report) => sum + report.recordsCount,
    0
  );

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      Generated: "bg-emerald-500 text-white",
      Processing: "bg-amber-500 text-white",
      Failed: "bg-red-500 text-white",
    };

    return (
      <span
        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
          statusStyles[status as keyof typeof statusStyles]
        }`}
      >
        {status}
      </span>
    );
  };

  const getReportTypeBadge = (type: string) => {
    const typeColors = {
      Student: "bg-blue-100 text-blue-800",
      Course: "bg-green-100 text-green-800",
      Instructor: "bg-purple-100 text-purple-800",
      Revenue: "bg-orange-100 text-orange-800",
      Engagement: "bg-pink-100 text-pink-800",
    };

    return (
      <span
        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
          typeColors[type as keyof typeof typeColors] ||
          "bg-gray-100 text-gray-800"
        }`}
      >
        {type}
      </span>
    );
  };

  const getReportTypeIcon = (type: string) => {
    const icons = {
      Student: Users,
      Course: BookOpen,
      Instructor: Activity,
      Revenue: TrendingUp,
      Engagement: PieChart,
    };
    const IconComponent = icons[type as keyof typeof icons] || FileText;
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="w-full mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 p-3">
          <Command className="w-6 h-6 text-gray-600" />
          <span className="text-gray-800 font-semibold text-xl"> Report</span>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl">
          <div className="p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-8">
              GENERATED REPORTS
            </h2>

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
                    <SelectContent className="bg-white">
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
                    Type:
                  </span>
                  <Select
                    value={reportTypeFilter}
                    onValueChange={setReportTypeFilter}
                  >
                    <SelectTrigger className="w-36 h-11 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Student">Student</SelectItem>
                      <SelectItem value="Course">Course</SelectItem>
                      <SelectItem value="Instructor">Instructor</SelectItem>
                      <SelectItem value="Revenue">Revenue</SelectItem>
                      <SelectItem value="Engagement">Engagement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 font-semibold">
                    Status:
                  </span>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-36 h-11 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Generated">Generated</SelectItem>
                      <SelectItem value="Processing">Processing</SelectItem>
                      <SelectItem value="Failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 font-semibold">
                  Search:
                </span>
                <Input
                  placeholder="Search reports..."
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
                    <TableHead className="w-16 min-w-[60px] text-gray-800 font-bold py-6 px-8">
                      #
                    </TableHead>
                    <TableHead className="min-w-[250px] text-gray-800 font-bold py-6 px-8">
                      Report Name
                    </TableHead>
                    <TableHead className="min-w-[120px] text-gray-800 font-bold py-6 px-8">
                      Type
                    </TableHead>
                    <TableHead className="min-w-[140px] text-gray-800 font-bold py-6 px-8">
                      Generated By
                    </TableHead>
                    <TableHead className="min-w-[180px] text-gray-800 font-bold py-6 px-8">
                      Generated Date
                    </TableHead>
                    <TableHead className="min-w-[100px] text-gray-800 font-bold py-6 px-8">
                      Status
                    </TableHead>
                    <TableHead className="min-w-[120px] text-gray-800 font-bold py-6 px-8">
                      Records
                    </TableHead>
                    <TableHead className="min-w-[100px] text-gray-800 font-bold py-6 px-8">
                      File Size
                    </TableHead>
                    <TableHead className="min-w-[120px] text-gray-800 font-bold py-6 px-8">
                      Downloads
                    </TableHead>
                    <TableHead className="min-w-[100px] text-gray-800 font-bold py-6 px-8">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentEntries.length > 0 ? (
                    currentEntries.map((report, index) => (
                      <TableRow
                        key={report.id}
                        className={`${
                          index % 2 === 1 ? "bg-gray-50" : "bg-white"
                        } hover:bg-blue-50 transition-all duration-200`}
                      >
                        <TableCell className="text-gray-600 py-6 px-8 font-bold text-lg">
                          {startIndex + index + 1}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                              {getReportTypeIcon(report.reportType)}
                            </div>
                            <span className="text-gray-800 font-semibold">
                              {report.reportName}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          {getReportTypeBadge(report.reportType)}
                        </TableCell>
                        <TableCell className="text-gray-700 py-6 px-8 font-medium">
                          {report.generatedBy}
                        </TableCell>
                        <TableCell className="text-gray-600 py-6 px-8 text-sm font-medium">
                          {report.generatedDate}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          {getStatusBadge(report.status)}
                        </TableCell>
                        <TableCell className="text-gray-700 py-6 px-8 font-semibold">
                          {report.recordsCount > 0
                            ? report.recordsCount.toLocaleString()
                            : "-"}
                        </TableCell>
                        <TableCell className="text-gray-600 py-6 px-8 font-medium">
                          {report.fileSize}
                        </TableCell>
                        <TableCell className="text-gray-700 py-6 px-8 font-semibold">
                          <div className="flex items-center gap-2">
                            <Download className="w-4 h-4 text-gray-500" />
                            {report.downloadCount}
                          </div>
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
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                View Report
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Calendar className="w-4 h-4 mr-2" />
                                Schedule
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <FileText className="w-4 h-4 mr-2" />
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
                        colSpan={10}
                        className="text-center text-gray-500 py-16 px-8"
                      >
                        <div className="flex flex-col items-center gap-4">
                          <BarChart3 className="w-16 h-16 text-gray-300" />
                          <div className="text-xl font-semibold">
                            No reports found
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
