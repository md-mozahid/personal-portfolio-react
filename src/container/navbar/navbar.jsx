import { BsMoon, BsSun } from 'react-icons/bs'
import { FaAlignJustify, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import { useState } from 'react'

const NavbarSection = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="container mx-auto ">
      <nav className="flex items-center justify-between py-4 px-5">
        {/* mobile menu */}
        <div className="cursor-pointer z-30 relative">
          <FaAlignJustify onClick={() => setToggle(true)} />

          {toggle && (
            <div className="fixed top-0 bottom-0 left-0 z-10 p-4 w-[80%] h-[100vh] flex items-end justify-end flex-col bg-slate-600">
              <FaXmark onClick={() => setToggle(false)} />
              <ul className="h-full w-full flex flex-col items-start justify-start space-x-4 uppercase">
                {[
                  'home',
                  'about',
                  'skills',
                  'portfolio',
                  'client',
                  'contact',
                ].map((item, index) => (
                  <li key={index}>
                    <Link to={item}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <span className="text-3xl hidden md:block">
          <Link to="/">Logo</Link>
        </span>
        <div className="flex-center">
          <div className="mr-3">
            <BsMoon className="hidden cursor-pointer" />
            <BsSun className="text-2xl cursor-pointer" />
          </div>
          <button className="btn btn-outline">Hire Me</button>
        </div>
      </nav>
      <hr className="border-[] border-[#1e293b]" />
    </div>
  )
}

export default NavbarSection
