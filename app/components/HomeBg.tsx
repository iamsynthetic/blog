"use client";

import React from "react";
import { useAppContext } from "../context";
import Link from "next/link";

interface Props {
  title: string;
  tags?: boolean;
}
const HomeBg = ({ title = "", tags = false }: Props) => {
  // const { thememode, setthememode } = useAppContext();

  // console.log("page - home - thememode is: " + thememode);
  return (
    <>
      {tags && (
        <div className="text-xs mt-2">
          <Link href="/tag">#tags</Link>
        </div>
      )}

      <div className="box rubik400">
        {/* <div data-theme={thememode} className="box rubik400"> */}
        {/* <div className="box rubik400"> */}
        <h2 className="uppercase text-2xl font-bold">{title}</h2>
        <br></br>
        <h1>HomeBg</h1>
        <br></br>
        <h2>buttons</h2>
        <button className="btn btn-primary">primary</button>
        <button className="btn btn-secondary">secondary</button>
        <button className="btn btn-accent">accent</button>
        <button className="btn btn-neutral">neutral</button>
        <button className="btn btn-info">info</button>
        <button className="btn btn-success">success</button>
        <button className="btn btn-warning">warning</button>
        <button className="btn btn-error">error</button>
        <h2>colors</h2>
        <div className="w-10 h-10 mb-1 bg-primary">1</div>
        <div className="w-10 h-10 mb-1 bg-secondary">2</div>
        <div className="w-10 h-10 mb-1 bg-accent">3</div>
        <div className="w-10 h-10 mb-1 bg-neutral">4</div>
        <div className="w-10 h-10 mb-1 bg-primary-content">5</div>
        <div className="w-10 h-10 mb-1 bg-secondary-content">6</div>
        <div className="w-10 h-10 mb-1 bg-accent-content">7</div>
        <div className="w-10 h-10 mb-1 bg-neutral-content">8</div>
        <div className="w-10 h-10 mb-1 bg-base-100">9</div>
        <div className="w-10 h-10 mb-1 bg-base-200">10</div>
        <div className="w-10 h-10 mb-1 bg-base-300">11</div>
        <div className="w-10 h-10 mb-1 bg-base-content">12</div>
        <div className="w-10 h-10 mb-1 bg-info">13</div>
        <div className="w-10 h-10 mb-1 bg-success">14</div>
        <div className="w-10 h-10 mb-1 bg-warning">15</div>
        <div className="w-10 h-10 mb-1 bg-error">16</div>
        <div className="w-10 h-10 mb-1 bg-info-content">17</div>
        <div className="w-10 h-10 mb-1 bg-success-content">18</div>
        <div className="w-10 h-10 mb-1 bg-warning-content">19</div>
        <div className="w-10 h-10 mb-1 bg-error-content">20</div>
      </div>
    </>
  );
};

export default HomeBg;
