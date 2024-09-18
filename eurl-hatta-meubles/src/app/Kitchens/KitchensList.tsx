import React from "react";
import { KitchensArray } from "../Data/Kitchens";
import KitchensUi from "./KitchensUi";

function KitchensList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {KitchensArray?.map((element) => (
        <div key={element.id}>
          <KitchensUi
            id={element.id}
            name={element.name}
            description={element.description}
            price={element.price}
            date={element.Date}
            img={element.img}
            inStock={element.Instock}
          />
        </div>
      ))}
    </div>
  );
}

export default KitchensList;
