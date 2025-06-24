"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Command } from "lucide-react";

export default function AddNewCategory() {
  const [categoryCode, setCategoryCode] = useState("c40446528c");
  const [categoryTitle, setCategoryTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const generateCategoryCode = () => {
    const randomCode = "c" + Math.random().toString(36).substring(2, 11);
    setCategoryCode(randomCode);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      categoryCode,
      categoryTitle,
      selectedFile: selectedFile?.name,
    });
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="w-full mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Command className="w-6 h-6 text-gray-500" />
            <h1 className="text-2xl font-semibold text-gray-800">
              Add new category
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-8 tracking-wide text-center">
                CATEGORY ADD FORM
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Category Code */}
                <div className="space-y-3">
                  <Label
                    htmlFor="categoryCode"
                    className="text-sm text-gray-600 font-medium"
                  >
                    Category Code
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="categoryCode"
                      type="text"
                      value={categoryCode}
                      onChange={(e) => setCategoryCode(e.target.value)}
                      className="flex-1 h-12 px-4 text-gray-700"
                      placeholder="Enter category code"
                    />
                    <Button
                      type="button"
                      onClick={generateCategoryCode}
                      variant="outline"
                      className="px-4 h-12 text-sm"
                    >
                      Generate
                    </Button>
                  </div>
                </div>

                {/* Category Title */}
                <div className="space-y-3">
                  <Label
                    htmlFor="categoryTitle"
                    className="text-sm text-gray-600 font-medium"
                  >
                    Category Title
                  </Label>
                  <Input
                    id="categoryTitle"
                    type="text"
                    value={categoryTitle}
                    onChange={(e) => setCategoryTitle(e.target.value)}
                    className="w-full h-12 px-4 text-gray-700"
                    placeholder="Enter category title"
                  />
                </div>

                {/* Category Thumbnail */}
                <div className="space-y-3">
                  <Label
                    htmlFor="thumbnail"
                    className="text-sm text-gray-600 font-medium"
                  >
                    Category thumbnail (The image size should be: 400 X 255)
                  </Label>
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Input
                        id="thumbnail"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="w-full h-12 px-4 bg-white border border-gray-200 rounded-md flex items-center text-gray-500">
                        {selectedFile ? selectedFile.name : "Choose thumbnail"}
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="secondary"
                      className="px-6 h-12 bg-gray-200 hover:bg-gray-300 text-gray-700"
                      onClick={() =>
                        document.getElementById("thumbnail")?.click()
                      }
                    >
                      Browse
                    </Button>
                  </div>
                  {selectedFile && (
                    <div className="text-xs text-gray-500 mt-2">
                      Selected: {selectedFile.name} (
                      {Math.round(selectedFile.size / 1024)} KB)
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 h-12 font-medium transition-colors duration-200"
                    disabled={!categoryTitle.trim()}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
