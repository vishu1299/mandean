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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Command,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  DollarSign,
  Users,
  TrendingUp,
  Eye,
  CheckCircle,
  Clock,
  Gift,
} from "lucide-react";
import Image from "next/image";

interface Payout {
  id: number;
  image: string;
  instructor: string;
  paymentType: string;
  payoutDate: string;
  payoutAmount: number;
}

interface Donation {
  id: number;
  donorName: string;
  donorEmail: string;
  instructor: string;
  instructorImage: string;
  amount: number;
  donationType: "content" | "live" | "platform";
  contentTitle?: string;
  liveSessionTitle?: string;
  donationDate: string;
  status: "pending" | "processed" | "completed";
  message?: string;
  processingFee: number;
  netAmount: number;
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
];

const donationsData: Donation[] = [
  {
    id: 1,
    donorName: "Rahul Kumar",
    donorEmail: "rahul@example.com",
    instructor: "Deepak Arya",
    instructorImage: "/placeholder.svg?height=40&width=40",
    amount: 500,
    donationType: "content",
    contentTitle: "Advanced React Concepts",
    donationDate: "2024-01-15T10:30:00",
    status: "completed",
    message: "Great explanation! Very helpful.",
    processingFee: 25,
    netAmount: 475,
  },
  {
    id: 2,
    donorName: "Priya Singh",
    donorEmail: "priya@example.com",
    instructor: "Mayank Jedia",
    instructorImage: "/placeholder.svg?height=40&width=40",
    amount: 1000,
    donationType: "live",
    liveSessionTitle: "JavaScript Fundamentals Live Session",
    donationDate: "2024-01-14T15:45:00",
    status: "processed",
    message: "Amazing live session, learned a lot!",
    processingFee: 50,
    netAmount: 950,
  },
  {
    id: 3,
    donorName: "Anonymous",
    donorEmail: "anonymous@platform.com",
    instructor: "Platform",
    instructorImage: "/placeholder.svg?height=40&width=40",
    amount: 2000,
    donationType: "platform",
    donationDate: "2024-01-13T09:20:00",
    status: "completed",
    message: "Supporting the platform's growth",
    processingFee: 100,
    netAmount: 1900,
  },
  {
    id: 4,
    donorName: "Amit Sharma",
    donorEmail: "amit@example.com",
    instructor: "Love Baghel",
    instructorImage: "/placeholder.svg?height=40&width=40",
    amount: 750,
    donationType: "content",
    contentTitle: "Python Data Science Course",
    donationDate: "2024-01-12T14:15:00",
    status: "pending",
    message: "Excellent content quality!",
    processingFee: 37.5,
    netAmount: 712.5,
  },
  {
    id: 5,
    donorName: "Sneha Patel",
    donorEmail: "sneha@example.com",
    instructor: "Narendra Modi",
    instructorImage: "/placeholder.svg?height=40&width=40",
    amount: 300,
    donationType: "live",
    liveSessionTitle: "Leadership Masterclass",
    donationDate: "2024-01-11T16:30:00",
    status: "processed",
    message: "Inspiring session!",
    processingFee: 15,
    netAmount: 285,
  },
  {
    id: 6,
    donorName: "Vikash Gupta",
    donorEmail: "vikash@example.com",
    instructor: "Mohit Sharma",
    instructorImage: "/placeholder.svg?height=40&width=40",
    amount: 1200,
    donationType: "content",
    contentTitle: "Full Stack Development",
    donationDate: "2024-01-10T11:45:00",
    status: "completed",
    message: "Best course ever!",
    processingFee: 60,
    netAmount: 1140,
  },
];

function DonationDetailsModal({ donation }: { donation: Donation }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-800"
        >
          <Eye className="w-4 h-4 mr-1" />
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-purple-600" />
            Donation Details
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">
                Donor Information
              </label>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium">{donation.donorName}</p>
                <p className="text-sm text-gray-600">{donation.donorEmail}</p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">
                Recipient
              </label>
              <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                <Image
                  src="/profile.png"
                  alt={donation.instructor}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">{donation.instructor}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">
                Amount
              </label>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-lg font-bold text-green-600">
                  ₹{donation.amount.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">
                Processing Fee
              </label>
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-lg font-bold text-red-600">
                  ₹{donation.processingFee.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">
                Net Amount
              </label>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-lg font-bold text-blue-600">
                  ₹{donation.netAmount.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Donation Type & Context
            </label>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  className={`${
                    donation.donationType === "content"
                      ? "bg-blue-100 text-blue-800"
                      : donation.donationType === "live"
                      ? "bg-green-100 text-green-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {donation.donationType === "content"
                    ? "Content Donation"
                    : donation.donationType === "live"
                    ? "Live Session Donation"
                    : "Platform Donation"}
                </Badge>
                <Badge
                  className={`${
                    donation.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : donation.status === "processed"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {donation.status}
                </Badge>
              </div>
              {donation.contentTitle && (
                <p className="text-sm">
                  <strong>Content:</strong> {donation.contentTitle}
                </p>
              )}
              {donation.liveSessionTitle && (
                <p className="text-sm">
                  <strong>Live Session:</strong> {donation.liveSessionTitle}
                </p>
              )}
            </div>
          </div>

          {donation.message && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">
                Donor Message
              </label>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm italic">"{donation.message}"</p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Donation Date
            </label>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm">
                {new Date(donation.donationDate).toLocaleString()}
              </p>
            </div>
          </div>

          {donation.status === "pending" && (
            <div className="flex gap-2 pt-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <CheckCircle className="w-4 h-4 mr-2" />
                Process Donation
              </Button>
              <Button variant="outline">
                <Clock className="w-4 h-4 mr-2" />
                Mark as Processed
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function InstructorPayoutsWithDonations() {
  const [activeMainTab, setActiveMainTab] = useState("payouts");
  const [activePayoutTab, setActivePayoutTab] = useState("completed");
  const [activeTypeTab, setActiveTypeTab] = useState("counselling");
  const [activeDonationTab, setActiveDonationTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("25");
  const [currentPage, setCurrentPage] = useState(1);
  const [monthFilter, setMonthFilter] = useState("4");
  const [yearFilter, setYearFilter] = useState("2025");

  // Filter payouts based on active tabs and search
  const filteredPayouts = useMemo(() => {
    let filtered = payoutsData;

    if (activePayoutTab === "pending") {
      filtered = [];
    }

    if (activeTypeTab === "counselling") {
      filtered = filtered.filter(
        (payout) => payout.paymentType === "Counselling"
      );
    } else if (activeTypeTab === "liveclass") {
      filtered = filtered.filter(
        (payout) => payout.paymentType === "Live Class"
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (payout) =>
          payout.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          payout.paymentType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [activePayoutTab, activeTypeTab, searchTerm]);

  // Filter donations based on active tabs and search
  const filteredDonations = useMemo(() => {
    let filtered = donationsData;

    if (activeDonationTab !== "all") {
      if (activeDonationTab === "instructor") {
        filtered = filtered.filter(
          (donation) => donation.donationType !== "platform"
        );
      } else if (activeDonationTab === "platform") {
        filtered = filtered.filter(
          (donation) => donation.donationType === "platform"
        );
      } else {
        filtered = filtered.filter(
          (donation) => donation.status === activeDonationTab
        );
      }
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (donation) =>
          donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          donation.instructor
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          donation.donorEmail.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [activeDonationTab, searchTerm]);

  // Calculate pagination for current active tab
  const currentData =
    activeMainTab === "payouts" ? filteredPayouts : filteredDonations;
  const totalEntries = currentData.length;
  const entriesPerPageNum = Number.parseInt(entriesPerPage);
  const totalPages = Math.ceil(totalEntries / entriesPerPageNum);
  const startIndex = (currentPage - 1) * entriesPerPageNum;
  const endIndex = Math.min(startIndex + entriesPerPageNum, totalEntries);
  const currentEntries = currentData.slice(startIndex, endIndex);

  // Calculate totals
  const payoutGrandTotal = filteredPayouts.reduce(
    (sum, payout) => sum + payout.payoutAmount,
    0
  );
  const donationGrandTotal = filteredDonations.reduce(
    (sum, donation) => sum + donation.amount,
    0
  );
  const donationNetTotal = filteredDonations.reduce(
    (sum, donation) => sum + donation.netAmount,
    0
  );

  // Donation statistics
  const donationStats = {
    total: donationsData.length,
    totalAmount: donationsData.reduce((sum, d) => sum + d.amount, 0),
    platformDonations: donationsData.filter(
      (d) => d.donationType === "platform"
    ).length,
    instructorDonations: donationsData.filter(
      (d) => d.donationType !== "platform"
    ).length,
    pending: donationsData.filter((d) => d.status === "pending").length,
    processed: donationsData.filter((d) => d.status === "processed").length,
    completed: donationsData.filter((d) => d.status === "completed").length,
  };

  const handleFilter = () => {
    console.log("Filter applied:", { monthFilter, yearFilter });
  };

  const handleExport = () => {
    const dataToExport =
      activeMainTab === "payouts" ? filteredPayouts : filteredDonations;
    console.log("Exporting data:", dataToExport);
    // Implement export functionality here
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="w-full mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Command className="w-6 h-6 text-gray-500" />
            <h1 className="text-2xl font-semibold text-gray-800 p-3">
              Instructor Payouts & Donations
            </h1>
          </div>
        </div>

        {/* Stats Cards */}
        {activeMainTab === "donations" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Gift className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Donations
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {donationStats.total}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Amount
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      ₹{donationStats.totalAmount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Instructor Donations
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {donationStats.instructorDonations}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-8">
            {/* Main Tabs */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => {
                  setActiveMainTab("payouts");
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeMainTab === "payouts"
                    ? "bg-gray-800 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <DollarSign className="w-4 h-4 mr-2 inline" />
                Payouts
              </button>
              <button
                onClick={() => {
                  setActiveMainTab("donations");
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeMainTab === "donations"
                    ? "bg-gray-800 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Heart className="w-4 h-4 mr-2 inline" />
                Donations
              </button>
            </div>

            <h2 className="text-sm font-semibold text-gray-900 mb-8 tracking-wide">
              {activeMainTab === "payouts"
                ? "LIST OF PAYOUTS"
                : "LIST OF DONATIONS"}
            </h2>

            {/* Sub Tabs */}
            <div className="mb-8">
              {activeMainTab === "payouts" ? (
                <>
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
                </>
              ) : (
                /* Donation Tabs */
                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveDonationTab("all")}
                    className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeDonationTab === "all"
                        ? "bg-gray-800 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    All Donations
                  </button>
                  <button
                    onClick={() => setActiveDonationTab("instructor")}
                    className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeDonationTab === "instructor"
                        ? "bg-gray-800 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Instructor Donations
                  </button>
                  <button
                    onClick={() => setActiveDonationTab("platform")}
                    className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeDonationTab === "platform"
                        ? "bg-gray-800 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Platform Donations
                  </button>
                  <button
                    onClick={() => setActiveDonationTab("pending")}
                    className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeDonationTab === "pending"
                        ? "bg-gray-800 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Pending ({donationStats.pending})
                  </button>
                  <button
                    onClick={() => setActiveDonationTab("completed")}
                    className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeDonationTab === "completed"
                        ? "bg-gray-800 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Completed ({donationStats.completed})
                  </button>
                </div>
              )}
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
                    placeholder={
                      activeMainTab === "payouts"
                        ? "Search instructors..."
                        : "Search donations..."
                    }
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
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
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
                    {activeMainTab === "payouts" ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <TableHead className="min-w-[150px] text-gray-700 font-semibold py-4 px-6">
                          Donor
                        </TableHead>
                        <TableHead className="min-w-[180px] text-gray-700 font-semibold py-4 px-6">
                          Recipient
                        </TableHead>
                        <TableHead className="min-w-[120px] text-gray-700 font-semibold py-4 px-6">
                          Type
                        </TableHead>
                        <TableHead className="min-w-[140px] text-gray-700 font-semibold py-4 px-6">
                          Amount
                        </TableHead>
                        <TableHead className="min-w-[120px] text-gray-700 font-semibold py-4 px-6">
                          Status
                        </TableHead>
                        <TableHead className="min-w-[140px] text-gray-700 font-semibold py-4 px-6">
                          Date
                        </TableHead>
                        <TableHead className="min-w-[100px] text-gray-700 font-semibold py-4 px-6">
                          Actions
                        </TableHead>
                      </>
                    )}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentEntries.length > 0 ? (
                    activeMainTab === "payouts" ? (
                      (currentEntries as Payout[]).map((payout, index) => (
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
                                src="/profile.png"
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
                      (currentEntries as Donation[]).map((donation, index) => (
                        <TableRow
                          key={donation.id}
                          className={`${
                            index % 2 === 1 ? "bg-gray-50" : "bg-white"
                          } hover:bg-gray-100 transition-colors duration-150`}
                        >
                          <TableCell className="text-gray-600 py-5 px-6 font-medium">
                            {startIndex + index + 1}
                          </TableCell>
                          <TableCell className="py-5 px-6">
                            <div>
                              <p className="font-medium text-gray-700">
                                {donation.donorName}
                              </p>
                              <p className="text-sm text-gray-500">
                                {donation.donorEmail}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell className="py-5 px-6">
                            <div className="flex items-center gap-3">
                              <Image
                                src="/profile.png"
                                alt={donation.instructor}
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full"
                              />
                              <span className="font-medium text-gray-700">
                                {donation.instructor}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="py-5 px-6">
                            <Badge
                              className={`${
                                donation.donationType === "content"
                                  ? "bg-blue-100 text-blue-800"
                                  : donation.donationType === "live"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {donation.donationType === "content"
                                ? "Content"
                                : donation.donationType === "live"
                                ? "Live"
                                : "Platform"}
                            </Badge>
                          </TableCell>
                          <TableCell className="py-5 px-6">
                            <div>
                              <p className="font-semibold text-gray-700">
                                ₹{donation.amount.toLocaleString()}
                              </p>
                              <p className="text-xs text-gray-500">
                                Net: ₹{donation.netAmount.toLocaleString()}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell className="py-5 px-6">
                            <Badge
                              className={`${
                                donation.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : donation.status === "processed"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {donation.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-gray-600 py-5 px-6">
                            {new Date(
                              donation.donationDate
                            ).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="py-5 px-6">
                            <DonationDetailsModal donation={donation} />
                          </TableCell>
                        </TableRow>
                      ))
                    )
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={activeMainTab === "payouts" ? 6 : 8}
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
                  Grand Total: ₹
                  {activeMainTab === "payouts"
                    ? payoutGrandTotal.toLocaleString()
                    : donationGrandTotal.toLocaleString()}
                </div>
                {activeMainTab === "donations" && (
                  <div className="text-lg font-semibold text-green-700 bg-green-100 px-4 py-2 rounded-lg">
                    Net Total: ₹{donationNetTotal.toLocaleString()}
                  </div>
                )}
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
