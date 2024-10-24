"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

const CategoryDropDown = () => {
  const [open, setOpen] = React.useState(false);
  console.log(open);

  const isOpenArrow = open
    ? "rotate-180 ease-in duration-300"
    : "rotate-0 ease-in duration-300";
  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="flex justify-center items-center gap-3  ">
          <IoIosArrowDown className={`${isOpenArrow}`} />
          Select Category
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuLabel>Categories</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-black" />
          <DropdownMenuItem>Sport</DropdownMenuItem>
          <DropdownMenuItem>Theatre</DropdownMenuItem>
          <DropdownMenuItem>Moive</DropdownMenuItem>
          <DropdownMenuItem>Events</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CategoryDropDown;
