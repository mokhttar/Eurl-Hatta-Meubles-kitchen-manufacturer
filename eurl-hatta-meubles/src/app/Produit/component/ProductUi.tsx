import React from "react";
import { StaticImageData } from "next/image";

interface ProductUiProps {
  id: number;
  name: string;
  img: StaticImageData;
}

function ProductUi({id,name,img}:ProductUiProps) {
  return <div>ProductUi</div>;
}

export default ProductUi;
