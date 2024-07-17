import React from "react";
import LoginForm from "../component/LoginForm";
import LoginImg from "/public/assets/LoginPage.jpg";
import Image from "next/image";
function page() {
  return (
    <div className="w-screen flex h-screen">
      <div className="w-1/2">
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

export default page;
