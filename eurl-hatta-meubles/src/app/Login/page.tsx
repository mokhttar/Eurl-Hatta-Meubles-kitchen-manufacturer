import React from "react";
import LoginForm from "../component/LoginForm";
import LoginImg from "/public/assets/LoginPage.jpg";
import Image from "next/image";
function page() {
  return (
    <div className="w-screen flex h-screen">
      <div className="sm:w-1/2 w-screen">
        <LoginForm />
      </div>
      <div className="w-full hidden md:w-1/2 border sm:flex justify-center items-center">
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

export default page;
