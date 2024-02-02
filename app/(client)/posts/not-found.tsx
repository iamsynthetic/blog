import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-9/12 max-w-[1200px] text-center section-minheight">
          <Header title="404 - page not found" tags={true} />
          <Link className="lekton700 text-sm txt-link-tag p-4" href="/">
            Go Home
          </Link>
        </div>
        <div className="thefooter">
          <Footer title="FOOTER" tags={true} />
        </div>
      </div>
    </>
  );
};

export default NotFound;
