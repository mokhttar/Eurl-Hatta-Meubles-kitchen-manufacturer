import React from "react";
import Image from "next/image";
import PortCuier from "/public/assets/PortCuier.jpeg";
import { StaticImageData } from "next/image";

interface ProductCardInterface {
  name: string;
  price: number;
  img: StaticImageData;
  description: string;
}
function ProductCard({ name, price, img, description }: ProductCardInterface) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4  h-full flex flex-col relative  pb-5  shadow-xl">
      <div className="w-full h-48 md:h-64 lg:h-72 relative">
        <Image
          src={PortCuier}
          alt="port-cuier-img"
          className="rounded-t-lg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-4 text-start">
        <p
          className="text-lg md:text-xl font-light text-gray-700"
          style={{ fontFamily: "Lora, serif" }}
        >
          Port Cuier Messan 80*60
        </p>
        <p className="text-md md:text-lg font-semibold text-green-400">
          4500 Da
        </p>
        <p className="text-sm md:text-xs text-gray-400 py-2 md:py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          nobis maiores eos quos pariatur dolorum quo repellat sit iure nisi
          accusamus beatae eligendi cumque impedit, vero veniam, fugit alias
          expedita.
        </p>
      </div>
      <div className=" mb-2 absolute bottom-0 right-0 px-5">
        <button className="px-4 md:px-6 py-2 rounded-full text-white font-semibold text-sm bg-black">
          Order
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
