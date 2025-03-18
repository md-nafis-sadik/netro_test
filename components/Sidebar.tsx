"use client";

import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

interface SidebarProps {
  toggleSidebar: () => void;
}

export default function Sidebar({ toggleSidebar }: SidebarProps) {
  const [theme, setTheme] = useState<string>("light");
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-gray-100", "text-black");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("bg-gray-100", "text-black");
      document.body.classList.remove("bg-gray-900", "text-white");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
  ];

  return (
    <div
      id="ui-div"
      className="md:hidden z-50 dark:bg-gray-950/80 text-gray-900 shadow-soft-3xl w-80 fixed top-0 flex h-full flex-col bg-[#FDFFED]/80 px-2.5 backdrop-blur-2xl duration-200 right-0"
    >
      <div className="relative pt-4">
        <div className="absolute right-[297px]">
          <button
            onClick={toggleSidebar}
            className="inline-block p-1.5 mt-4 font-bold rounded-full bg-white text-gray-800 dark:bg-white dark:text-slate-700 hover:scale-102"
          >
            <RxCross2 />
          </button>
        </div>
      </div>

      <div className="mt-16 space-y-3 text-sm">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`px-2 py-2.5 text-gray-900 ${
              currentPath === item.path ? "border-b-2 border-lime-200" : ""
            }`}
          >
            <Link href={item.path}>{item.label}</Link>
          </div>
        ))}
      </div>

      <div className="p-4">
      </div>
    </div>
  );
}