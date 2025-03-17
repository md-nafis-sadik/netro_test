"use client";

import { useState, ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />

      {children}

      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}

    </>
  );
}
