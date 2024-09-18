"use client";
import React from "react";
import SearchBare from "./component/SearchBare";
import NavBare from "../component/NavBare";
import { useState } from "react";
import HeadSection from "./component/HeadSection";
import ProductCard from "./component/ProductCard";

//TODO use context api for  state managment
function page() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <>
      <div className="w-screen h-screen   overflow-x-hidden">
        <div>
          <NavBare />
        </div>
        <div className="mt-32">
          <div className="w-full bh h-full">
            <HeadSection />
          </div>
          <div className="mt-20">
            <h1 className="text-2xl text-center font-semibold">Our Products</h1>
          </div>
          <div>
            <SearchBare
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className="px-5 py-5">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
