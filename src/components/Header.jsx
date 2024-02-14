import React, { useState, useEffect, useRef } from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsPinned(window.scrollY > headerRef.current.clientHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky  top-[-1px] right-0 left-0 flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 transition-all duration-300 ${
        isPinned ? "bg-white shadow-lg" : ""
      }`}
    >
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
          AndresGarciaLv<span className="text-primary text-5xl">.</span>{" "}
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a href="#home" className="hover:bg-primary hover:text-white p-2 rounded-md">
          Home
        </a>
        <a href="#tech" className="hover:bg-primary hover:text-white p-2 rounded-md">
        technologies
        </a>
        <a href="#aboutUs" className="hover:bg-primary hover:text-white p-2 rounded-md">
          Projects
        </a>
       
      {/*   <a href="#services" className="">
          Services
        </a>
        <a href="#aboutUs" className="">
          Products
        </a> */}
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
