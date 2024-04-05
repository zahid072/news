import React from "react";
import logo from "../../../assets/logo.png";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <>
      <div className="mt-5 text-center space-y-2">
        <img className="mx-auto" src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className="text-xl font-semibold">Sunday, November 27, 2022</p>
      </div>
      <div className="w-full flex p-2 bg-slate-200 mt-4">
        <button className="btn btn-accent">Latest</button>
        <Marquee  className="text-xl" speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </>
  );
};

export default Header;
