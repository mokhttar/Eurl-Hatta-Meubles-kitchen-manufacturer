"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "/public/assets/Hatta Meubles.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { wilayas } from "@/app/Data/Wilayas";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import BlurFade from "@/components/magicui/blur-fade";

function LoginForm() {
  // Type for wilaya
  type Wilaya = {
    id: number;
    name: string;
  };

  // States for form fields and errors
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [wilaya, setWilaya] = useState<string>("DEFAULT");
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  ); // Array of errors

  // Use toast for displaying notifications
  const { toast } = useToast();

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Function to handle phone number change
  const handlePhoneNumber = (value: any) => {
    setPhoneNumber(value);
  };

  // Function to handle first name change
  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  // Function to handle last name change
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  // Function to handle wilaya change
  const handleWilayaChange = (value: string) => {
    setWilaya(value);
  };

  // Function to handle email change
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Function to handle password change
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Function to validate form fields
  const validateForm = (): boolean => {
    const newErrors: { field: string; message: string }[] = [];

    if (firstName.trim() === "") {
      newErrors.push({ field: "firstName", message: "First name is required" });
    }
    if (lastName.trim() === "") {
      newErrors.push({ field: "lastName", message: "Last name is required" });
    }
    if (
      phoneNumber.trim() === "" ||
      phoneNumber.length <= 12 ||
      phoneNumber.length > 13
    ) {
      newErrors.push({
        field: "phoneNumber",
        message: "Invalid phone number format",
      });
    }
    if (wilaya.trim() === "DEFAULT") {
      newErrors.push({ field: "wilaya", message: "Please select a wilaya" });
    }
    if (email.trim() === "" || !emailRegex.test(email)) {
      newErrors.push({ field: "email", message: "Invalid email address" });
    }
    if (password.length < 6) {
      newErrors.push({
        field: "password",
        message: "Password must be at least 6 characters long",
      });
    }

    setErrors(newErrors);

    // Display toast for each error in reverse order
    for (let i = newErrors.length - 1; i >= 0; i--) {
      const error = newErrors[i];
      toast({
        title: error.message,
        variant: "destructive",
      });
    }

    return newErrors.length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log("Form is valid, submitting...");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 sm:p-6 lg:p-8  scale-95  xl:scale-110">
      <BlurFade delay={0.3} inView>
        <div className="flex  mt-5 flex-col items-center">
          <Image src={Logo} alt="WebSite-Logo" width={140} />
          <p className="text-gray-400 text-sm  animate-pulse">
            Experience the best meals with the best{" "}
          </p>
        </div>
      </BlurFade>
      <BlurFade delay={0.3 * 2} inView={true}>
        <div className="py-4 mt-5">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Create your Account
          </p>
          <form className="py-5 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="flex-1 border-[1px] py-3 sm:py-4 rounded-md focus:border-black px-5  placeholder:text-gray-400"
                placeholder="Enter your first name"
                value={firstName}
                onChange={handleFirstName}
              />
            </div>

            <input
              type="text"
              className="flex-1 border-[1px] py-3 sm:py-4 rounded-md px-5 placeholder:text-gray-400 "
              placeholder="Enter your last name"
              value={lastName}
              onChange={handleLastName}
            />
            <div className="">
              <PhoneInput
                className="w-full border-[1px] py-3 sm:py-4 rounded-md px-5 focus:border-black placeholder:text-gray-400 "
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                country="DZ"
              />
            </div>
            <div className="w-full">
              <Select
                onValueChange={(value) => handleWilayaChange(value)}
                value={wilaya}
              >
                <SelectTrigger className="w-full py-3 sm:py-4 px-4">
                  <SelectValue placeholder="Wilaya" />
                </SelectTrigger>
                <SelectContent>
                  {wilayas?.map((element: Wilaya) => (
                    <SelectItem key={element.id} value={element.name}>
                      {element.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <input
                type="text"
                className="w-full border rounded-md px-5 py-3 sm:py-4 placeholder:text-gray-400"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="w-full">
              <input
                type="password"
                className="w-full border rounded-md px-5 py-3 sm:py-4 placeholder:text-gray-4 00 "
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 sm:py-4 rounded-md font-semibold text-white bg-black mt-2"
            >
              Create
            </button>
          </form>
        </div>
      </BlurFade>
    </div>
  );
}

export default LoginForm;
