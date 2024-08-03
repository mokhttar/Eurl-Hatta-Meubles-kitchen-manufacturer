import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProductUiProps {
  id: number;
  name: string;
  img: StaticImageData;
  description?: string;
}
function LatestProductUi(props: ProductUiProps) {
  return (
    <>
      <div className="flex flex-col  py-4 ">
        <Image
          src={props.img}
          alt="Latest-product-img"
          width={200}
          className=" rounded-sm"
        />
        <div className=" text-xs">
          <span className="text-gray-500 text-sm ">{props.name}</span> <br />
          {props.description}
        </div>
      </div>
    </>
  );
}

export default LatestProductUi;
