"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  LayoutGrid,
  Tag,
  ImageIcon,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Users,
  GraduationCap,
  Video,
  FileText,
  User,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [expandedMenus, setExpandedMenus] = useState<{
    [key: string]: boolean;
  }>({
    categories: false,
    instructors: false,
    report: false,
  });

  // Track active menu item - default to 'dashboard'
  const [activeMenuItem, setActiveMenuItem] = useState<string>("dashboard");

  const toggleMenu = (menuKey: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const handleMenuClick = (menuKey: string) => {
    setActiveMenuItem(menuKey);
  };

  // Helper function to get button styling based on active state
  const getButtonStyle = (menuKey: string) => {
    if (activeMenuItem === menuKey) {
      return "w-full justify-start text-[#db9407] bg-slate-600/50 hover:bg-slate-600";
    }
    return "w-full justify-start text-gray-300 hover:bg-slate-600 hover:text-white";
  };

  const getExpandableButtonStyle = (menuKey: string) => {
    if (activeMenuItem === menuKey) {
      return "w-full justify-between text-[#db9407] bg-slate-600/50 hover:bg-slate-600";
    }
    return "w-full justify-between text-gray-300 hover:bg-slate-600 hover:text-white";
  };

  return (
    <div className="p-6 bg-gray-100 ">
      <aside className="w-64 bg-[#023548] min-h-[calc(100vh-4rem)] ">
        {/* User Profile Section */}
        <div className="p-6 text-center border-b border-slate-600">
          <Avatar className="w-16 h-16 mx-auto mb-3">
            <AvatarImage src="/profile.png" alt="Praveen Vats" />
            <AvatarFallback>PV</AvatarFallback>
          </Avatar>
          <h3 className="text-white font-medium">Praveen Vats</h3>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <div className="text-gray-400 text-xs font-semibold mb-4 tracking-wider">
            NAVIGATION
          </div>

          <div className="space-y-1">
            <Link href="/admin-panel">
              <Button
                variant="ghost"
                className={getButtonStyle("dashboard")}
                onClick={() => handleMenuClick("dashboard")}
              >
                <LayoutGrid className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
            </Link>

            <div>
              <Link href="/admin-panel/categories">
                <Button
                  variant="ghost"
                  className={getExpandableButtonStyle("categories")}
                  onClick={() => {
                    toggleMenu("categories");
                    handleMenuClick("categories");
                  }}
                >
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-3" />
                    Categories
                  </div>
                  {expandedMenus.categories ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </Button>
              </Link>
              {expandedMenus.categories && (
                <div className="ml-6 mt-1 space-y-1">
                  <Link href="/admin-panel/add-category">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm text-gray-400 hover:bg-slate-600 hover:text-white"
                    >
                      Add Category
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/admin-panel/banner">
              <Button
                variant="ghost"
                className={getButtonStyle("banners")}
                onClick={() => handleMenuClick("banners")}
              >
                <ImageIcon className="w-4 h-4 mr-3" />
                Banners
              </Button>
            </Link>

            <Link href="/admin-panel/cources">
              <Button
                variant="ghost"
                className={getButtonStyle("courses")}
                onClick={() => handleMenuClick("courses")}
              >
                <BookOpen className="w-4 h-4 mr-3" />
                Courses
              </Button>
            </Link>

            <Link href="/admin-panel/quiz">
              <Button
                variant="ghost"
                className={getButtonStyle("quiz")}
                onClick={() => handleMenuClick("quiz")}
              >
                <HelpCircle className="w-4 h-4 mr-3" />
                Quiz
              </Button>
            </Link>

            <Link href="/admin-panel/forums">
              <Button
                variant="ghost"
                className={getButtonStyle("forum")}
                onClick={() => handleMenuClick("forum")}
              >
                <MessageSquare className="w-4 h-4 mr-3" />
                Forum
              </Button>
            </Link>

            <div>
              <Link href="/admin-panel/instructor">
                <Button
                  variant="ghost"
                  className={getExpandableButtonStyle("instructors")}
                  onClick={() => {
                    toggleMenu("instructors");
                    handleMenuClick("instructors");
                  }}
                >
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-3" />
                    Instructors
                  </div>
                  {expandedMenus.instructors ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </Button>
              </Link>
              {expandedMenus.instructors && (
                <>
                  <div className="ml-6 mt-1 space-y-1">
                    <Link href="/admin-panel/instructor-setting">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm text-gray-400 hover:bg-slate-600 hover:text-white"
                      >
                        Instructor setting
                      </Button>
                    </Link>
                  </div>
                  <div className="ml-6 mt-1 space-y-1">
                    <Link href="/admin-panel/payout">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm text-gray-400 hover:bg-slate-600 hover:text-white"
                      >
                        Instructor payout
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>

            <Link href="/admin-panel/student-management">
              <Button
                variant="ghost"
                className={getButtonStyle("students")}
                onClick={() => handleMenuClick("students")}
              >
                <GraduationCap className="w-4 h-4 mr-3" />
                Students
              </Button>
            </Link>

            <Link href="/admin-panel/live">
              <Button
                variant="ghost"
                className={getButtonStyle("liveclass")}
                onClick={() => handleMenuClick("liveclass")}
              >
                <Video className="w-4 h-4 mr-3" />
                Live class
              </Button>
            </Link>

            <div>
              <Link href="/admin-panel/report-management">
                <Button
                  variant="ghost"
                  className={getExpandableButtonStyle("report")}
                  onClick={() => {
                    toggleMenu("report");
                    handleMenuClick("report");
                  }}
                >
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-3" />
                    Report
                  </div>
                </Button>
              </Link>
            </div>

            <Link href="/admin-panel/profile">
              <Button
                variant="ghost"
                className={getButtonStyle("profile")}
                onClick={() => handleMenuClick("profile")}
              >
                <User className="w-4 h-4 mr-1" />
                Manage profile
              </Button>
            </Link>
          </div>
        </nav>
      </aside>
    </div>
  );
}
