"use client";

import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

const SetTheme = dynamic(() => import("../components/SetTheme"), {
  ssr: false,
});

const Navbar = () => {
  return (
    <div className="thenav">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className="robotomono200">Dev Block</div>
        </Link>
        <SetTheme />
      </div>
    </div>
  );
};

export default Navbar;
