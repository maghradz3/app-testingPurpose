import Image from "next/image";
import React from "react";
import sportImg from "../assets/sport.jpg";

const BannerSlider = () => {
  return (
    <div className="w-full overflow-hidden h-[600px] mt-12  rounded-[40px]">
      <Image
        src={sportImg}
        alt="Banner"
        className="object-cover object-center w-full rounded-[40px]"
        width={1260}
        height={600}
      />
    </div>
  );
};

export default BannerSlider;
