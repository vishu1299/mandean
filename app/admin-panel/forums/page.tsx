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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Users,
  TrendingUp,
  Megaphone,
  BookOpen,
  Plus,
  Heart,
  MessageCircle,
  Share2,
  Pin,
  Lock,
  Globe,
  GraduationCap,
  Send,
  Eye,
  ThumbsUp,
  Reply,
} from "lucide-react";

// Types
interface User {
  id: string;
  name: string;
  role: "admin" | "teacher" | "student" | "guest";
  avatar?: string;
}

interface ForumPost {
  id: number;
  userName: string;
  userRole: "admin" | "teacher" | "student";
  query: string;
  queryBrief: string;
  content: string;
  tags: string;
  status: "active" | "inactive" | "pending" | "pinned";
  createdDate: string;
  replies: number;
  views: number;
  likes: number;
  courseId?: string;
  courseName?: string;
  isPinned: boolean;
  isAnnouncement: boolean;
  level: "public" | "general" | "course";
}

// Mock Data
const currentUser: User = {
  id: "1",
  name: "John Doe",
  role: "student", // Change this to test different roles: "guest", "student", "teacher", "admin"
};

const forumData: ForumPost[] = [
  // Public Announcements (Level 1)
  {
    id: 1,
    userName: "Admin",
    userRole: "admin",
    query: "Platform Maintenance Notice",
    queryBrief: "Scheduled maintenance on Sunday",
    content:
      "The platform will be under maintenance this Sunday from 2 AM to 6 AM IST. Please plan accordingly.",
    tags: "Announcement",
    status: "pinned",
    createdDate: "2024-01-15T10:00:00",
    replies: 0,
    views: 1250,
    likes: 45,
    isPinned: true,
    isAnnouncement: true,
    level: "public",
  },
  {
    id: 2,
    userName: "Admin",
    userRole: "admin",
    query: "New Course Launch",
    queryBrief: "Advanced React Development course now available",
    content:
      "We're excited to announce the launch of our new Advanced React Development course. Early bird discount available!",
    tags: "Course Launch",
    status: "active",
    createdDate: "2024-01-14T14:30:00",
    replies: 0,
    views: 890,
    likes: 67,
    isPinned: false,
    isAnnouncement: true,
    level: "public",
  },

  // General Forum (Level 2)
  {
    id: 3,
    userName: "Rahul",
    userRole: "student",
    query: "Best programming language for beginners?",
    queryBrief: "Looking for advice on first programming language",
    content:
      "I'm new to programming and confused about which language to start with. I've heard Python is good for beginners, but also considering JavaScript. What do you all think?",
    tags: "Programming",
    status: "active",
    createdDate: "2024-01-13T09:30:15",
    replies: 32,
    views: 245,
    likes: 18,
    isPinned: false,
    isAnnouncement: false,
    level: "general",
  },
  {
    id: 4,
    userName: "Priya",
    userRole: "student",
    query: "Study group for Data Science",
    queryBrief: "Looking for study partners",
    content:
      "Anyone interested in forming a study group for Data Science? We can meet weekly to discuss concepts and work on projects together.",
    tags: "Study Group",
    status: "active",
    createdDate: "2024-01-12T14:22:30",
    replies: 15,
    views: 167,
    likes: 23,
    isPinned: false,
    isAnnouncement: false,
    level: "general",
  },

  // Course-specific Forum (Level 3)
  {
    id: 5,
    userName: "Dr. Smith",
    userRole: "teacher",
    query: "Week 3 Assignment Guidelines",
    queryBrief: "Important instructions for React assignment",
    content:
      "Please note the updated guidelines for Week 3 assignment. Focus on component lifecycle and state management. Deadline: Friday 11:59 PM.",
    tags: "Assignment",
    status: "pinned",
    createdDate: "2024-01-11T11:45:20",
    replies: 8,
    views: 123,
    likes: 12,
    courseId: "react-101",
    courseName: "React Fundamentals",
    isPinned: true,
    isAnnouncement: false,
    level: "course",
  },
  {
    id: 6,
    userName: "Prof. Johnson",
    userRole: "teacher",
    query: "Additional Resources for Machine Learning",
    queryBrief: "Supplementary materials and readings",
    content:
      "I've uploaded additional resources in the course materials section. These will help you understand the concepts better. Please review before next class.",
    tags: "Resources",
    status: "active",
    createdDate: "2024-01-10T16:18:45",
    replies: 21,
    views: 178,
    likes: 34,
    courseId: "ml-advanced",
    courseName: "Advanced Machine Learning",
    isPinned: false,
    isAnnouncement: false,
    level: "course",
  },
];

const mockReplies = [
  {
    id: "r1",
    postId: 3,
    userName: "Amit",
    userRole: "student",
    content:
      "I'd recommend starting with Python. It has a very readable syntax and is great for beginners.",
    createdDate: "2024-01-13T10:15:00",
    likes: 5,
  },
  {
    id: "r2",
    postId: 3,
    userName: "Sarah",
    userRole: "teacher",
    content:
      "Both Python and JavaScript are excellent choices. Python for data science and backend, JavaScript for web development.",
    createdDate: "2024-01-13T11:30:00",
    likes: 12,
  },
];

// Components
function PublicAnnouncements() {
  const publicPosts = forumData.filter((post) => post.level === "public");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto max-w-6xl p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Megaphone className="w-6 h-6 text-blue-600" />
          <span className="text-gray-800 font-semibold text-xl">
            Public Announcements
          </span>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Globe className="w-3 h-3 mr-1" />
            Public Access
          </Badge>
        </div>

        {/* Announcements Grid */}
        <div className="space-y-6">
          {publicPosts.map((post) => (
            <Card
              key={post.id}
              className={`${post.isPinned ? "border-blue-500 bg-blue-50" : ""}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {post.isPinned && <Pin className="w-4 h-4 text-blue-600" />}
                    <div>
                      <CardTitle className="text-lg">{post.query}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        {post.queryBrief}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-red-100 text-red-800">
                    <Megaphone className="w-3 h-3 mr-1" />
                    Announcement
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes} likes
                    </span>
                  </div>
                  <span>
                    Posted by {post.userName} •{" "}
                    {new Date(post.createdDate).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sign In Prompt */}
        <Card className="mt-8 border-dashed border-2 border-gray-300">
          <CardContent className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Join the Discussion
            </h3>
            <p className="text-gray-500 mb-6">
              Sign in to access the full forum, interact with other users, and
              participate in course discussions.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Sign In to Continue
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function GeneralForum() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [newPostOpen, setNewPostOpen] = useState(false);

  const generalPosts = forumData.filter((post) => post.level === "general");

  const filteredPosts = useMemo(() => {
    let filtered = generalPosts;

    if (statusFilter !== "all") {
      filtered = filtered.filter((post) => post.status === statusFilter);
    }

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
  }, [searchTerm, statusFilter, generalPosts]);

  const totalEntries = filteredPosts.length;
  const entriesPerPageNum = Number.parseInt(entriesPerPage);
  const totalPages = Math.ceil(totalEntries / entriesPerPageNum);
  const startIndex = (currentPage - 1) * entriesPerPageNum;
  const endIndex = Math.min(startIndex + entriesPerPageNum, totalEntries);
  const currentEntries = filteredPosts.slice(startIndex, endIndex);

  const totalReplies = filteredPosts.reduce(
    (sum, post) => sum + post.replies,
    0
  );
  const totalViews = filteredPosts.reduce((sum, post) => sum + post.views, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto max-w-6xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-green-600" />
            <span className="text-gray-800 font-semibold text-xl">
              General Forum
            </span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Users className="w-3 h-3 mr-1" />
              Community
            </Badge>
          </div>
          <Dialog open={newPostOpen} onOpenChange={setNewPostOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Post</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter post title..." />
                </div>
                <div>
                  <Label htmlFor="brief">Brief Description</Label>
                  <Input id="brief" placeholder="Brief description..." />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your post content..."
                    rows={6}
                  />
                </div>
                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a tag" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="study-group">Study Group</SelectItem>
                      <SelectItem value="career">Career</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setNewPostOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setNewPostOpen(false)}>Post</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Posts
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {filteredPosts.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
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
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Views
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalViews.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Forum Posts */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 font-semibold">
                    Show
                  </span>
                  <Select
                    value={entriesPerPage}
                    onValueChange={setEntriesPerPage}
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
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
                    <SelectTrigger className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
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
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentEntries.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-md transition-shadow border-0"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {post.userName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {post.query}
                          </h3>
                          <p className="text-sm text-gray-600">
                            by {post.userName}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">
                        {post.tags}
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-4">{post.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <button className="flex items-center gap-1 hover:text-blue-600">
                          <ThumbsUp className="w-4 h-4" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-green-600">
                          <MessageCircle className="w-4 h-4" />
                          {post.replies}
                        </button>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                        <button className="flex items-center gap-1 hover:text-purple-600">
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(post.createdDate).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8">
              <div className="text-sm text-gray-600">
                Showing {currentEntries.length > 0 ? startIndex + 1 : 0} to{" "}
                {endIndex} of {totalEntries} entries
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
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
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CourseForum({
  courseId = "react-101",
  courseName = "React Fundamentals",
}: {
  courseId?: string;
  courseName?: string;
}) {
  const [newPostOpen, setNewPostOpen] = useState(false);
  const [replyOpen, setReplyOpen] = useState<number | null>(null);

  const coursePosts = forumData.filter(
    (post) => post.level === "course" && post.courseId === courseId
  );
  const isTeacher =
    currentUser.role === "teacher" || currentUser.role === "admin";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto max-w-6xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-purple-600" />
            <div>
              <span className="text-gray-800 font-semibold text-xl">
                {courseName} Forum
              </span>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800 ml-2"
              >
                <Lock className="w-3 h-3 mr-1" />
                Course Only
              </Badge>
            </div>
          </div>
          {isTeacher && (
            <Dialog open={newPostOpen} onOpenChange={setNewPostOpen}>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Announcement
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Course Announcement</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter announcement title..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="brief">Brief Description</Label>
                    <Input id="brief" placeholder="Brief description..." />
                  </div>
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your announcement..."
                      rows={6}
                    />
                  </div>
                  <div>
                    <Label htmlFor="tags">Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="assignment">Assignment</SelectItem>
                        <SelectItem value="resources">Resources</SelectItem>
                        <SelectItem value="announcement">
                          General Announcement
                        </SelectItem>
                        <SelectItem value="discussion">
                          Discussion Topic
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="pin" />
                    <Label htmlFor="pin">Pin this post</Label>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setNewPostOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => setNewPostOpen(false)}>Post</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>

        {/* Course Info */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border-0">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {courseName}
                </h2>
                <p className="text-gray-600">
                  Course-specific discussions and announcements
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>{coursePosts.length} posts</span>
                  <span>•</span>
                  <span>Instructor: Dr. Smith</span>
                  <span>•</span>
                  <span>45 students enrolled</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Posts */}
        <div className="space-y-6">
          {coursePosts.map((post) => (
            <Card
              key={post.id}
              className={`${
                post.isPinned ? "border-purple-500 bg-purple-50" : "border-0"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {post.isPinned && (
                      <Pin className="w-4 h-4 text-purple-600" />
                    )}
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {post.userName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{post.query}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">
                          by {post.userName}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {post.userRole === "teacher"
                            ? "Instructor"
                            : "Student"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">
                    {post.tags}
                  </Badge>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-blue-600">
                      <ThumbsUp className="w-4 h-4" />
                      {post.likes}
                    </button>
                    <button
                      className="flex items-center gap-1 hover:text-green-600"
                      onClick={() =>
                        setReplyOpen(replyOpen === post.id ? null : post.id)
                      }
                    >
                      <Reply className="w-4 h-4" />
                      Reply ({post.replies})
                    </button>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(post.createdDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Reply Section */}
                {replyOpen === post.id && (
                  <div className="mt-6 pt-6 border-t">
                    <div className="space-y-4">
                      {mockReplies
                        .filter((reply) => reply.postId === post.id)
                        .map((reply) => (
                          <div
                            key={reply.id}
                            className="flex gap-3 p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                              {reply.userName.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium text-sm">
                                  {reply.userName}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  {reply.userRole}
                                </Badge>
                                <span className="text-xs text-gray-500">
                                  {new Date(
                                    reply.createdDate
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                              <p className="text-sm text-gray-700">
                                {reply.content}
                              </p>
                              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 mt-2">
                                <ThumbsUp className="w-3 h-3" />
                                {reply.likes}
                              </button>
                            </div>
                          </div>
                        ))}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {currentUser.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 flex gap-2">
                          <Input
                            placeholder="Write a reply..."
                            className="flex-1"
                          />
                          <Button size="sm">
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main Forum System Component
export default function ForumSystem() {
  const [currentLevel, setCurrentLevel] = useState<
    "public" | "general" | "course"
  >("public");
  const [selectedCourse, setSelectedCourse] = useState({
    id: "react-101",
    name: "React Fundamentals",
  });

  // Simulate authentication state
  const isLoggedIn = currentUser.role !== "guest";

  return (
    <div>
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-bold text-gray-900">Forum System</h1>
              <div className="flex items-center gap-2">
                <Button
                  variant={currentLevel === "public" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentLevel("public")}
                  className="flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Public
                </Button>
                {isLoggedIn && (
                  <>
                    <Button
                      variant={currentLevel === "general" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setCurrentLevel("general")}
                      className="flex items-center gap-2"
                    >
                      <Users className="w-4 h-4" />
                      General Forum
                    </Button>
                    <Button
                      variant={currentLevel === "course" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setCurrentLevel("course")}
                      className="flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      Course Forum
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline">
                {currentUser.role === "guest"
                  ? "Not Logged In"
                  : `${currentUser.name} (${currentUser.role})`}
              </Badge>
              {currentLevel === "course" && isLoggedIn && (
                <Select
                  value={selectedCourse.id}
                  onValueChange={(value) => {
                    const courses = {
                      "react-101": "React Fundamentals",
                      "ml-advanced": "Advanced Machine Learning",
                      "python-basics": "Python Basics",
                    };
                    setSelectedCourse({
                      id: value,
                      name: courses[value as keyof typeof courses],
                    });
                  }}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react-101">
                      React Fundamentals
                    </SelectItem>
                    <SelectItem value="ml-advanced">
                      Advanced Machine Learning
                    </SelectItem>
                    <SelectItem value="python-basics">Python Basics</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      {currentLevel === "public" && <PublicAnnouncements />}
      {currentLevel === "general" && isLoggedIn && <GeneralForum />}
      {currentLevel === "course" && isLoggedIn && (
        <CourseForum
          courseId={selectedCourse.id}
          courseName={selectedCourse.name}
        />
      )}
      {!isLoggedIn && currentLevel !== "public" && (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <Card className="max-w-md border-0">
            <CardContent className="text-center py-12">
              <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Access Restricted
              </h3>
              <p className="text-gray-500 mb-6">
                Please sign in to access this forum level.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
