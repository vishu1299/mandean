"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  AlertCircle,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  Shield,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sessionError, setSessionError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  // Auto-focus on first name input when component mounts
  useEffect(() => {
    const firstNameInput = document.getElementById("firstName");
    if (firstNameInput) {
      firstNameInput.focus();
    }
  }, []);

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    setSessionError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call - replace with actual implementation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate success response
      alert("Registration successful! Welcome to Andhra Knowledge Centre");

      // Simulate redirect after success
      setTimeout(() => {
        setSessionError("Demo: Redirecting to dashboard...");
      }, 1000);
    } catch (error) {
      setSessionError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
            GET STARTED
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
          {/* First Name and Last Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-left">
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-base bg-white transition-all duration-300 outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder-gray-400 pl-12"
                  placeholder="First Name"
                  autoComplete="given-name"
                />
                <User
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
              {errors.firstName && (
                <div className="mt-2 text-red-600 text-xs flex items-center gap-2">
                  <AlertCircle size={14} />
                  <span>{errors.firstName}</span>
                </div>
              )}
            </div>

            <div className="text-left">
              <div className="relative">
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-base bg-white transition-all duration-300 outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder-gray-400 pl-12"
                  placeholder="Last Name"
                  autoComplete="family-name"
                />
                <User
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
              {errors.lastName && (
                <div className="mt-2 text-red-600 text-xs flex items-center gap-2">
                  <AlertCircle size={14} />
                  <span>{errors.lastName}</span>
                </div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="text-left">
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("email", e.target.value)
                }
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-base bg-white transition-all duration-300 outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder-gray-400 pl-12"
                placeholder="Your Email"
                autoComplete="email"
              />
              <Mail
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            {errors.email && (
              <div className="mt-2 text-red-600 text-xs flex items-center gap-2">
                <AlertCircle size={14} />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Password and Confirm Password Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-left">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-base bg-white transition-all duration-300 outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder-gray-400 pl-12 pr-12"
                  placeholder="Create Password"
                  autoComplete="new-password"
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
              {errors.password && (
                <div className="mt-2 text-red-600 text-xs flex items-center gap-2">
                  <AlertCircle size={14} />
                  <span>{errors.password}</span>
                </div>
              )}
            </div>

            <div className="text-left">
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-base bg-white transition-all duration-300 outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder-gray-400 pl-12 pr-12"
                  placeholder="Repeat Password"
                  autoComplete="new-password"
                />
                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="mt-2 text-red-600 text-xs flex items-center gap-2">
                  <AlertCircle size={14} />
                  <span>{errors.confirmPassword}</span>
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 shadow-[0_8px_20px_rgba(59,130,246,0.3),0_4px_10px_rgba(59,130,246,0.2)] hover:shadow-[0_12px_28px_rgba(59,130,246,0.4),0_6px_14px_rgba(59,130,246,0.25)] hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            <div className="flex items-center justify-center gap-2">
              {isLoading && <Loader2 size={20} className="animate-spin" />}
              <span>{isLoading ? "Processing..." : "Get Started - FREE"}</span>
            </div>
          </button>
        </div>

        {/* Security Note */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
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

export default RegisterForm;
