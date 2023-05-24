import React from 'react';
import Link from 'next/link';
import { sidebarStore } from '../../store/sidebarStore';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const trueSidebar = sidebarStore((state) => state.trueSidebar);
  return (
    <header className="navbar-height bg-zinc-900 opacity-95 fixed w-full">
      <div className="ml-5 mr-5 py-2">
        <div className="flex items-center justify-between">
          <button className="text-white text-lg" onClick={trueSidebar}>
            =
          </button>
          <div className="text-lg">
            <text className="text-gray-500">&lt; </text>
            <text className="text-blue-500">cslee</text>
            <text className="text-white">.</text>
            <text className="text-blue-300">devlog</text>
            <text className="text-gray-500"> &gt;</text>
          </div>
          <Link
            href="/about"
            className="text-yellow-400 text-lg px-4 py-2 rounded-lg"
          >
            about()
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
