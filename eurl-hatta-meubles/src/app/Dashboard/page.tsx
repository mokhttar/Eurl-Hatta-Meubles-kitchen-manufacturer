import React from "react";
import NavBare from "../Dashboard-component/NavBare";
import Stat from "../Dashboard-component/Stat";
function page() {
  return (
    <div className=" flex w-screen h-screen ">
      <div className=" w-1/6  h-screen">
        <NavBare />
      </div>
      <div className="w-full h-full p-5">
        <Stat />
      </div>
    </div>
  );
}

export default page;
