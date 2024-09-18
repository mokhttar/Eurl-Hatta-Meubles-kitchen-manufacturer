import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRightIcon } from "lucide-react";

interface KitchenUiInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  date: Date;
  img: StaticImageData;
  inStock: number;
}

function KitchensUi({
  id,
  name,
  description,
  price,
  date,
  img,
  inStock,
}: KitchenUiInterface) {
  return (
    <div className="w-full pb-10 rounded-md h-full relative border">
      <div className="flex flex-col gap-2 w-full text-start">
        <Image
          src={img}
          alt={`Kitchen Image - ${name}`}
          fill
          className="rounded-md object-cover"
        />
        <p className="w-full p-2 text-sm">{description}</p>
      </div>
      <div className="absolute right-3 top-3 scale-105">
        <ArrowRightIcon className="text-gray-500" />
      </div>
    </div>
  );
}

export default KitchensUi;
