"use client";

import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Video, Clock, ChevronDown, Command } from "lucide-react";

interface FormData {
  className: string;
  date: string;
  description: string;
  paymentType: "Paid" | "Free";
  price: string;
  tutors: string;
  startTime: string;
  numberOfStudents: string;
  duration: string;
  language: string;
}

export default function LiveClassPage() {
  const [formData, setFormData] = useState<FormData>({
    className: "",
    date: "",
    description: "",
    paymentType: "Paid",
    price: "",
    tutors: "Teacher",
    startTime: "",
    numberOfStudents: "",
    duration: "",
    language: "English",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleSubmit = (): void => {
    console.log("Form submitted:", formData);
    console.log("Selected file:", selectedFile);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <Command className="w-5 h-5 text-gray-500" />
          <h1 className="text-xl font-medium text-gray-700">Live class</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Add Live Class Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="px-6 py-4 ">
            <h2 className="text-sm font-medium text-gray-600 tracking-wide">
              ADD LIVE CLASS
            </h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Class name */}
              <div className="space-y-2">
                <Label
                  htmlFor="className"
                  className="text-sm font-medium text-gray-700"
                >
                  Class name
                </Label>
                <Input
                  id="className"
                  value={formData.className}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("className", e.target.value)
                  }
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm  "
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label
                  htmlFor="date"
                  className="text-sm font-medium text-gray-700"
                >
                  Date
                </Label>
                <div className="relative">
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("date", e.target.value)
                    }
                    placeholder="mm/dd/yyyy"
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm  "
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 md:col-span-2">
                <Label
                  htmlFor="description"
                  className="text-sm font-medium text-gray-700"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    handleInputChange("description", e.target.value)
                  }
                  className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md bg-white text-sm resize-none  "
                />
              </div>

              {/* Payment type */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Payment type
                </Label>
                <Select
                  value={formData.paymentType}
                  onValueChange={(value: "Paid" | "Free") =>
                    handleInputChange("paymentType", value)
                  }
                >
                  <SelectTrigger className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm  ">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Paid">Paid</SelectItem>
                    <SelectItem value="Free">Free</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <Label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-700"
                >
                  Price
                </Label>
                <Input
                  id="price"
                  value={formData.price}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("price", e.target.value)
                  }
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm  "
                />
              </div>

              {/* Tutors */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Tutors
                </Label>
                <Select
                  value={formData.tutors}
                  onValueChange={(value: string) =>
                    handleInputChange("tutors", value)
                  }
                >
                  <SelectTrigger className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm  ">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Teacher">Teacher</SelectItem>
                    <SelectItem value="Instructor 1">Instructor 1</SelectItem>
                    <SelectItem value="Instructor 2">Instructor 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Number of students */}
              <div className="space-y-2">
                <Label
                  htmlFor="numberOfStudents"
                  className="text-sm font-medium text-gray-700"
                >
                  Number of students
                </Label>
                <Input
                  id="numberOfStudents"
                  type="number"
                  value={formData.numberOfStudents}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("numberOfStudents", e.target.value)
                  }
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm  "
                />
              </div>

              {/* Start time */}
              <div className="space-y-2">
                <Label
                  htmlFor="startTime"
                  className="text-sm font-medium text-gray-700"
                >
                  Start time
                </Label>
                <div className="relative">
                  <Input
                    id="startTime"
                    type="time"
                    value={formData.startTime}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("startTime", e.target.value)
                    }
                    className="w-full h-10 px-3 py-2 pr-10 border border-gray-300 rounded-md bg-white text-sm  "
                  />
                  <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <Label
                  htmlFor="duration"
                  className="text-sm font-medium text-gray-700"
                >
                  Duration (in Minutes)
                </Label>
                <Input
                  id="duration"
                  type="number"
                  value={formData.duration}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("duration", e.target.value)
                  }
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm  "
                />
              </div>

              {/* Image */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Image
                </Label>
                <div className="relative">
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-between w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50  ">
                    <span className="text-sm text-gray-500">
                      {selectedFile ? selectedFile.name : "Choose File"}
                    </span>
                    <span className="text-sm text-gray-400">
                      {selectedFile ? "" : "No file chosen"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Language */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Language
                </Label>
                <Select
                  value={formData.language}
                  onValueChange={(value: string) =>
                    handleInputChange("language", value)
                  }
                >
                  <SelectTrigger className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm  ">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Spanish">Spanish</SelectItem>
                    <SelectItem value="French">French</SelectItem>
                    <SelectItem value="German">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-start">
              <Button
                onClick={handleSubmit}
                className="bg-[#db9407] text-white px-8 py-2 font-medium"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>

        {/* Live Class List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-sm font-medium text-gray-400 tracking-wide">
              LIVE CLASS LIST
            </h2>
          </div>
          <div className="p-6">
            <div className="text-center text-gray-500 py-8">
              No live classes found
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
