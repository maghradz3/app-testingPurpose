import React from "react";
import SearchAndFilter from "./SearchAndFilter";
import BannerSlider from "./BannerSlider";

const Hero = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center pb-2 pt-[110px]">
      <div className="mx-20 mb-18 flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4 mb-[84px]">
          <h1 className="font-extrabold text-5xl">Find Your Perfect Ticket</h1>
          <h3 className="font-light text-2xl self-center">
            Discover amazin events happening near you
          </h3>
        </div>
      </div>
      <SearchAndFilter />
      <BannerSlider />
    </div>
  );
};

export default Hero;
