import React from "react";
import { StaticImageData } from "next/image";

interface offersInterface {
  name: string;
  description: string;
  price: number;
  img: StaticImageData;
  Date: Date;
  Instock: number;
}
function OfferCard({
  name,
  description,
  price,
  img,
  Date,
  Instock,
}: offersInterface) {
  return <div></div>;
}

export default OfferCard;
