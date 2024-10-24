import React from "react";
import CalendarPicker from "./Calendar";
import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";
import CategoryDropDown from "./CategoryDropDown";
import { Button } from "./ui/button";

const SearchAndFilter = () => {
  return (
    <div className="w-full h-[56px]  px-[75px] flex justify-between items-center  ">
      <div className="px-4 py-2 h-full flex items-center  border-2 border-[#6D6F7433] rounded-[30px] w-1/4">
        <CiSearch className="text-2xl text-white " />
        <Input
          className=" placeholder:text-white placeholder:text-md self-start border-none "
          placeholder="Search events"
        />
      </div>
      <div className="px-4 h-full py-2.5 border border-[#6D6F7433]  rounded-[30px] w-1/4">
        <CategoryDropDown />
      </div>
      <div className="px-4 py-2.5 w-1/4 h-full  ">
        <CalendarPicker />
      </div>
      <Button
        className="font-normal w-[200px] h-full text-md
       py-2.5 px-8 bg-[#4169E1] text-white rounded-3xl flex justify-center items-center"
      >
        Search tickets
      </Button>
    </div>
  );
};

export default SearchAndFilter;
