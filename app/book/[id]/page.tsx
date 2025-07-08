"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Download,
  Play,
  Star,
  Clock,
  BookOpen,
  Globe,
  Award,
  Users,
  FileText,
  Video,
  Calendar,
  Hash,
  Eye,
  Share2,
  Bookmark,
  CheckCircle,
} from "lucide-react";

// Mock data - in real app, this would come from API/database
const getBookById = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Advanced Programming Concepts For Everyone",
    author: "Robert C. Martin",
    imageurl: "/books/bookone.png",
    heroImage: "/placeholder.svg?height=400&width=600",
    description:
      "The most impressive collection of programming concepts and best practices for modern software development",
    longDescription:
      "In this comprehensive guide, take you from the fundamentals and concepts of programming all the way through advanced techniques and best practices that you'll need to build robust applications in your organization. You'll find many examples that clearly demonstrate the key concepts covered in this guide and design patterns.",
    category: "Technology",
    publishedDate: "2023-01-15",
    pages: 432,
    language: "English",
    isbn: "978-0-123456-78-9",
    rating: 4.8,
    totalRatings: 1247,
    pdfUrl: "/books/programming-guide.pdf",
    videoUrl: "/books/programming-tutorial.mp4",
    fileSize: "15.2 MB",
    duration: "3h 45m",
    level: "Intermediate",
    chapters: 24,
    exercises: 45,
    downloads: 2840,
    views: 15420,
    certificate: true,
    price: 0, // Free
    originalPrice: 89,
    discount: "100% Off",
  };
};

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = getBookById(params.id);
  const [activeTab, setActiveTab] = useState("overview");

  const learningPoints = [
    "Master advanced programming concepts and design patterns",
    "Learn clean code principles and best practices",
    "Build scalable and maintainable applications",
    "Understand software architecture and system design",
    "Apply modern development methodologies",
    "Debug and optimize code performance effectively",
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/student/library"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Library
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-green-500 text-white px-3 py-1">
                  {book.category}
                </Badge>
                <Badge className="bg-orange-500 text-white px-3 py-1">
                  {book.discount}
                </Badge>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {book.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{book.description}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {book.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{book.author}</p>
                    <div className="flex items-center gap-2">
                      {renderStars(book.rating)}
                      <span className="text-sm text-gray-600">
                        {book.rating} ({book.totalRatings} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Image/Video */}
              <div className="relative rounded-lg overflow-hidden mb-8">
                <Image
                  src={
                    book.heroImage || "/placeholder.svg?height=400&width=800"
                  }
                  alt={book.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 rounded-full p-4"
                  >
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Book Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {book.longDescription}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What You'll Learn in This Book:
              </h3>
              <div className="space-y-3 mb-8">
                {learningPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                By the end of this book, you'll be all set to not only put these
                principles to work but also to make the key programming and
                design decisions required by the modern software development
                that transcend the nuts-and-bolts that clearly covered in this
                comprehensive guide.
              </p>
            </div>
          </div>

          {/* Sidebar */}
        </div>
      </div>
    </div>
  );
}
