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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Command,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Users,
  BookOpen,
  GraduationCap,
  TrendingUp,
  Clock,
  Flag,
  AlertTriangle,
  Eye,
  MessageSquare,
  Activity,
  Calendar,
} from "lucide-react";

interface AccessLog {
  timestamp: string;
  action: string;
  duration: string;
  device: string;
  location: string;
}

interface Report {
  id: string;
  type: "academic" | "behavioral" | "technical";
  severity: "low" | "medium" | "high";
  title: string;
  description: string;
  reportedBy: string;
  reportedAt: string;
  status: "open" | "investigating" | "resolved";
}

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  type: "note" | "warning" | "achievement";
}

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
  lastAccess: string;
  totalAccessTime: string;
  accessLogs: AccessLog[];
  reports: Report[];
  comments: Comment[];
  flags: string[];
  status: "active" | "suspended" | "flagged";
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
    lastAccess: "2024-01-15 14:30 PM",
    totalAccessTime: "45h 30m",
    accessLogs: [
      {
        timestamp: "2024-01-15 14:30 PM",
        action: "Course Access - React Basics",
        duration: "2h 15m",
        device: "Desktop",
        location: "Delhi, India",
      },
      {
        timestamp: "2024-01-14 10:15 AM",
        action: "Live Class Join",
        duration: "1h 45m",
        device: "Mobile",
        location: "Delhi, India",
      },
      {
        timestamp: "2024-01-13 16:20 PM",
        action: "Assignment Submission",
        duration: "30m",
        device: "Desktop",
        location: "Delhi, India",
      },
    ],
    reports: [],
    comments: [
      {
        id: "c1",
        author: "Admin",
        content: "Excellent progress in React fundamentals",
        timestamp: "2024-01-10 09:00 AM",
        type: "achievement",
      },
    ],
    flags: [],
    status: "active",
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
    lastAccess: "2024-01-16 11:45 AM",
    totalAccessTime: "32h 20m",
    accessLogs: [
      {
        timestamp: "2024-01-16 11:45 AM",
        action: "Course Completion - Digital Marketing",
        duration: "3h 10m",
        device: "Laptop",
        location: "Mumbai, India",
      },
    ],
    reports: [],
    comments: [],
    flags: [],
    status: "active",
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
    lastAccess: "2024-01-12 08:30 AM",
    totalAccessTime: "28h 45m",
    accessLogs: [
      {
        timestamp: "2024-01-12 08:30 AM",
        action: "Course Access - Python Programming",
        duration: "1h 20m",
        device: "Desktop",
        location: "Bangalore, India",
      },
    ],
    reports: [
      {
        id: "r1",
        type: "academic",
        severity: "medium",
        title: "Assignment Deadline Missed",
        description: "Student missed the Python assignment deadline by 3 days",
        reportedBy: "Instructor John",
        reportedAt: "2024-01-10 15:30 PM",
        status: "investigating",
      },
    ],
    comments: [
      {
        id: "c2",
        author: "Instructor",
        content: "Student needs to improve time management",
        timestamp: "2024-01-11 14:00 PM",
        type: "warning",
      },
    ],
    flags: ["late_submission"],
    status: "flagged",
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
    lastAccess: "2024-01-14 19:15 PM",
    totalAccessTime: "67h 10m",
    accessLogs: [
      {
        timestamp: "2024-01-14 19:15 PM",
        action: "Live Class - Finance",
        duration: "2h 00m",
        device: "Tablet",
        location: "Gujarat, India",
      },
    ],
    reports: [],
    comments: [],
    flags: [],
    status: "active",
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
    lastAccess: "2024-01-08 12:00 PM",
    totalAccessTime: "15h 30m",
    accessLogs: [
      {
        timestamp: "2024-01-08 12:00 PM",
        action: "Course Access - Java Fundamentals",
        duration: "45m",
        device: "Mobile",
        location: "UP, India",
      },
    ],
    reports: [
      {
        id: "r2",
        type: "behavioral",
        severity: "high",
        title: "Inappropriate Behavior in Live Class",
        description:
          "Student was disruptive during live session and used inappropriate language",
        reportedBy: "Instructor Sarah",
        reportedAt: "2024-01-05 16:45 PM",
        status: "open",
      },
    ],
    comments: [
      {
        id: "c3",
        author: "Admin",
        content: "Student has been warned about behavior. Monitoring required.",
        timestamp: "2024-01-06 10:00 AM",
        type: "warning",
      },
    ],
    flags: ["behavioral_warning", "low_engagement"],
    status: "suspended",
  },
];

function AccessLogsModal({ student }: { student: Student }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-800"
        >
          <Activity className="w-4 h-4 mr-1" />
          View Logs
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Access Logs - {student.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <Label className="text-sm font-medium text-gray-600">
                Last Access
              </Label>
              <p className="text-sm font-semibold">{student.lastAccess}</p>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-600">
                Total Access Time
              </Label>
              <p className="text-sm font-semibold">{student.totalAccessTime}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Recent Activity</h3>
            {student.accessLogs.map((log, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{log.action}</span>
                  <Badge variant="outline">{log.duration}</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {log.timestamp}
                  </div>
                  <div className="flex items-center gap-1">
                    <Activity className="w-3 h-3" />
                    {log.device}
                  </div>
                  <div>{log.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ReportsModal({ student }: { student: Student }) {
  const [open, setOpen] = useState(false);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-red-100 text-red-800";
      case "investigating":
        return "bg-yellow-100 text-yellow-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-red-600 hover:text-red-800"
        >
          <Flag className="w-4 h-4 mr-1" />
          Reports ({student.reports.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Flag className="w-5 h-5" />
            Reports & Flags - {student.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {student.flags.length > 0 && (
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Active Flags
              </h3>
              <div className="flex flex-wrap gap-2">
                {student.flags.map((flag, index) => (
                  <Badge
                    key={index}
                    variant="destructive"
                    className="bg-yellow-100 text-yellow-800"
                  >
                    {flag.replace("_", " ")}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Reports</h3>
            {student.reports.length > 0 ? (
              student.reports.map((report) => (
                <div
                  key={report.id}
                  className="border rounded-lg p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{report.title}</h4>
                    <div className="flex gap-2">
                      <Badge className={getSeverityColor(report.severity)}>
                        {report.severity}
                      </Badge>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{report.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                    <div>Reported by: {report.reportedBy}</div>
                    <div>Date: {report.reportedAt}</div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">No reports found</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CommentsModal({ student }: { student: Student }) {
  const [open, setOpen] = useState(false);
  const [newComment, setNewComment] = useState("");

  const getCommentTypeColor = (type: string) => {
    switch (type) {
      case "achievement":
        return "bg-green-100 text-green-800";
      case "warning":
        return "bg-red-100 text-red-800";
      case "note":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-green-600 hover:text-green-800"
        >
          <MessageSquare className="w-4 h-4 mr-1" />
          Comments ({student.comments.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Comments & Notes - {student.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="new-comment">Add New Comment</Label>
            <Textarea
              id="new-comment"
              placeholder="Enter your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="flex gap-2">
              <Select defaultValue="note">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="note">Note</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="achievement">Achievement</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={() => setNewComment("")}>Add Comment</Button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Previous Comments</h3>
            {student.comments.length > 0 ? (
              student.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="border rounded-lg p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{comment.author}</span>
                    <div className="flex items-center gap-2">
                      <Badge className={getCommentTypeColor(comment.type)}>
                        {comment.type}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {comment.timestamp}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{comment.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">No comments yet</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function StudentManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [stateFilter, setStateFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter students based on search term, state, and status
  const filteredStudents = useMemo(() => {
    let filtered = studentsData;

    // Filter by state
    if (stateFilter !== "all") {
      filtered = filtered.filter((student) => student.state === stateFilter);
    }

    // Filter by status
    if (statusFilter !== "all") {
      filtered = filtered.filter((student) => student.status === statusFilter);
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
  }, [searchTerm, stateFilter, statusFilter]);

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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">Suspended</Badge>;
      case "flagged":
        return <Badge className="bg-yellow-100 text-yellow-800">Flagged</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="w-full mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Command className="w-6 h-6 text-gray-600" />
          <span className="text-gray-800 font-semibold text-xl">
            Student Management
          </span>
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
            <h2 className="text-lg font-bold text-gray-900 mb-8">
              STUDENT MANAGEMENT
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
                    State:
                  </span>
                  <Select value={stateFilter} onValueChange={setStateFilter}>
                    <SelectTrigger className="w-36 h-11 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="all">All States</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Mumbai">Mumbai</SelectItem>
                      <SelectItem value="Bangalore">Bangalore</SelectItem>
                      <SelectItem value="Gujarat">Gujarat</SelectItem>
                      <SelectItem value="UP">UP</SelectItem>
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
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                      <SelectItem value="flagged">Flagged</SelectItem>
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
                    <TableHead className="min-w-[140px] text-gray-800 font-bold py-6 px-8">
                      Last Access
                    </TableHead>
                    <TableHead className="min-w-[120px] text-gray-800 font-bold py-6 px-8">
                      Status
                    </TableHead>
                    <TableHead className="min-w-[200px] text-gray-800 font-bold py-6 px-8">
                      Activity & Reports
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
                            <div>
                              <span className="text-gray-800 font-semibold block">
                                {student.name}
                              </span>
                              {student.flags.length > 0 && (
                                <div className="flex items-center gap-1 mt-1">
                                  <AlertTriangle className="w-3 h-3 text-yellow-500" />
                                  <span className="text-xs text-yellow-600">
                                    {student.flags.length} flag(s)
                                  </span>
                                </div>
                              )}
                            </div>
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
                        <TableCell className="py-6 px-8">
                          <div className="space-y-1">
                            <div className="text-sm font-medium">
                              {student.lastAccess}
                            </div>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {student.totalAccessTime}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          {getStatusBadge(student.status)}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          <div className="space-y-2">
                            <AccessLogsModal student={student} />
                            <ReportsModal student={student} />
                            <CommentsModal student={student} />
                          </div>
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
                              className="rounded-xl bg-white"
                            >
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>Edit Student</DropdownMenuItem>
                              <DropdownMenuItem>
                                Manage Courses
                              </DropdownMenuItem>
                              <DropdownMenuItem>View Progress</DropdownMenuItem>
                              <DropdownMenuItem>
                                <Flag className="w-4 h-4 mr-2" />
                                Add Flag
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                Suspend Student
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={12}
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
