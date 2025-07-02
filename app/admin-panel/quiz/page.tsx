"use client";

import React, { useState } from "react";
import { Command, MoreHorizontal, ChevronDown } from "lucide-react";

export default function QuizManagement() {
  const [quizTitle, setQuizTitle] = useState("");
  const [instruction, setInstruction] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [isTeacherDropdownOpen, setIsTeacherDropdownOpen] = useState(false);

  // Mock teacher data - replace with actual API data
  const teachers = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      subject: "Mathematics",
      room: "Room 101",
    },
    { id: 2, name: "Prof. Rajesh Kumar", subject: "Physics", room: "Room 205" },
    { id: 3, name: "Ms. Anita Singh", subject: "Chemistry", room: "Room 303" },
    { id: 4, name: "Mr. Vikram Patel", subject: "Biology", room: "Room 408" },
    { id: 5, name: "Dr. Sunita Gupta", subject: "English", room: "Room 502" },
  ];

  const quizzes = [
    {
      id: 1,
      title: "Name a PM",
      instruction: "Narendra Modi",
      teacher: "Dr. Priya Sharma",
      room: "Room 101",
      subject: "Mathematics",
    },
    {
      id: 2,
      title: "Who is the PM of India ?",
      instruction: "",
      teacher: "Prof. Rajesh Kumar",
      room: "Room 205",
      subject: "Physics",
    },
    {
      id: 3,
      title: "Who is the CM of Uttar Pradesh ?",
      instruction: "",
      teacher: "Ms. Anita Singh",
      room: "Room 303",
      subject: "Chemistry",
    },
    {
      id: 4,
      title: "CM",
      instruction: "",
      teacher: "Mr. Vikram Patel",
      room: "Room 408",
      subject: "Biology",
    },
  ];

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (!selectedTeacher) {
      alert("Please select a teacher before creating the quiz.");
      return;
    }

    const selectedTeacherData = teachers.find(
      (t) => t.id === parseInt(selectedTeacher)
    );

    console.log("Quiz Title:", quizTitle);
    console.log("Instruction:", instruction);
    console.log("Selected Teacher:", selectedTeacherData);

    // Here you would typically send this data to your API
    // createQuiz({ title: quizTitle, instruction, teacherId: selectedTeacher });

    setQuizTitle("");
    setInstruction("");
    setSelectedTeacher("");
  };

  const handleTeacherSelect = (teacherId:any) => {
    setSelectedTeacher(teacherId);
    setIsTeacherDropdownOpen(false);
  };

  const selectedTeacherData = teachers.find(
    (t) => t.id === parseInt(selectedTeacher)
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-8">
        <Command className="w-6 h-6 text-gray-600" />
        <span className="text-gray-800 font-semibold text-xl">
          Quiz Management
        </span>
      </div>

      {/* Add Quiz Form */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-10">
        <h2 className="text-sm font-semibold text-gray-600 mb-8 tracking-wider uppercase">
          Add Quiz
        </h2>

        <div className="space-y-8">
          <div>
            <label className="block text-base font-medium text-gray-800 mb-3">
              Quiz Title
            </label>
            <input
              type="text"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              className="w-full text-base px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200"
              placeholder="Enter quiz title..."
              required
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-800 mb-3">
              Instructions
            </label>
            <textarea
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              className="w-full min-h-[140px] text-base px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 resize-none"
              placeholder="Enter quiz instructions..."
            />
          </div>

          {/* Teacher Selection */}
          <div>
            <label className="block text-base font-medium text-gray-800 mb-3">
              Assign to Teacher <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsTeacherDropdownOpen(!isTeacherDropdownOpen)}
                className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 flex items-center justify-between"
              >
                <span
                  className={
                    selectedTeacherData ? "text-gray-900" : "text-gray-500"
                  }
                >
                  {selectedTeacherData
                    ? `${selectedTeacherData.name} - ${selectedTeacherData.subject} (${selectedTeacherData.room})`
                    : "Select a teacher..."}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    isTeacherDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isTeacherDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {teachers.map((teacher) => (
                    <button
                      key={teacher.id}
                      type="button"
                      onClick={() => handleTeacherSelect(teacher.id)}
                      className="w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <div className="font-medium text-gray-900">
                        {teacher.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {teacher.subject} • {teacher.room}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={handleSubmit}
              className="bg-[#db9407] text-white px-8 py-3 font-semibold text-base rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:bg-[#c88506] cursor-pointer"
            >
              Create Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Quizzes List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-8 pb-6">
          <h2 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
            Quiz Library
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="w-16 text-gray-700 font-semibold text-sm py-4 px-6 text-left">
                  #
                </th>
                <th className="text-gray-700 font-semibold text-sm min-w-[300px] py-4 px-6 text-left">
                  Quiz Title
                </th>
                <th className="text-gray-700 font-semibold text-sm min-w-[200px] py-4 px-6 text-left">
                  Instructions
                </th>
                <th className="text-gray-700 font-semibold text-sm min-w-[200px] py-4 px-6 text-left">
                  Teacher & Room
                </th>
                <th className="text-gray-700 font-semibold text-sm min-w-[120px] py-4 px-6 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map((quiz, index) => (
                <tr
                  key={quiz.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                  } hover:bg-orange-50/30 transition-colors duration-150`}
                >
                  <td className="text-gray-700 font-medium text-base py-5 px-6">
                    {quiz.id}
                  </td>
                  <td className="text-gray-900 text-base font-medium py-5 px-6">
                    {quiz.title}
                  </td>
                  <td className="text-gray-700 text-base py-5 px-6">
                    {quiz.instruction || (
                      <span className="text-gray-400 italic">
                        No instructions
                      </span>
                    )}
                  </td>
                  <td className="py-5 px-6">
                    <div className="text-gray-900 font-medium text-sm">
                      {quiz.teacher}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {quiz.subject} • {quiz.room}
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <button className="w-9 h-9 p-0 bg-gray-700 hover:bg-gray-800 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center">
                      <MoreHorizontal className="w-4 h-4 text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
