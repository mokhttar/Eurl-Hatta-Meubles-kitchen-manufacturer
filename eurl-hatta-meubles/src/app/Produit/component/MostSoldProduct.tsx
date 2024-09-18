import React from "react";
import Image from "next/image";
import MostSelledProductImage from "/public/assets/NovaPro.jpg";
import BlurFade from "@/components/magicui/blur-fade";

interface ProductType {
  id: number;
  name: string;
  Description: string;
}
function MostSoldProduct() {
  return (
    <div className="w-full h-full    rounded-md">
      <div className="py-2">
        <BlurFade delay={0.3}>
          <h1 className="text-lg font-semibold py-2 text-center">
            Most Selled Product{" "}
          </h1>
          <Image
            src={MostSelledProductImage}
            className="   rounded-md"
            alt="MosetSelled-Item"
            objectFit="cover"
          />{" "}
        </BlurFade>
      </div>
      <BlurFade delay={0.4}>
        <div className="text-start">
          <h1 className="text-2xl font-light text-gray-500 py-2">
            {" "}
            Nova Pro Scala
          </h1>
          <hr className="border w-32 border-black my-1" />
          <p className="text-left text-sm w-fit h-full">
            The Nova Pro Scala double-wall drawer system offers elegance and
            futuristic design, with superior quality and versatility. Available
            in various heights, lengths, and finishes (Silver, Ice, Stone), it
            allows for custom side panels, perfect for distinctive kitchens and
            baths.
          </p>
        </div>
      </BlurFade>
    </div>
  );
}

export default MostSoldProduct;
