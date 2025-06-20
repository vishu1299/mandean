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

  const toggleMenu = (menuKey: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
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
            <Button
              variant="ghost"
              className="w-full justify-start text-[#db9407] bg-slate-600/50 hover:bg-slate-600"
            >
              <LayoutGrid className="w-4 h-4 mr-3" />
              Dashboard
            </Button>

            <div>
              <Button
                variant="ghost"
                className="w-full justify-between text-gray-300 hover:bg-slate-600 hover:text-white"
                onClick={() => toggleMenu("categories")}
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
              {expandedMenus.categories && (
                <div className="ml-6 mt-1 space-y-1">
                  <Link href="/cources">
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

            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-slate-600 hover:text-white"
            >
              <ImageIcon className="w-4 h-4 mr-3" />
              Banners
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-slate-600 hover:text-white"
            >
              <BookOpen className="w-4 h-4 mr-3" />
              Courses
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-slate-600 hover:text-white"
            >
              <HelpCircle className="w-4 h-4 mr-3" />
              Quiz
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-slate-600 hover:text-white"
            >
              <MessageSquare className="w-4 h-4 mr-3" />
              Forum
            </Button>

            <div>
              <Button
                variant="ghost"
                className="w-full justify-between text-gray-300 hover:bg-slate-600 hover:text-white"
                onClick={() => toggleMenu("instructors")}
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
              {expandedMenus.instructors && (
                <div className="ml-6 mt-1 space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm text-gray-400 hover:bg-slate-600 hover:text-white"
                  >
                    All Instructors
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm text-gray-400 hover:bg-slate-600 hover:text-white"
                  >
                    Add Instructor
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm text-gray-400 hover:bg-slate-600 hover:text-white"
                  >
                    Instructor Permissions
                  </Button>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-slate-600 hover:text-white"
            >
              <GraduationCap className="w-4 h-4 mr-3" />
              Students
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-slate-600 hover:text-white"
            >
              <Video className="w-4 h-4 mr-3" />
              Live class
            </Button>

            <div>
              <Button
                variant="ghost"
                className="w-full justify-between text-gray-300 hover:bg-slate-600 hover:text-white"
                onClick={() => toggleMenu("report")}
              >
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-3" />
                  Report
                </div>
                {expandedMenus.report ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </Button>
              {expandedMenus.report && (
                <div className="ml-6 mt-1 space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm text-gray-400 hover:bg-slate-600 hover:text-white"
                  >
                    Student Reports
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm text-gray-400 hover:bg-slate-600 hover:text-white"
                  >
                    Course Analytics
                  </Button>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:bg-slate-600 hover:text-white"
            >
              <User className="w-4 h-4 mr-3" />
              Manage profile
            </Button>
          </div>
        </nav>
      </aside>
    </div>
  );
}
