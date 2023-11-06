import { Link } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";

const NavbarSection = () => {
  return (
    <div className="container mx-auto ">
      <nav className="flex items-center justify-between py-4 px-5">
        {/* mobile menu */}
        <svg
          className="block h-6 w-6 md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <span className="text-3xl">
          <Link to="/">Logo</Link>
        </span>
        <div className="hidden md:block">
          <ul className="inline-flex space-x-4 uppercase">
            {["home", "about", "skills", "portfolio", "client", "contact"].map(
              (item, index) => (
                <li key={index}>
                  <Link to={item}>{item}</Link>
                </li>
              )
            )}
          </ul>
        </div>
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
  );
};

export default NavbarSection;
