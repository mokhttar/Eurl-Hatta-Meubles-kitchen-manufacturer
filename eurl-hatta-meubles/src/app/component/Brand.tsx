import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
interface BrandInterface {
  img: StaticImageData;
  alt: string;
}

function Brand({ img, alt }: BrandInterface) {
  return (
    <div>
      <div>
        <a href="https://www.grassusa.com/">
          <Image
            src={img}
            alt={alt}
            layout="responsive"
            className=" scale-75 mt-1"
            width={1}
          />
        </a>
      </div>
    </div>
  );
}

export default Brand;
