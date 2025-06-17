"use client";
import Footer from "../common/footer";
import CourseSidebar from "./_components/course-sidebar";
import CoursesList from "./_components/courses-list";
import DonateButton from "../_components/donate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Search,
  Calendar,
  Clock,
  Bell,
  BellRing,
  Video,
  Users,
} from "lucide-react";
import { useState } from "react";

// Live Schedule Component
const LiveSchedule = () => {
  const [notifiedSessions, setNotifiedSessions] = useState<Set<string>>(
    new Set()
  );

  const liveSchedule = [
    {
      id: "1",
      title: "Advanced React Patterns",
      instructor: "Dr. Sarah Chen",
      date: "2025-06-17",
      time: "10:00 AM",
      duration: "2 hours",
      attendees: 156,
      subject: "Web Development",
      isLive: false,
      isUpcoming: true,
    },
    {
      id: "2",
      title: "Machine Learning Fundamentals",
      instructor: "Prof. Michael Rodriguez",
      date: "2025-06-17",
      time: "2:30 PM",
      duration: "1.5 hours",
      attendees: 89,
      subject: "Data Science",
      isLive: false,
      isUpcoming: true,
    },
    {
      id: "3",
      title: "Digital Marketing Strategy",
      instructor: "Ms. Emily Watson",
      date: "2025-06-16",
      time: "4:00 PM",
      duration: "1 hour",
      attendees: 234,
      subject: "Marketing",
      isLive: true,
      isUpcoming: false,
    },
    {
      id: "4",
      title: "Python for Beginners",
      instructor: "Mr. James Park",
      date: "2025-06-18",
      time: "11:00 AM",
      duration: "2.5 hours",
      attendees: 178,
      subject: "Programming",
      isLive: false,
      isUpcoming: true,
    },
    {
      id: "5",
      title: "UI/UX Design Principles",
      instructor: "Ms. Lisa Thompson",
      date: "2025-06-18",
      time: "3:00 PM",
      duration: "2 hours",
      attendees: 145,
      subject: "Design",
      isLive: false,
      isUpcoming: true,
    },
  ];

  const handleNotification = (sessionId: string) => {
    const newNotified = new Set(notifiedSessions);
    if (newNotified.has(sessionId)) {
      newNotified.delete(sessionId);
    } else {
      newNotified.add(sessionId);
    }
    setNotifiedSessions(newNotified);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        weekday: "short",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-red-100 p-2 rounded-lg">
            <Video className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Live Schedule</h2>
            <p className="text-sm text-gray-500">
              Upcoming and ongoing live sessions
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {liveSchedule.map((session) => (
          <div
            key={session.id}
            className={`border rounded-xl p-5 transition-all hover:shadow-lg ${
              session.isLive
                ? "border-red-200 bg-gradient-to-r from-red-50 to-orange-50"
                : "border-gray-200 hover:border-blue-300 bg-white hover:bg-gray-50"
            }`}
          >
            {/* Header Section */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-base truncate">
                    {session.title}
                  </h3>
                  {session.isLive && (
                    <Badge className="bg-red-500 text-white text-xs px-2 py-1 animate-pulse shrink-0">
                      ● LIVE
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  by {session.instructor}
                </p>
              </div>
            </div>

            {/* Schedule Info */}
            <div className="grid grid-cols-1 gap-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">
                    {formatDate(session.date)}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="font-medium">{session.time}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-gray-600">
                  <Users className="h-4 w-4 text-purple-500" />
                  <span className="font-medium">
                    {session.attendees} joined
                  </span>
                </div>
                <span className="text-gray-500 font-medium">
                  {session.duration}
                </span>
              </div>
            </div>

            {/* Subject and Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <Badge
                variant="secondary"
                className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-700"
              >
                {session.subject}
              </Badge>

              <div className="flex items-center gap-2 shrink-0">
                {session.isLive ? (
                  <Button
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 font-medium"
                  >
                    Join Live
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleNotification(session.id)}
                      className={`text-xs px-3 py-2 font-medium min-w-[80px] ${
                        notifiedSessions.has(session.id)
                          ? "bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100"
                          : "text-gray-600 hover:text-blue-600 hover:border-blue-300"
                      }`}
                    >
                      {notifiedSessions.has(session.id) ? (
                        <>
                          <BellRing className="h-3 w-3 mr-1" />
                          Notified
                        </>
                      ) : (
                        <>
                          <Bell className="h-3 w-3 mr-1" />
                          Notify Me
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs px-3 py-2 text-gray-600 hover:text-gray-800 font-medium"
                    >
                      Reminder
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-800">
            Notification Settings
          </span>
        </div>
        <p className="text-xs text-blue-600 mb-3">
          Get notified 15 minutes before your scheduled sessions start. You can
          manage your preferences in settings.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="text-xs border-blue-300 text-blue-600 hover:bg-blue-100"
        >
          Manage Notifications
        </Button>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="space-y-10">
      <div className="flex-row space-y-4 md:space-y-0 md:flex justify-between items-center px-16">
        <div className="flex items-center space-x-3">
          <Button className="bg-blue-500 text-white">Courses</Button>
          <Button className="bg-[#F3F4F6] text-[#888E98] font-normal">
            Be a teacher
          </Button>
          <DonateButton />
        </div>
        <div className="flex space-x-3">
          <div className="relative w-full md:w-auto md:flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search Courses"
              className="pl-8 w-full border border-gray-6 placeholder:text-gray-7"
            />
          </div>
          <Button
            variant="outline"
            className="rounded-lg bg-[#F3F4F6] border border-[#F7F7F9] text-gray-400 mb-4"
          >
            Sort <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex px-16 items-start gap-4">
        <div className="w-[70%] space-y-6">
          <CoursesList />
        </div>
        <div className="w-[30%] space-y-6">
          <LiveSchedule />
          <CourseSidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
