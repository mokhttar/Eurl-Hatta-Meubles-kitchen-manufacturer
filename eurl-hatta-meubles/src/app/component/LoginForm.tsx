"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import Logo from "/public/assets/Hatta Meubles.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function LoginForm() {
  const [value, setValue] = useState();
  const handleChange = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="w-full max-w-lg mx-auto p-4 sm:p-6 lg:p-8 scale-95">
      <div className="flex  mt-5 flex-col items-center">
        <Image src={Logo} alt="WebSite-Logo" width={100} />
        {/* <p className="text-gray-400 font-semibold  text-sm  text-center">
          Discover exquisite kitchen designs tailored to inspire!
        </p> */}
      </div>
      <div className="py-4 mt-5">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Create your Account
        </p>
        <form className="py-5 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              className="flex-1 border-[1px] py-3 sm:py-4 rounded-md focus:border-black px-5 border-black placeholder:text-black"
              placeholder="Enter your first name"
            />
          </div>

          <input
            type="text"
            className="flex-1 border-[1px] py-3 sm:py-4 rounded-md px-5 placeholder:text-black border-black"
            placeholder="Enter your last name"
          />
          <div className="">
            <PhoneInput
              className="w-full border-[1px] py-3 sm:py-4 rounded-md px-5 focus:border-black placeholder:text-black border-black"
              placeholder="Enter your phone number"
              onChange={handleChange}
              value={value}
              country="DZ"
            />
          </div>
          <div className="w-full">
            <Select>
              <SelectTrigger className="w-full py-3 sm:py-4 px-4">
                <SelectValue placeholder="Wilaya" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <input
              type="text"
              className="w-full border rounded-md px-5 py-3 sm:py-4 placeholder:text-black border-black"
              placeholder="Email"
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              className="w-full border rounded-md px-5 py-3 sm:py-4 placeholder:text-black border-black"
              placeholder="Password"
            />
          </div>
          <button className="w-full py-3 sm:py-4 rounded-md font-semibold text-white bg-black mt-2">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
