import React from "react";
import { productType } from "./Product";

interface ProdectStatInterface {
  product: productType[];
  setProduct: React.Dispatch<React.SetStateAction<productType[]>>;
}
function ProdectStat({ product, setProduct }: ProdectStatInterface) {
  return <div>


       
  </div>;
}

export default ProdectStat;
