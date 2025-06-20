"use client";
import React, { useState, useRef } from "react";
import { Search } from "lucide-react";

export default function BannerManagement() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitting:", { file: selectedFile, course: selectedCourse });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600">
              <path
                fill="currentColor"
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-medium text-gray-700">Banner</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add Banner Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-6">
              ADD BANNER
            </h2>

            <div className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Image
                </label>
                <div className="relative">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex">
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-l-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Choose File
                    </button>
                    <div className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-sm text-gray-500">
                      {selectedFile ? selectedFile.name : "No File Chosen"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Select Course
                </label>
                <select
                  value={selectedCourse}
                  onChange={handleCourseChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">--Select--</option>
                  <option value="web-development">Web Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={!selectedFile || !selectedCourse}
                  className="px-6 py-2 bg-[#db9407] text-white text-sm font-medium rounded-md hover:bg-[#c28606] focus:outline-none focus:ring-2 focus:ring-[#db9407] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Banners Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-6">BANNERS</h2>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-gray-500 text-sm">No banners found</p>
              <p className="text-gray-400 text-xs mt-1">
                Upload a banner to get started
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
