import React, { Children } from "react";
import Image from "next/image";
import { Products } from "@/app/Data/Products";
import LatestProductUi from "./LatestProductUi";
import BlurFade from "@/components/magicui/blur-fade";
function LatestProducts() {
  return (
    <div className="flex gap-3 px-2">
      {Products?.map((Element: any, index: number) => {
        return (
          <div>
            <LatestProductUi
              id={Element.id}
              name={Element.name}
              img={Element.img}
              description={Element.description}
            />
          </div>
        );
      })}
    </div>
  );
}

export default LatestProducts;
