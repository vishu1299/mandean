"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Command } from "lucide-react";

export default function InstructorSettings() {
  const [instructorPercentage, setInstructorPercentage] = useState("30");
  const [adminPercentage, setAdminPercentage] = useState("70");

  const handleInstructorChange = (value: string) => {
    const numValue = Number.parseInt(value) || 0;
    const remaining = 100 - numValue;
    setInstructorPercentage(value);
    setAdminPercentage(remaining.toString());
  };

  const handleAdminChange = (value: string) => {
    const numValue = Number.parseInt(value) || 0;
    const remaining = 100 - numValue;
    setAdminPercentage(value);
    setInstructorPercentage(remaining.toString());
  };

  const handleUpdateSettings = () => {
    console.log("Settings updated:", {
      instructorPercentage,
      adminPercentage,
    });
    // Handle update logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Command className="w-5 h-5 text-gray-500" />
            <h1 className="text-xl font-medium text-gray-700">
              Instructor settings
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <div className="bg-white rounded-lg shadow-sm  p-8">
              <h2 className="text-lg font-medium text-gray-900 mb-8 textcenter">
                Instructor commission settings
              </h2>

              <div className="space-y-6">
                {/* Instructor Revenue Percentage */}
                <div>
                  <label className="block text-sm text-gray-600 mb-3">
                    Instructor revenue percentage
                  </label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={instructorPercentage}
                      onChange={(e) => handleInstructorChange(e.target.value)}
                      className="pr-12 text-center"
                      min="0"
                      max="100"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <span className="bg-gray-200 text-gray-600 px-3 py-2 text-sm rounded-r-md border-l">
                        %
                      </span>
                    </div>
                  </div>
                </div>

                {/* Admin Revenue Percentage */}
                <div>
                  <label className="block text-sm text-gray-600 mb-3">
                    Admin revenue percentage
                  </label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={adminPercentage}
                      onChange={(e) => handleAdminChange(e.target.value)}
                      className="pr-12 text-center"
                      min="0"
                      max="100"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <span className="bg-gray-200 text-gray-600 px-3 py-2 text-sm rounded-r-md border-l">
                        %
                      </span>
                    </div>
                  </div>
                </div>

                {/* Update Button */}
                <div className="pt-4">
                  <Button
                    onClick={handleUpdateSettings}
                    className="w-full bg-[#db9407] text-white py-2 px-6"
                  >
                    Update settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
