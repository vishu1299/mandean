"use client";

import React, { useState } from "react";

import NextClass from "./next-class";
import { Calendar } from "@/components/ui/calendar";

const UserCalender = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="rounded">
      <div className="bg-white space-y-2 ">
        <h2 className="ml-5 mt-3">Calender</h2>
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="px-0"
            required
          />
        </div>
      </div>
      <div>
        <NextClass />
      </div>
    </div>
  );
};
export default UserCalender;
