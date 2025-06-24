"use client";

import React, { useState } from "react";
import { Command, MoreHorizontal } from "lucide-react";

export default function QuizManagement() {
  const [quizTitle, setQuizTitle] = useState("");
  const [instruction, setInstruction] = useState("");

  const quizzes = [
    {
      id: 1,
      title: "Name a PM",
      instruction: "Narendra Modi",
    },
    {
      id: 2,
      title: "Who is the PM of India ?",
      instruction: "",
    },
    {
      id: 3,
      title: "Who is the CM of Uttar Pradesh ?",
      instruction: "",
    },
    {
      id: 4,
      title: "CM",
      instruction: "",
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Quiz Title:", quizTitle);
    console.log("Instruction:", instruction);
    setQuizTitle("");
    setInstruction("");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-8">
        <Command className="w-6 h-6 text-gray-600" />
        <span className="text-gray-800 font-semibold text-xl"> Quiz</span>
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
              className="w-full text-base px-4 py-3 bg-gray-50 rounded-lg  focus:outline-none "
              placeholder="Enter quiz title..."
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-800 mb-3">
              Instructions
            </label>
            <textarea
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              className="w-full min-h-[140px] text-base px-4 py-3 bg-gray-50 rounded-lg  focus:outline-none  resize-none"
              placeholder="Enter quiz instructions..."
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={handleSubmit}
              className="bg-[#db9407] text-white px-8 py-3 font-semibold text-base rounded-lg transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
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
                <th className="text-gray-700 font-semibold text-sm min-w-[350px] py-4 px-6 text-left">
                  Quiz Title
                </th>
                <th className="text-gray-700 font-semibold text-sm min-w-[250px] py-4 px-6 text-left">
                  Instructions
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
