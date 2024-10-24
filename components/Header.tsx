import React from "react";
import { CiGlobe } from "react-icons/ci";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <header className="h-[83px] w-full px-[90px] py-4 flex justify-between items-center  ">
      <div className="text-[#4169E1] text-xl font-bold">Bilethub</div>
      <div className="w-[332px] flex justify-between items-center ">
        <Button className="rounded-full border border-[#6D6F744D]">
          <CiGlobe className="text-white text-xl" />
        </Button>
        <Button className="text-white py-2.5 px-11 font-light text-md ">
          Sell ticket
        </Button>
        <Button
          className="text-white bg-[#4169E1] hover:bg-[#234ac0] duration-300 ease-in-out py-2.5  px-6 rounded-[5px]
"
        >
          Log in
        </Button>
      </div>
    </header>
  );
};

export default Header;
