import React from "react";
import NavBare from "../component/NavBare";
import KitchensUi from "./KitchensUi";
function page() {
  return (
    <div className="w-screen  h-screen flex flex-col   overflow-x-hidden">
      <div>
        <NavBare />
      </div>
      <div className="mt-32 p-5 w-full ">
        <h1 className="text-2xl  font-semibold  text-black p-2 ">
          Our Kitchens Gallery
        </h1>
      </div>
      {/* Kithens (Images,Summury,Link to see More  Page ) */}
      <div className="p-5   w-1/3">
        <KitchensUi />
      </div>
    </div>
  );
}

export default page;
