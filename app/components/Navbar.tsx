"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useAppContext } from "../context";
import { TwitterDarkIcon, TwitterLightIcon } from "./Icons";

interface Props {
  title: string;
  tags?: boolean;
}
declare global {
  interface Window {
    my_modal_2: HTMLFormElement;
  }
}

const SetTheme = dynamic(() => import("../components/SetTheme"), {
  ssr: false,
});

const Navbar = ({ title = "", tags = true }: Props) => {
  const { thememode } = useAppContext();
  const myModal = useRef();
  const pathname = usePathname();
  const [secreturl, setSecreturl] = useState(false);

  console.log("navbar - thememode is: " + thememode);

  // useEffect(() => {
  //   if(pathname === "/secret") {
  //     setSecreturl(true);
  //   } else {
  //     setSecreturl(false);
  //   }
  // }

  useEffect(() => {
    if (pathname === "/secret") {
      setSecreturl(true);
    } else {
      setSecreturl(false);
    }
  });

  return (
    <div className="thenav">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className="lekton400 nav-hover">AD WORDS</div>
        </Link>
        <div className="flex justify-between">
          {tags && (
            <div className="lekton400 nav-hover text-sm text-b pr-6">
              <Link href="/tags">#TAGS</Link>
            </div>
          )}
          <div
            className="lekton400 nav-hover text-sm text-b pr-6"
            onClick={() => window.my_modal_2.showModal()}
          >
            <div
              className={`tooltip ${
                thememode === "light" ? null : "tooltip-accent"
              }`}
              data-tip="What's this?"
            >
              ?
            </div>
          </div>
          <dialog
            id="my_modal_2"
            className={`modal ${
              thememode === "light" ? "color-light" : "color-dark"
            }`}
          >
            <form method="dialog" className="modal-box">
              <h3 className="poppins700">WHAT IS THIS?</h3>
              <div className="lekton400 text-sm py-4">
                {secreturl ? (
                  <div>
                    Hey congrats you found the secret page!
                    <br /> <br />
                    Remember don&#39;t tell anyone about this page, or this
                    modal, ok gotta go!
                  </div>
                ) : (
                  <div>
                    This blog is actually a fictional story, written by a
                    fictional character who is documenting his daily life.
                    Please don&#39;t tell him that he&#39;s not real though, it
                    may upset him.
                    <br /> <br />
                    Also, don&#39;t tell him about this pop up either, he might
                    try to take it down. If you want to know more...try{" "}
                    <span className="color-primary">
                      <i>slash</i>
                    </span>
                    <span className="color-secondary">
                      <i>secret</i>
                    </span>
                  </div>
                )}
              </div>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          <div className="lekton400 text-sm pr-6 mt-[0px]">
            <Link href="www.twitter.com" target="_blank">
              {thememode === "light" || thememode === "pastel" ? (
                <div>
                  <div className="tooltip" data-tip="Twitter">
                    <TwitterDarkIcon />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="tooltip tooltip-accent" data-tip="Twitter">
                    <TwitterLightIcon />
                  </div>
                </div>
              )}
            </Link>
          </div>
          <div className="mt-[-1px]">
            <SetTheme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
