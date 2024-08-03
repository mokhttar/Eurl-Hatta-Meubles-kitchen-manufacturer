"use client";
import React from "react";
import { useState } from "react";
interface searchBareProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
function SearchBare({ searchValue, setSearchValue }: searchBareProps) {
  return (
    <div className="w-full h-full  flex  justify-center items-center p-5">
      <div className="   border-black border-[0.8px] w-fit rounded-full relative  ">
        <input
          type="text"
          size={30}
          className="py-2 px-5 rounded-full  placeholder:text-sm "
          placeholder="Search For Product"
        />
        <div className="">
          <button className="rounded-full bg-black px-5 py-2  top-0 right-0  text-white font-semibold absolute">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBare;
