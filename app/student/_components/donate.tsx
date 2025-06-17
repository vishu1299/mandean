"use client";

import type React from "react";
import { useState } from "react";
import {
  Users,
  ChartLine,
  BookText,
  Heart,
  RefreshCw,
  Calendar,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DonationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type DonationType = "one-time" | "recurring";
type RecurringFrequency = "weekly" | "monthly" | "quarterly" | "yearly";

const donationOptions = [
  { label: "Starter", value: 100 },
  { label: "Popular", value: 500, highlight: true },
  { label: "Impact", value: 1000 },
  { label: "Champion", value: 5000 },
];

const donationBenefits = [
  {
    title: "Support Platform Growth",
    description: "Help us improve and expand our learning tools",
    icon: ChartLine,
  },
  {
    title: "Create More Resources",
    description: "Enable development of quality educational content",
    icon: BookText,
  },
  {
    title: "Empower Communities",
    description: "Foster stronger learning communities",
    icon: Users,
  },
];

const recurringFrequencies: { value: RecurringFrequency; label: string }[] = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "yearly", label: "Yearly" },
];

export function DonationDialog({ open, onOpenChange }: DonationDialogProps) {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<DonationType>("one-time");
  const [recurringFrequency, setRecurringFrequency] =
    useState<RecurringFrequency>("monthly");

  const handleAmountSelect = (value: number) => {
    setSelectedAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  const getSelectedAmount = (): number => {
    return Number(customAmount) || selectedAmount || 0;
  };

  const getDonationButtonText = (): string => {
    const amount = getSelectedAmount();
    if (!amount) return "Donate Now";

    if (donationType === "recurring") {
      return `Donate ₹${amount} ${recurringFrequency}`;
    }
    return `Donate ₹${amount} once`;
  };

  const getFrequencyAbbreviation = (freq: RecurringFrequency): string => {
    const abbrevMap = {
      weekly: "wk",
      monthly: "mo",
      quarterly: "qtr",
      yearly: "yr",
    };
    return abbrevMap[freq];
  };

  const getFrequencyName = (freq: RecurringFrequency): string => {
    const nameMap = {
      weekly: "week",
      monthly: "month",
      quarterly: "quarter",
      yearly: "year",
    };
    return nameMap[freq];
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="px-5 py-6 max-h-[90vh] overflow-y-scroll bg-white sm:max-w-[550px] border-none">
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold tracking-tight">
              Support Our Educational Community
            </h2>
            <p className="whitespace-nowrap text-sm">
              Your contribution helps us create better learning opportunities
              for everyone
            </p>
            <p className="text-xs text-muted-foreground">
              Join thousands of donors who believe in accessible education
            </p>
          </div>

          {/* Donation Type Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setDonationType("one-time")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                donationType === "one-time"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Heart className="h-4 w-4" />
              One-time
            </button>
            <button
              onClick={() => setDonationType("recurring")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                donationType === "recurring"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <RefreshCw className="h-4 w-4" />
              Recurring
            </button>
          </div>

          {/* Recurring Frequency Selector */}
          {donationType === "recurring" && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">
                  Recurring Frequency
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {recurringFrequencies.map((freq) => (
                  <button
                    key={freq.value}
                    onClick={() => setRecurringFrequency(freq.value)}
                    className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                      recurringFrequency === freq.value
                        ? "bg-blue-600 text-white"
                        : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-100"
                    }`}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
              <p className="text-xs text-blue-600 mt-2">
                You can cancel your recurring donation anytime from your account
                settings
              </p>
            </div>
          )}

          <div className="flex space-x-3 justify-between">
            {donationOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => handleAmountSelect(option.value)}
                className={`flex flex-col items-center justify-center border-2 py-1 rounded-md min-w-[80px] w-full ${
                  selectedAmount === option.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-3"
                }`}
              >
                <span className="text-xs text-gray-4">{option.label}</span>
                <span className="font-bold">₹{option.value}</span>
                {donationType === "recurring" && (
                  <span className="text-xs text-gray-400">
                    /{getFrequencyAbbreviation(recurringFrequency)}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-2">
              ₹
            </span>
            <Input
              className="pl-8 border border-gray-3 placeholder:text-gray-400 font-thin text-sm"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
            {donationType === "recurring" && customAmount && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                /{getFrequencyName(recurringFrequency)}
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            {donationBenefits.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex flex-col items-center space-y-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon
                    strokeWidth={3}
                    className={`h-5 w-5 text-blue-600 ${
                      title === "Empower Communities" && "fill-blue-600"
                    }`}
                  />
                </div>
                <h3 className="font-medium text-sm whitespace-nowrap">
                  {title}
                </h3>
                <p className="text-sm text-gray-4">{description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Donor Information</h3>
            <Select>
              <SelectTrigger className="w-full border-gray-3 border-2 text-gray-500">
                <SelectValue placeholder="Select Teacher" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="teacher1">Ms. Johnson</SelectItem>
                <SelectItem value="teacher2">Mr. Smith</SelectItem>
                <SelectItem value="teacher3">Dr. Patel</SelectItem>
                <SelectItem value="teacher4">Mrs. Garcia</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Message of Support (Optional)"
              className="min-h-[100px] border-gray-3 border-2 placeholder:text-gray-500 placeholder:text-sm resize-none"
            />
          </div>

          <Button className="w-full" size="lg" disabled={!getSelectedAmount()}>
            {getDonationButtonText()}
          </Button>

          {donationType === "recurring" && (
            <p className="text-xs text-center text-gray-500">
              By proceeding, you agree to recurring charges. You can modify or
              cancel your subscription at any time.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function DonateButton({
  className = "",
}: {
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        size="sm"
        className={`bg-emerald-500 text-white sm:size-sm md:size-md lg:size-xl xl:size-2xl rounded-md ${className}`}
        onClick={() => setOpen(true)}
      >
        Donate
      </Button>
      <DonationDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
