import React from "react";
import facbookIcon from "/public/assets/logos_facebook.svg";
import GoogleIcon from "/public/assets/google.svg";
import xIcon from "/public/assets/X.svg";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { useRouter } from "next/navigation";

function ConnectSection() {
  const Router = useRouter();
  const handleClick = (route: string) => {
    Router.push(`/${route}`);
  };
  return (
    <div className=" w-full  h-1/3  rounded-md">
      <BlurFade delay={0.4}>
        <div className="flex  mt-10 flex-col gap-4 justify-center items-center p-5">
          <h1 className="text-xl px-4 font-semibold">
            Log In to your account to order your products{" "}
          </h1>
          <div className="flex gap-2 ">
            <button
              className="px-5 py-2 w-32 rounded-full bg-black text-white font-semibold"
              onClick={() => handleClick("SignUp")}
            >
              Sign Up
            </button>
            <button
              className="px-5 w-32 py-2  rounded-full border"
              onClick={() => handleClick("Login")}
            >
              Log In
            </button>
          </div>
          <hr className="border w-64 border-black my-1" />
          <div className="flex  gap-5  items-center justify-center">
            <Image src={facbookIcon} alt="facbookIcon " width={30} />
            <Image src={GoogleIcon} alt="facbookIcon " width={30} />
            <Image src={xIcon} alt="facbookIcon " width={30} />
          </div>
        </div>
      </BlurFade>
    </div>
  );
}

export default ConnectSection;
