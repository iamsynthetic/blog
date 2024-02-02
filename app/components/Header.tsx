"use client";
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  tags?: boolean;
}

const Header = ({ title = "", tags = false }: Props) => {
  const pathname = usePathname();

  console.log("header pathname is: " + pathname);

  const fields = pathname.split("/");
  const first = fields[0];
  const second = fields[1];
  const third = "#" + fields[2];

  console.log("first split is: " + first);
  console.log("second split is:" + second);
  console.log("third split is:" + third);

  return (
    <>
      <header className="text-center py-10 pb-28">
        <h2 className="uppercase text-8xl poppins700">
          {title === "" ? <div>{third}</div> : <div>{title}</div>}
        </h2>
      </header>
    </>
  );
};

export default Header;
