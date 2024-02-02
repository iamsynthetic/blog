"use client";
import Header from "@/app/components/Header";
import React from "react";

import { useAppContext } from "../../context";
import Footer from "@/app/components/Footer";
const SecretPage = () => {
  const { thememode } = useAppContext();

  console.log("navbar - thememode is: " + thememode);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-9/12 max-w-[1200px] section-minheight">
          <Header title="SECRET PAGE!" tags={true} />

          <h1>CONGRATS! you've found the secret page</h1>
          <p>shhhh don't tell anyone though.....</p>
        </div>
        <div className="thefooter">
          <Footer title="FOOTER" tags={true} />
        </div>
      </div>
    </>
  );
};

export default SecretPage;
