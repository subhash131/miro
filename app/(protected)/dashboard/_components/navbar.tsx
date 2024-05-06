"use client";
import { UserButton } from "@clerk/clerk-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-green-500 flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-500">search</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
