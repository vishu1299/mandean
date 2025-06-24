"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Command,
  User,
  Camera,
  Lock,
  Bell,
  Shield,
  Eye,
  EyeOff,
  Save,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

export default function ManageProfile() {
  const [activeTab, setActiveTab] = useState("personal");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "/placeholder.svg?height=120&width=120"
  );

  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    gender: "male",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    bio: "Passionate educator and lifelong learner with over 5 years of experience in online education.",
  });

  // Password State
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Notification Settings
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    courseUpdates: true,
    promotionalEmails: false,
    weeklyDigest: true,
  });

  // Security Settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: "30",
    profileVisibility: "public",
  });

  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [field]: value }));
  };

  const handleSecurityChange = (field: string, value: string | boolean) => {
    setSecuritySettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePersonalInfo = () => {
    console.log("Saving personal info:", personalInfo);
    // Handle save logic here
  };

  const handleChangePassword = () => {
    console.log("Changing password:", passwordData);
    // Handle password change logic here
  };

  const handleSaveNotifications = () => {
    console.log("Saving notifications:", notifications);
    // Handle save logic here
  };

  const handleSaveSecurity = () => {
    console.log("Saving security settings:", securitySettings);
    // Handle save logic here
  };

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "password", label: "Password", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="w-full mx-auto ">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 p-3">
          <Command className="w-6 h-6 text-gray-600" />
          <span className="text-gray-800 font-semibold text-xl">
            {" "}
            Manage Profile
          </span>
        </div>

        {/* Profile Header Card */}
        <Card className="rounded-2xl border-0 shadow-sm mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src={"/profile.png"}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <label
                  htmlFor="profile-upload"
                  className="absolute bottom-2 right-2 bg-[#db9407] text-white p-3 rounded-full cursor-pointer hover:bg-[#b8800a] transition-colors shadow-lg"
                >
                  <Camera className="w-5 h-5" />
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {personalInfo.firstName} {personalInfo.lastName}
                </h2>
                <div className="flex flex-col md:flex-row gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail className="w-4 h-4" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Phone className="w-4 h-4" />
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>
                <p className="text-gray-600 max-w-2xl">{personalInfo.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#db9407] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <Card className="rounded-2xl border-0 shadow-sm">
          <CardContent className="p-8">
            {/* Personal Information Tab */}
            {activeTab === "personal" && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <User className="w-6 h-6 text-[#db9407]" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Personal Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-semibold text-gray-700"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      value={personalInfo.firstName}
                      onChange={(e) =>
                        handlePersonalInfoChange("firstName", e.target.value)
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      value={personalInfo.lastName}
                      onChange={(e) =>
                        handlePersonalInfoChange("lastName", e.target.value)
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) =>
                        handlePersonalInfoChange("email", e.target.value)
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={personalInfo.phone}
                      onChange={(e) =>
                        handlePersonalInfoChange("phone", e.target.value)
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="dateOfBirth"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Date of Birth
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={personalInfo.dateOfBirth}
                      onChange={(e) =>
                        handlePersonalInfoChange("dateOfBirth", e.target.value)
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="gender"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Gender
                    </Label>
                    <Select
                      value={personalInfo.gender}
                      onValueChange={(value) =>
                        handlePersonalInfoChange("gender", value)
                      }
                    >
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">
                          Prefer not to say
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3 md:col-span-2">
                    <Label
                      htmlFor="address"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Address
                    </Label>
                    <Input
                      id="address"
                      value={personalInfo.address}
                      onChange={(e) =>
                        handlePersonalInfoChange("address", e.target.value)
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="city"
                      className="text-sm font-semibold text-gray-700"
                    >
                      City
                    </Label>
                    <Input
                      id="city"
                      value={personalInfo.city}
                      onChange={(e) =>
                        handlePersonalInfoChange("city", e.target.value)
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="state"
                      className="text-sm font-semibold text-gray-700"
                    >
                      State
                    </Label>
                    <Input
                      id="state"
                      value={personalInfo.state}
                      onChange={(e) =>
                        handlePersonalInfoChange("state", e.target.value)
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="zipCode"
                      className="text-sm font-semibold text-gray-700"
                    >
                      ZIP Code
                    </Label>
                    <Input
                      id="zipCode"
                      value={personalInfo.zipCode}
                      onChange={(e) =>
                        handlePersonalInfoChange("zipCode", e.target.value)
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="country"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Country
                    </Label>
                    <Select
                      value={personalInfo.country}
                      onValueChange={(value) =>
                        handlePersonalInfoChange("country", value)
                      }
                    >
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="United States">
                          United States
                        </SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                        <SelectItem value="United Kingdom">
                          United Kingdom
                        </SelectItem>
                        <SelectItem value="Australia">Australia</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3 md:col-span-2">
                    <Label
                      htmlFor="bio"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      value={personalInfo.bio}
                      onChange={(e) =>
                        handlePersonalInfoChange("bio", e.target.value)
                      }
                      className="min-h-[120px] rounded-xl"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <Button
                    onClick={handleSavePersonalInfo}
                    className="bg-[#db9407] hover:bg-[#b8800a] text-white px-8 py-3 rounded-xl font-semibold"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}

            {/* Password Tab */}
            {activeTab === "password" && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Lock className="w-6 h-6 text-[#db9407]" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Change Password
                  </h2>
                </div>

                <div className="max-w-lg mx-auto">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="currentPassword"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Current Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="currentPassword"
                          type={showCurrentPassword ? "text" : "password"}
                          value={passwordData.currentPassword}
                          onChange={(e) =>
                            handlePasswordChange(
                              "currentPassword",
                              e.target.value
                            )
                          }
                          className="h-12 rounded-xl pr-12"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowCurrentPassword(!showCurrentPassword)
                          }
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showCurrentPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="newPassword"
                        className="text-sm font-semibold text-gray-700"
                      >
                        New Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          type={showNewPassword ? "text" : "password"}
                          value={passwordData.newPassword}
                          onChange={(e) =>
                            handlePasswordChange("newPassword", e.target.value)
                          }
                          className="h-12 rounded-xl pr-12"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showNewPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="confirmPassword"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Confirm New Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={passwordData.confirmPassword}
                          onChange={(e) =>
                            handlePasswordChange(
                              "confirmPassword",
                              e.target.value
                            )
                          }
                          className="h-12 rounded-xl pr-12"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="bg-[#db9407]/5 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Password Requirements:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#db9407] rounded-full"></div>
                          At least 8 characters long
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#db9407] rounded-full"></div>
                          Contains uppercase and lowercase letters
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#db9407] rounded-full"></div>
                          Contains at least one number
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#db9407] rounded-full"></div>
                          Contains at least one special character
                        </li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={handleChangePassword}
                        className="bg-[#db9407] hover:bg-[#b8800a] text-white px-8 py-3 rounded-xl font-semibold"
                      >
                        <Lock className="w-4 h-4 mr-2" />
                        Change Password
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Bell className="w-6 h-6 text-[#db9407]" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Notification Preferences
                  </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-[#db9407]/5 p-6 rounded-2xl">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        Communication Preferences
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Email Notifications
                            </p>
                            <p className="text-sm text-gray-600">
                              Receive notifications via email
                            </p>
                          </div>
                          <Switch
                            checked={notifications.emailNotifications}
                            onCheckedChange={(checked) =>
                              handleNotificationChange(
                                "emailNotifications",
                                checked
                              )
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Push Notifications
                            </p>
                            <p className="text-sm text-gray-600">
                              Receive push notifications on your device
                            </p>
                          </div>
                          <Switch
                            checked={notifications.pushNotifications}
                            onCheckedChange={(checked) =>
                              handleNotificationChange(
                                "pushNotifications",
                                checked
                              )
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              SMS Notifications
                            </p>
                            <p className="text-sm text-gray-600">
                              Receive notifications via text message
                            </p>
                          </div>
                          <Switch
                            checked={notifications.smsNotifications}
                            onCheckedChange={(checked) =>
                              handleNotificationChange(
                                "smsNotifications",
                                checked
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#db9407]/5 p-6 rounded-2xl">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        Content Preferences
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Course Updates
                            </p>
                            <p className="text-sm text-gray-600">
                              Get notified about course updates and
                              announcements
                            </p>
                          </div>
                          <Switch
                            checked={notifications.courseUpdates}
                            onCheckedChange={(checked) =>
                              handleNotificationChange("courseUpdates", checked)
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Promotional Emails
                            </p>
                            <p className="text-sm text-gray-600">
                              Receive promotional offers and marketing emails
                            </p>
                          </div>
                          <Switch
                            checked={notifications.promotionalEmails}
                            onCheckedChange={(checked) =>
                              handleNotificationChange(
                                "promotionalEmails",
                                checked
                              )
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Weekly Digest
                            </p>
                            <p className="text-sm text-gray-600">
                              Receive a weekly summary of your activity
                            </p>
                          </div>
                          <Switch
                            checked={notifications.weeklyDigest}
                            onCheckedChange={(checked) =>
                              handleNotificationChange("weeklyDigest", checked)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Button
                      onClick={handleSaveNotifications}
                      className="bg-[#db9407] hover:bg-[#b8800a] text-white px-8 py-3 rounded-xl font-semibold"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Shield className="w-6 h-6 text-[#db9407]" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Security Settings
                  </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="space-y-8">
                    <div className="bg-[#db9407]/5 p-6 rounded-2xl">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        Account Security
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Two-Factor Authentication
                            </p>
                            <p className="text-sm text-gray-600">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <Switch
                            checked={securitySettings.twoFactorAuth}
                            onCheckedChange={(checked) =>
                              handleSecurityChange("twoFactorAuth", checked)
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Login Alerts
                            </p>
                            <p className="text-sm text-gray-600">
                              Get notified when someone logs into your account
                            </p>
                          </div>
                          <Switch
                            checked={securitySettings.loginAlerts}
                            onCheckedChange={(checked) =>
                              handleSecurityChange("loginAlerts", checked)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-[#db9407]/5 p-6 rounded-2xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">
                          Session Management
                        </h3>
                        <div>
                          <Label
                            htmlFor="sessionTimeout"
                            className="text-sm font-semibold text-gray-700 mb-3 block"
                          >
                            Session Timeout
                          </Label>
                          <Select
                            value={securitySettings.sessionTimeout}
                            onValueChange={(value) =>
                              handleSecurityChange("sessionTimeout", value)
                            }
                          >
                            <SelectTrigger className="h-12 rounded-xl">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="15">15 minutes</SelectItem>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="60">1 hour</SelectItem>
                              <SelectItem value="120">2 hours</SelectItem>
                              <SelectItem value="never">Never</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="bg-[#db9407]/5 p-6 rounded-2xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">
                          Privacy Settings
                        </h3>
                        <div>
                          <Label
                            htmlFor="profileVisibility"
                            className="text-sm font-semibold text-gray-700 mb-3 block"
                          >
                            Profile Visibility
                          </Label>
                          <Select
                            value={securitySettings.profileVisibility}
                            onValueChange={(value) =>
                              handleSecurityChange("profileVisibility", value)
                            }
                          >
                            <SelectTrigger className="h-12 rounded-xl">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="public">Public</SelectItem>
                              <SelectItem value="private">Private</SelectItem>
                              <SelectItem value="friends">
                                Friends Only
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={handleSaveSecurity}
                        className="bg-[#db9407] hover:bg-[#b8800a] text-white px-8 py-3 rounded-xl font-semibold"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Security Settings
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
