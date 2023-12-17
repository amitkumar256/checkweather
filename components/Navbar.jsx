import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className=" h-16 bg-gradient-to-r from-rose-400 to-fuchsia-500">
      <div className="max-w-[1280px] mx-3 sm:mx-5 xl:mx-auto flex justify-between h-16  ">
        <div className="flex gap-1 items-center">
          <Image
            className="hidden sm:block"
            src={"/Images/logo.png"}
            height={55}
            width={55}
          />
          <Image
            className="sm:hidden"
            src={"/Images/logo.png"}
            height={45}
            width={45}
          />

          <h1 className="text-xl sm:text-4xl text-white font-bold  font-serif sm:tracking-wider ">
            <i>Live Weather</i>
          </h1>
        </div>
        <div className="flex sm:gap-4 gap-2  items-center text-white font-serif text-base sm:text-xl font-bold">
          <h1 className=" cursor-pointer hover:scale-110">Home</h1>
          <h1 className=" cursor-pointer hover:scale-110">About</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
