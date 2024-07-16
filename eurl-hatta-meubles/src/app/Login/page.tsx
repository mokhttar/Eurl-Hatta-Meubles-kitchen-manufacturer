"use client";
import React from "react";
import Image from "next/image";
import LoginImg from "/public/assets/LoginPage.jpg";
import LoginForm from "../component/LoginForm";
function Page() {
  return (
    <div className="w-screen  h-screen overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center  px-4">
        <LoginForm />
      </div>
      <div className="w-full md:w-1/2 border flex justify-center items-center">
        <div className="relative w-full h-full">
          <Image
            src={LoginImg}
            layout="fill"
            objectFit="cover"
            alt="Login-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
