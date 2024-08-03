"use client";
import React from "react";
import SearchBare from "./component/SearchBare";
import NavBare from "../component/NavBare";
import { useState } from "react";
import HeadSection from "./component/HeadSection";
// import { useContext } from "react";
// import { createContext } from "vm";

// export const ProductContext = createContext();
function page() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <>
      <div className="w-screen h-screen">
        <div>
          <NavBare />
        </div>
        <div className="mt-32">
          <div className="w-full bh h-full">
            <HeadSection />
          </div>
          <div>
            {/* <SearchBare
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
