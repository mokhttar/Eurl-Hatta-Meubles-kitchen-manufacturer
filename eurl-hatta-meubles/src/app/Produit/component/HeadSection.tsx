import React from "react";
import MostSoldProduct from "./MostSoldProduct";
import ConnectSection from "./ConnectSection";
import LatestProducts from "./LatestProducts";
function HeadSection() {
  return (
    <div className="w-screen  flex  gap-3 px-5  h-screen">
      <div className=" flex flex-col gap-3 rounded-md w-1/2 ">
        <div className="border w-full  h-1/2 rounded-md p-5 ">
          <h1 className="text-xl font-semibold text-center">Latest Product</h1>
          <section className="flex py-2">
            <LatestProducts />
          </section>
        </div>
        <div className="border w-full  h-1/2 rounded-md "></div>
      </div>
      <div className="  w-1/4   rounded-md">
        <div className="w-full  rounded-md h-full border"></div>
      </div>
      <div className="  w-1/3    rounded-md flex flex-col gap-1 ">
        <section className="border rounded-md">
          <ConnectSection />
        </section>
        <section className=" rounded-md p-5">
          <MostSoldProduct />
        </section>
      </div>
    </div>
  );
}

export default HeadSection;
