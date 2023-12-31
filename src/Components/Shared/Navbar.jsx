import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { PiUserCircle } from "react-icons/pi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [lessPadding, setLessPadding] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setLessPadding(true);
      } else {
        setLessPadding(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li className="hover:text-[#EEFF25] transition duration-300">
        <Link to="/home">Home</Link>
      </li>
      <li className="hover:text-[#EEFF25] transition duration-300">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="hover:text-[#EEFF25] transition duration-300">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="hover:text-[#EEFF25] transition duration-300">
        <Link to="/dashboard">Our Menu</Link>
      </li>
      <li className="hover:text-[#EEFF25] transition duration-300">
        <Link to="/dashboard">Our Shop</Link>
      </li>
      <li className="bg-green-600 rounded-full cursor-pointer relative self-start">
        <BsCart2 className="text-4xl p-2" />
        <div className="absolute -top-1 -right-1 badge h-[17px] aspect-square badge-secondary badge-xs p-0">
          <span className="text-[10px]">1</span>
        </div>
      </li>
      <li className="hover:text-[#EEFF25] transition duration-300">
        <button>Sign Out</button>
      </li>
      <li>
        <PiUserCircle className="text-5xl lg:text-4xl" />
      </li>
    </>
  );
  return (
    <div
      className={`navbar px-2.5 md:px-5 lg:px-10 ${
        lessPadding ? "py-3" : "py-10"
      } transition-all duration-300 fixed top-0 left-0 z-10 bg-[rgba(21,21,21,0.50)] text-white`}
    >
      <div className="navbar-start w-full lg:w-1/4 flex-row-reverse lg:flex-row justify-between lg:justify-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="text-xl font-cinzel">
          <span className="text-2xl md:text-3xl font-black">Bistro Boss</span>
          <br />
          <span className="text-xl md:text-2xl font-bold">Restaurant</span>
        </Link>
      </div>
      <div className="navbar-end lg:w-3/4 hidden lg:flex">
        <ul className="gap-4 menu-horizontal items-center text-xl font-extrabold uppercase">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
