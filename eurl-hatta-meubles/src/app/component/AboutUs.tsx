import React from "react";
import Kitchen4 from "../assets/Kitchen4.jpg";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="bg-cover py-5 px-5 relative ">
      <div>
        <Image src={Kitchen4} alt="background " />
      </div>
      <div className="absolute top-10">
        <h1 className="text-black  text-2xl  font-semibold  px-10">About Us</h1>
         <hr />
      </div>
    </div>
  );
}

export default AboutUs;
