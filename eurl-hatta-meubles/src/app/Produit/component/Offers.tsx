import React from "react";
import OfferCard from "./OfferCard";
import { ProductType } from "@/types/ProductType";
import { offersArray } from "@/app/Data/Offers";

function Offers() {
  return (
    <div>
      {/* {offersArray.map((Element: ProductType) => {
        return (
          <div key={Element.id}>
            <OfferCard
              name={Element.name}
              description={Element.description}
              price={Element.price}
              img={Element.img}
              Date={Element.Date}
              Instock={Element.Instock}
            />
          </div>
        );
      })} */}
      <div>
        <OfferCard
          name={offersArray[0].name}
          description={offersArray[0].description}
          price={offersArray[0].price}
          img={offersArray[0].img}
          Date={offersArray[0].Date}
          Instock={offersArray[0].Instock}
        />
      </div>
    </div>
  );
}

export default Offers;
