import { motion } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useState } from "react";
import './navbar.css'

const NavbarSection = () => {
  const [toggle, setToggle] = useState(false);
  // const [theme, setTheme] = useState(false)

  // const handleTheme = () => {
  //   setTheme(!theme)
  // }
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between py-4 px-5">
        {/* mobile menu */}
        <div className="cursor-pointer z-30 relative md:hidden">
          <FaAlignJustify onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              className="fixed top-0 bottom-0 left-0 z-10 p-4 w-[80%] h-[100vh] flex items-end justify-end flex-col bg-slate-600"
              whileInView={{ x: [-300, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <FaXmark onClick={() => setToggle(false)} />
              <ul className="h-full w-full flex flex-col items-center justify-start mt-5 space-y-4 uppercase">
                {[
                  "home",
                  "about",
                  "skills",
                  "portfolio",
                  "client",
                  "contact",
                ].map((item, index) => (
                  <li key={index}>
                    <Link to={item}>{item}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
        <span className="text-3xl hidden md:block">
          <Link to="/">Logo</Link>
        </span>
        <div className="menu hidden md:block">
          <ul className="inline-flex space-x-4 uppercase">
            {["home", "about", "skills", "portfolio", "client", "contact"].map(
              (item, index) => (
                <li key={index}>
                  <Link to={item}>
                    <span>{item}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
          {/* <div className='w-4 m-auto h-1 bg-sky-600 flex justify-center items-center'></div> */}
        </div>

        <div className="flex-center">
          <div className="mr-3">
            <BsMoon className="text-2xl hidden cursor-pointer" />
            <BsSun className="text-2xl cursor-pointer" />
          </div>
          <button className="btn btn-outline">Hire Me</button>
        </div>
      </nav>
      <hr className="border-[] border-[#1e293b]" />
    </div>
  );
};

export default NavbarSection;
