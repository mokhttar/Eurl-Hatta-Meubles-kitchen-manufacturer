import React from "react";
import { Products } from "@/app/Data/Products";
import ProductCard from "./ProductCard";

function ProductsList() {
  return (
    <div className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Products?.map((Element: any) => {
        return (
          <div key={Element.id} className="flex justify-center">
            <ProductCard
              name={Element.name}
              price={Element.price}
              img={Element.img}
              description={Element.description}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductsList;
