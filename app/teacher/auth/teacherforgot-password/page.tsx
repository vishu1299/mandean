"use client";
import React, { useState } from "react";
import { Mail, Shield } from "lucide-react";
import Image from "next/image";

export default function TeacherForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending reset link to:", email);
    // Here you would typically handle API logic
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/%D9%83%D9%86%D8%B2%D8%A7_%D8%B1%D8%A8%D8%A7_.jpg/1280px-%D9%83%D9%86%D8%B2%D8%A7_%D8%B1%D8%A8%D8%A7_.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex items-center justify-center p-4 bg-gray-50"
    >
      <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg border border-gray-200">
        {/* Logo */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gray-100 p-2 shadow-md">
            <Image
              src="/xcrino.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-800 mb-1">
          Forgot Password?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Enter your email to receive an OTP for password reset.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition"
          >
            Send OTP
          </button>
        </form>

        {/* Security Info */}
        <div className="mt-5 text-xs text-gray-500 flex items-center justify-center gap-2">
          <Shield size={14} className="text-green-500" />
          <span>Your data is encrypted and secure.</span>
        </div>
      </div>
    </div>
  );
}
