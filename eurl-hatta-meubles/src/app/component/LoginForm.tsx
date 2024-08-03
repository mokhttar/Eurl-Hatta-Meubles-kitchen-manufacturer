"use client";
import React, { FormEvent } from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const { toast } = useToast();
  const route = useRouter();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    console.log(email);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    console.log(password);
  };

  function ValidationInputs(): boolean {
    const newErrors: { field: string; message: string }[] = [];
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

    for (let i = newErrors.length - 1; i >= 0; i--) {
      const error = newErrors[i];
      toast({
        title: error.message,
        variant: "destructive",
      });
    }

    return newErrors.length === 0;
  }

  const SubmitForm = async () => {
    const response = await fetch("http://localhost:3001/users/logIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const error = response.json();
      toast({
        title: "Login failed",
        description: "Please check your email or password",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Login Seccusful",
        variant: "default",
      });
      route.push("/");
    }
  };

  const Login = (event: FormEvent) => {
    event.preventDefault();
    const isValid = ValidationInputs();
    if (isValid) {
      SubmitForm();
    }
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-gray-100 p-4 md:p-10 md:shadow-xl">
      <div className=" p-6    shadow-lg rounded-md  shadow-slate-500  md:p-20  relative w-full max-w-md">
        <div className="text-center">
          <h1 className="font-bold text-2xl md:text-4xl py-1">Welcome back</h1>
          <p className="text-sm md:text-base pt-4 text-gray-400">
            Please log in to your account to continue.
          </p>
        </div>
        <form
          className="py-4 flex flex-col items-center justify-center"
          onSubmit={Login}
        >
          <div className="flex flex-col items-center justify-center gap-4 mt-5 w-full">
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              className="border-b border-black   bg-transparent  py-2 px-4 placeholder:text-gray-400 w-full"
              placeholder="Please enter your email"
            />
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              className="border-b border-black py-2 px-4 bg-transparent placeholder:text-gray-400 w-full"
              placeholder="Please enter your password"
            />
          </div>
          <div className="py-4  w-full mt-5">
            <button
              type="submit"
              className="  w-full rounded-md text-white bg-black py-2 border"
            >
              Connect
            </button>
          </div>
        </form>
      </div>
      <AnimatedGridPattern
        numSquares={1000}
        maxOpacity={0.1}
        duration={0.6}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}

export default LoginForm;
