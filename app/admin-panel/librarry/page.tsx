"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  FileVideo,
  FileText,
  Plus,
  Calendar,
  User,
  File,
  Command,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Sample data for the library
const libraryData = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    type: "Video",
    category: "Web Development",
    uploadedBy: "John Doe",
    uploadedAt: "2024-01-15",
    size: "125 MB",
    status: "Active",
    downloads: 45,
    views: 234,
  },
  {
    id: 2,
    title: "JavaScript ES6 Guide",
    type: "PDF",
    category: "Programming",
    uploadedBy: "Jane Smith",
    uploadedAt: "2024-01-14",
    size: "2.3 MB",
    status: "Active",
    downloads: 78,
    views: 156,
  },
  {
    id: 3,
    title: "Advanced CSS Techniques",
    type: "Video",
    category: "Web Development",
    uploadedBy: "Mike Johnson",
    uploadedAt: "2024-01-13",
    size: "89 MB",
    status: "Active",
    downloads: 23,
    views: 89,
  },
  {
    id: 4,
    title: "Database Design Principles",
    type: "PDF",
    category: "Database",
    uploadedBy: "Sarah Wilson",
    uploadedAt: "2024-01-12",
    size: "5.1 MB",
    status: "Inactive",
    downloads: 12,
    views: 67,
  },
  {
    id: 5,
    title: "Node.js Backend Development",
    type: "Video",
    category: "Programming",
    uploadedBy: "Alex Brown",
    uploadedAt: "2024-01-11",
    size: "200 MB",
    status: "Active",
    downloads: 56,
    views: 178,
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    type: "PDF",
    category: "Design",
    uploadedBy: "Emma Davis",
    uploadedAt: "2024-01-10",
    size: "8.2 MB",
    status: "Active",
    downloads: 34,
    views: 112,
  },
  {
    id: 7,
    title: "Python Data Science",
    type: "Video",
    category: "Programming",
    uploadedBy: "Tom Wilson",
    uploadedAt: "2024-01-09",
    size: "150 MB",
    status: "Active",
    downloads: 89,
    views: 245,
  },
  {
    id: 8,
    title: "MongoDB Tutorial",
    type: "PDF",
    category: "Database",
    uploadedBy: "Lisa Johnson",
    uploadedAt: "2024-01-08",
    size: "3.5 MB",
    status: "Inactive",
    downloads: 21,
    views: 78,
  },
];

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const filteredData = libraryData.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesType = selectedType === "All" || item.type === selectedType;
    const matchesStatus =
      selectedStatus === "All" || item.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesType && matchesStatus;
  });

  // Pagination calculations
  const totalEntries = filteredData.length;
  const totalPages = Math.ceil(totalEntries / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalEntries);
  const currentEntries = filteredData.slice(startIndex, endIndex);

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-emerald-500" : "bg-slate-400";
  };

  const getTypeIcon = (type: string) => {
    return type === "Video" ? (
      <FileVideo className="w-3 h-3" />
    ) : (
      <FileText className="w-3 h-3" />
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 p-3">
          <Command className="w-6 h-6 text-gray-600" />
          <span className="text-gray-800 font-semibold text-xl">Library</span>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-1">
                Quick Upload
              </h2>
              <p className="text-slate-600">
                Drag and drop your files or browse to upload
              </p>
            </div>
            <Dialog
              open={isUploadDialogOpen}
              onOpenChange={setIsUploadDialogOpen}
            >
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg px-6 py-3 rounded-xl font-medium">
                  <Plus className="w-5 h-5 mr-2" />
                  Upload New File
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-white">
                <DialogHeader>
                  <DialogTitle>Upload New File</DialogTitle>
                  <DialogDescription>
                    Upload a video or PDF file to the library
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="file-upload">Select File</Label>
                    <Input
                      id="file-upload"
                      type="file"
                      accept=".mp4,.avi,.mov,.pdf"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter file title"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="web-development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="programming">Programming</SelectItem>
                        <SelectItem value="database">Database</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsUploadDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-amber-400 hover:bg-amber-50 transition-all duration-200 cursor-pointer group">
              <FileVideo className="w-12 h-12 text-slate-400 group-hover:text-amber-500 mx-auto mb-3 transition-colors" />
              <p className="text-slate-700 font-medium mb-1">
                Drop video files here or click to browse
              </p>
              <p className="text-sm text-slate-500">
                MP4, AVI, MOV up to 500MB
              </p>
            </div>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-amber-400 hover:bg-amber-50 transition-all duration-200 cursor-pointer group">
              <FileText className="w-12 h-12 text-slate-400 group-hover:text-amber-500 mx-auto mb-3 transition-colors" />
              <p className="text-slate-700 font-medium mb-1">
                Drop PDF files here or click to browse
              </p>
              <p className="text-sm text-slate-500">PDF up to 50MB</p>
            </div>
          </div>
        </div>

        {/* Table with improved typography */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-gray-50">
                  <th className="w-12 text-xs font-medium text-slate-600 uppercase tracking-wider py-4 px-4 text-left">
                    #
                  </th>
                  <th className="text-xs font-medium text-slate-600 uppercase tracking-wider py-4 px-4 text-left">
                    Title
                  </th>
                  <th className="text-xs font-medium text-slate-600 uppercase tracking-wider py-4 px-4 text-left">
                    Type
                  </th>
                  <th className="text-xs font-medium text-slate-600 uppercase tracking-wider py-4 px-4 text-left">
                    Category
                  </th>
                  <th className="text-xs font-medium text-slate-600 uppercase tracking-wider py-4 px-4 text-left">
                    Uploaded By
                  </th>
                  <th className="text-xs font-medium text-slate-600 uppercase tracking-wider py-4 px-4 text-left">
                    Date
                  </th>
                  <th className="text-xs font-medium text-slate-600 uppercase tracking-wider py-4 px-4 text-left">
                    Size
                  </th>
                  <th className="text-xs font-medium text-slate-600 uppercase tracking-wider py-4 px-4 text-left">
                    Status
                  </th>
                  <th className="text-xs font-medium text-slate-600 uppercase tracking-wider py-4 px-4 text-left">
                    Downloads
                  </th>
                  <th className="text-xs font-medium text-slate-600 uppercase tracking-wider py-4 px-4 text-left">
                    Views
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentEntries.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="text-sm font-medium text-slate-500 py-4 px-4">
                      {startIndex + index + 1}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-1.5 bg-slate-100 rounded-md">
                          {getTypeIcon(item.type)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer transition-colors">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge
                        variant="outline"
                        className="text-xs font-normal px-2 py-1 rounded-md border-0 bg-slate-100 text-slate-600"
                      >
                        {item.type}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-blue-100 text-blue-700 font-normal px-2 py-1 rounded-md border-0"
                      >
                        {item.category}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="p-1 bg-slate-100 rounded-full">
                          <User className="w-3 h-3 text-slate-500" />
                        </div>
                        <span className="text-sm text-slate-700 font-normal">
                          {item.uploadedBy}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="p-1 bg-slate-100 rounded-full">
                          <Calendar className="w-3 h-3 text-slate-500" />
                        </div>
                        <span className="text-sm text-slate-600 font-normal">
                          {item.uploadedAt}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="p-1 bg-slate-100 rounded-full">
                          <File className="w-3 h-3 text-slate-500" />
                        </div>
                        <span className="text-sm text-slate-600 font-normal">
                          {item.size}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-2 h-2 rounded-full ${getStatusColor(
                            item.status
                          )} shadow-sm`}
                        ></div>
                        <span className="text-sm text-slate-700 font-normal">
                          {item.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-700 font-medium">
                      {item.downloads}
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-700 font-medium">
                      {item.views}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mt-8 pt-8 px-8 pb-8">
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
      </div>
    </div>
  );
}
