"use client";
import React, { useState, useEffect } from "react";
import {
  AlertCircle,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  email: string;
  password: string;
}

const TeacherLoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [sessionError, setSessionError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Auto-focus on email input when component mounts
  useEffect(() => {
    const emailInput = document.getElementById("email");
    if (emailInput) {
      emailInput.focus();
    }
  }, []);

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle social login
  const handleSocialLogin = (provider: string) => {
    setSessionError(`Demo: ${provider} login would be implemented here`);
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    setSessionError("Demo: Forgot password flow would be implemented here");
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%D9%85%D9%86%D8%AF%D9%89_%D8%AF%D9%8A%D8%A7%D9%86%D8%A9_%D8%A7%D9%84%D8%B5%D8%A7%D8%A8%D8%A6%D8%A9_%D8%A7%D9%84%D9%85%D9%86%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9_%D9%81%D9%8A_%D8%A8%D8%BA%D8%AF%D8%A7%D8%AF_21.jpg/1280px-%D9%85%D9%86%D8%AF%D9%89_%D8%AF%D9%8A%D8%A7%D9%86%D8%A9_%D8%A7%D9%84%D8%B5%D8%A7%D8%A8%D8%A6%D8%A9_%D8%A7%D9%84%D9%85%D9%86%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9_%D9%81%D9%8A_%D8%A8%D8%BA%D8%AF%D8%A7%D8%AF_21.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
        width: "100%",
      }}
      className="min-h-screen flex items-center justify-center p-4 sm:p-5 md:p-8 bg-gray-50"
    >
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 sm:p-10 text-center border border-blue-500/10  shadow-[0_35px_70px_-12px_rgba(59,130,246,0.35),0_28px_35px_-5px_rgba(59,130,246,0.25),0_15px_15px_-5px_rgba(59,130,246,0.12),0_6px_8px_-2px_rgba(0,0,0,0.08)] ">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 sm:w-25 sm:h-25 mx-auto mb-5 rounded-2xl bg-gray-50 p-2 shadow-[0_25px_50px_-8px_rgba(59,130,246,0.5),0_20px_25px_-5px_rgba(59,130,246,0.3),0_10px_10px_-4px_rgba(59,130,246,0.2)] ">
            <Image
              src="/xcrino.png"
              alt="Andhra Logo"
              width={100}
              height={100}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">
            JUST LOGIN FIRST
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 leading-tight">
            Welcome to Mandean Knowledge Centre
          </h1>
        </div>

        {/* Session Error */}
        {sessionError && (
          <div className="mb-5 p-3 bg-red-50 text-red-700 rounded-lg text-sm border-l-4 border-red-500 flex items-center gap-2">
            <AlertCircle size={16} />
            <span>{sessionError}</span>
          </div>
        )}

        {/* Form */}
        <div className="space-y-6">
          {/* Email */}
          <div className="text-left">
            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("email", e.target.value)
                }
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-base bg-white transition-all duration-300 outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder-gray-400 pl-12"
                placeholder="soeraji@circle.com"
                autoComplete="email"
              />
              <Mail
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="text-left">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("password", e.target.value)
                }
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-base bg-white transition-all duration-300 outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder-gray-400 pl-12 pr-12"
                placeholder="••••••••••"
                autoComplete="current-password"
              />
              <Lock
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button - Simple redirect without validation */}
          <Link href="/teacher/dashboard">
            <button
              type="button"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 shadow-[0_8px_20px_rgba(59,130,246,0.3),0_4px_10px_rgba(59,130,246,0.2)] hover:shadow-[0_12px_28px_rgba(59,130,246,0.4),0_6px_14px_rgba(59,130,246,0.25)] hover:-translate-y-1 active:translate-y-0"
            >
              Login
            </button>
          </Link>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-6">
            {/* Google */}
            <button
              type="button"
              onClick={() => handleSocialLogin("Google")}
              className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-500">G</span>
              </div>
            </button>

            {/* Facebook */}
            <button
              type="button"
              onClick={() => handleSocialLogin("Facebook")}
              className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <Facebook size={20} className="text-blue-600" />
            </button>

            {/* Twitter */}
            <button
              type="button"
              onClick={() => handleSocialLogin("Twitter")}
              className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <Twitter size={20} className="text-blue-400" />
            </button>
          </div>

          {/* Forgot Password */}
          <Link href="/teacher/auth/teacherforgot-password">
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors duration-300"
              >
                Forgot Password?
              </button>
            </div>
          </Link>
        </div>

        {/* Security Note */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-600 leading-relaxed flex items-center justify-center gap-2">
            <Shield size={14} className="text-green-500 flex-shrink-0" />
            <span>
              Your information is secure and encrypted. Join thousands of
              learners today.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherLoginForm;
