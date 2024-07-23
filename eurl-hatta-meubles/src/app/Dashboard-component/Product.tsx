import React from "react";
import ProdectStat from "./ProdectStat";
import { useState } from "react";
import { StaticImageData } from "next/image";

//Create a prouct Type

export type productType = {
  id: number;
  name: string;
  description: string;
  Images: StaticImageData[];
  qte_Available: number;
  id_Cat?: number;
  id_Admin?: number;
  id_marque?: number;
};

function Product() {
  const [product, setProduct] = useState<productType[]>([
    { id: 0, name: "", description: "", Images: [], qte_Available: 0 },
  ]);
  return (
    <div className="w-full h-full">
      <div>
        <ProdectStat product={product} setProduct={setProduct} />
      </div>
    </div>
  );
}

export default Product;
