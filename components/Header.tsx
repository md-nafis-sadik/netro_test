"use client";

import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [currentPath, setCurrentPath] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
  ];

  return (
    <nav
      className={`flex justify-center items-center sticky top-0 w-full z-40 transition-colors duration-300 ${
        isScrolled ? "bg-white bg-opacity-80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
        <div className="flex justify-between items-center max-w-[1200px] w-full py-2 px-4 lg:px-12">
      <div className="flex">
        <span className="cursor-pointer my-auto p-2 text-xl flex items-center">
          <img src="/logo.jpg" alt="logo" className="w-28 lg:w-36" />
        </span>
      </div>

      <div className="hidden md:flex text-sm">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`px-6 py-2.5 text-gray-600 flex items-center justify-center rounded-md ${
              currentPath === item.path ? " text-black font-semibold" : ""
            }`}
          >
            <div>
            <Link href={item.path} className={`hover:text-black w-[100%] ${
              currentPath === item.path ? " text-black font-semibold" : ""
            }`}>
              {item.label}
            </Link>
            {currentPath === item.path && <div className="w-[100%] flex justify-center mt-1.5"><GoDotFill className="text-black"/></div>}
          </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <button className="bg-[#F0FF72] text-sm font-semibold px-5 py-2.5 rounded-3xl transition transform hover:scale-105 hover:shadow-lg">
          Contact us
        </button>
      </div>

      <div className="flex text-center items-center md:hidden">
        <span
          id="ui-setting"
          onClick={toggleSidebar}
          className="cursor-pointer p-2 text-xl my-auto"
        >
          <FaBars className="text-gray-900 dark:text-white" />
        </span>
      </div>
      </div>
    </nav>
  );
};

export default Header;