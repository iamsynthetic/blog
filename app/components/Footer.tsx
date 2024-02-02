"use client";

import React from "react";
import Link from "next/link";
import { useAppContext } from "../context";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  EmailDarktIcon,
  EmailLightIcon,
  TwitterDarkIcon,
  TwitterLightIcon,
} from "./Icons";

interface Props {
  title: string;
  tags?: boolean;
}

const Footer = ({ title = "", tags = false }: Props) => {
  const size = useWindowSize();
  const { thememode } = useAppContext();

  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-start">
            <div className="grid-rows-2">
              <div className="uppercase text-lg poppins700">
                Hi, I&#39;am Ryan
              </div>
              <div className="flex justify-end lekton400">
                I am front-end developer. I have been working for two years at a
                large advertising agency in the great white north. This blog
                will serve as my online journal of sorts. Glad you stopped by,
                and please do not hesitate to email me.
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="lekton400">
              <div className="uppercase text-lg poppins700">GET IN CONTACT</div>
              <div className="lekton400">
                You can contact me with the below information.
              </div>
              <div className="flex items-start">
                <Link
                  href={"mailto:synthetic_samurai@hotmail.com"}
                  target="_blank"
                >
                  {thememode === "light" || thememode === "pastel" ? (
                    <div>
                      <div className="tooltip" data-tip="Email">
                        <EmailDarktIcon />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="tooltip tooltip-accent" data-tip="Email">
                        <EmailLightIcon />
                      </div>
                    </div>
                  )}
                </Link>
                <Link className="pl-4" href="www.twitter.com" target="_blank">
                  {thememode === "light" || thememode === "pastel" ? (
                    <div>
                      <div className="tooltip" data-tip="Twitter">
                        <TwitterDarkIcon />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        className="tooltip tooltip-accent"
                        data-tip="Twitter"
                      >
                        <TwitterLightIcon />
                      </div>
                    </div>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
