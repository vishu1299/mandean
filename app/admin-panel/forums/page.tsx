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
  MessageSquare,
  Users,
  TrendingUp,
} from "lucide-react";

interface ForumPost {
  id: number;
  userName: string;
  query: string;
  queryBrief: string;
  tags: string;
  status: "active" | "inactive" | "pending";
  createdDate: string;
  replies: number;
  views: number;
}

const forumData: ForumPost[] = [
  {
    id: 1,
    userName: "Love",
    query: "Kya lagta 2024 mai kon jeetega",
    queryBrief: "Who will be the pm in 2024",
    tags: "Political",
    status: "active",
    createdDate: "2022-05-18T12:55:40",
    replies: 24,
    views: 156,
  },
  {
    id: 2,
    userName: "Love",
    query: "Who was the best PM of India?",
    queryBrief: "Indira Gandhi",
    tags: "Political",
    status: "active",
    createdDate: "2022-05-18T12:57:56",
    replies: 18,
    views: 89,
  },
  {
    id: 3,
    userName: "Rahul",
    query: "Best programming language for beginners?",
    queryBrief: "Looking for advice on first programming language",
    tags: "Technology",
    status: "active",
    createdDate: "2022-05-19T09:30:15",
    replies: 32,
    views: 245,
  },
  {
    id: 4,
    userName: "Priya",
    query: "How to prepare for UPSC?",
    queryBrief: "Need guidance for civil services preparation",
    tags: "Education",
    status: "pending",
    createdDate: "2022-05-19T14:22:30",
    replies: 7,
    views: 67,
  },
  {
    id: 5,
    userName: "Amit",
    query: "Climate change effects in India",
    queryBrief: "Discussion on environmental impact",
    tags: "Environment",
    status: "active",
    createdDate: "2022-05-20T11:45:20",
    replies: 15,
    views: 123,
  },
  {
    id: 6,
    userName: "Sneha",
    query: "Women empowerment initiatives",
    queryBrief: "Government schemes for women development",
    tags: "Social",
    status: "active",
    createdDate: "2022-05-20T16:18:45",
    replies: 21,
    views: 178,
  },
  {
    id: 7,
    userName: "Vikash",
    query: "Startup funding in India",
    queryBrief: "How to get investment for new business",
    tags: "Business",
    status: "inactive",
    createdDate: "2022-05-21T08:12:10",
    replies: 9,
    views: 45,
  },
  {
    id: 8,
    userName: "Anita",
    query: "Digital India progress",
    queryBrief: "Impact of digitalization on rural areas",
    tags: "Technology",
    status: "active",
    createdDate: "2022-05-21T13:55:30",
    replies: 28,
    views: 201,
  },
  {
    id: 9,
    userName: "Deepak",
    query: "Indian economy post COVID",
    queryBrief: "Recovery and growth prospects",
    tags: "Economics",
    status: "active",
    createdDate: "2022-05-22T10:15:25",
    replies: 19,
    views: 134,
  },
  {
    id: 10,
    userName: "Kavya",
    query: "Space missions by ISRO",
    queryBrief: "Recent achievements and future plans",
    tags: "Science",
    status: "active",
    createdDate: "2022-05-22T15:30:40",
    replies: 26,
    views: 189,
  },
  {
    id: 11,
    userName: "Rohit",
    query: "Cricket World Cup predictions",
    queryBrief: "Which team will win the next tournament",
    tags: "Sports",
    status: "active",
    createdDate: "2022-05-23T09:45:15",
    replies: 41,
    views: 298,
  },
  {
    id: 12,
    userName: "Pooja",
    query: "Healthy lifestyle tips",
    queryBrief: "Diet and exercise recommendations",
    tags: "Health",
    status: "pending",
    createdDate: "2022-05-23T14:20:30",
    replies: 12,
    views: 87,
  },
  {
    id: 13,
    userName: "Arjun",
    query: "Renewable energy in India",
    queryBrief: "Solar and wind power development",
    tags: "Environment",
    status: "active",
    createdDate: "2022-05-24T11:10:20",
    replies: 17,
    views: 142,
  },
  {
    id: 14,
    userName: "Ritu",
    query: "Online education effectiveness",
    queryBrief: "Pros and cons of digital learning",
    tags: "Education",
    status: "active",
    createdDate: "2022-05-24T16:55:45",
    replies: 23,
    views: 167,
  },
  {
    id: 15,
    userName: "Karan",
    query: "Cryptocurrency regulations",
    queryBrief: "Government policies on digital currency",
    tags: "Finance",
    status: "inactive",
    createdDate: "2022-05-25T08:30:10",
    replies: 14,
    views: 95,
  },
];

export default function Forum() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter forum posts based on search term and status
  const filteredPosts = useMemo(() => {
    let filtered = forumData;

    // Filter by status
    if (statusFilter !== "all") {
      filtered = filtered.filter((post) => post.status === statusFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.query.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.queryBrief.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, statusFilter]);

  // Calculate pagination
  const totalEntries = filteredPosts.length;
  const entriesPerPageNum = Number.parseInt(entriesPerPage);
  const totalPages = Math.ceil(totalEntries / entriesPerPageNum);
  const startIndex = (currentPage - 1) * entriesPerPageNum;
  const endIndex = Math.min(startIndex + entriesPerPageNum, totalEntries);
  const currentEntries = filteredPosts.slice(startIndex, endIndex);

  // Calculate stats
  const totalReplies = filteredPosts.reduce(
    (sum, post) => sum + post.replies,
    0
  );
  const totalViews = filteredPosts.reduce((sum, post) => sum + post.views, 0);
  const activePosts = filteredPosts.filter(
    (post) => post.status === "active"
  ).length;

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      active: "bg-emerald-500 text-white shadow-sm",
      inactive: "bg-red-500 text-white shadow-sm",
      pending: "bg-amber-500 text-white shadow-sm",
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

  const getTagBadge = (tag: string) => {
    const tagColors = {
      Political: "bg-purple-100 text-purple-800",
      Technology: "bg-blue-100 text-blue-800",
      Education: "bg-green-100 text-green-800",
      Environment: "bg-teal-100 text-teal-800",
      Social: "bg-pink-100 text-pink-800",
      Business: "bg-orange-100 text-orange-800",
      Economics: "bg-indigo-100 text-indigo-800",
      Science: "bg-cyan-100 text-cyan-800",
      Sports: "bg-red-100 text-red-800",
      Health: "bg-lime-100 text-lime-800",
      Finance: "bg-yellow-100 text-yellow-800",
    };

    return (
      <span
        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
          tagColors[tag as keyof typeof tagColors] ||
          "bg-gray-100 text-gray-800"
        }`}
      >
        {tag}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return dateString.replace("T", " ").substring(0, 19);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="w-full mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 p-3">
          <Command className="w-6 h-6 text-gray-600" />
          <span className="text-gray-800 font-semibold text-xl"> Forum</span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-xl">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredPosts.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-xl">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Replies
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalReplies}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalViews.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-8">FORUM LIST</h2>

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
                    Status:
                  </span>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-36 h-11 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 font-semibold">
                  Search:
                </span>
                <Input
                  placeholder="Search posts, users, tags..."
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
                    <TableHead className="min-w-[140px] text-gray-800 font-bold py-6 px-8">
                      User name
                    </TableHead>
                    <TableHead className="min-w-[220px] text-gray-800 font-bold py-6 px-8">
                      Query
                    </TableHead>
                    <TableHead className="min-w-[200px] text-gray-800 font-bold py-6 px-8">
                      Query brief
                    </TableHead>
                    <TableHead className="min-w-[120px] text-gray-800 font-bold py-6 px-8">
                      Tags
                    </TableHead>
                    <TableHead className="min-w-[100px] text-gray-800 font-bold py-6 px-8">
                      Status
                    </TableHead>
                    <TableHead className="min-w-[100px] text-gray-800 font-bold py-6 px-8">
                      Engagement
                    </TableHead>
                    <TableHead className="min-w-[180px] text-gray-800 font-bold py-6 px-8">
                      Created date
                    </TableHead>
                    <TableHead className="min-w-[100px] text-gray-800 font-bold py-6 px-8 rounded-tr-2xl">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentEntries.length > 0 ? (
                    currentEntries.map((post, index) => (
                      <TableRow
                        key={post.id}
                        className={`${
                          index % 2 === 1 ? "bg-gray-50" : "bg-white"
                        } hover:bg-blue-50 transition-all duration-200 ${
                          index === currentEntries.length - 1
                            ? "rounded-b-2xl"
                            : ""
                        }`}
                      >
                        <TableCell className="text-gray-600 py-6 px-8 font-bold text-lg">
                          {startIndex + index + 1}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {post.userName.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-gray-800 font-semibold">
                              {post.userName}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-700 py-6 px-8 font-medium">
                          {post.query}
                        </TableCell>
                        <TableCell className="text-gray-600 py-6 px-8">
                          {post.queryBrief}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          {getTagBadge(post.tags)}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          {getStatusBadge(post.status)}
                        </TableCell>
                        <TableCell className="py-6 px-8">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                              <MessageSquare className="w-3 h-3" />
                              <span className="font-medium">
                                {post.replies}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                              <TrendingUp className="w-3 h-3" />
                              <span className="font-medium">{post.views}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-600 py-6 px-8 text-sm font-medium">
                          {formatDate(post.createdDate)}
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
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Post</DropdownMenuItem>
                              <DropdownMenuItem>Change Status</DropdownMenuItem>
                              <DropdownMenuItem>Pin Post</DropdownMenuItem>
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
                        colSpan={9}
                        className="text-center text-gray-500 py-16 px-8"
                      >
                        <div className="flex flex-col items-center gap-4">
                          <MessageSquare className="w-16 h-16 text-gray-300" />
                          <div className="text-xl font-semibold">
                            No forum posts found
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
