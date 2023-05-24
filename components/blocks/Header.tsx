import React from 'react';
import Link from 'next/link';
import { sidebarStore } from '../../store/sidebarStore';
import useWindowSize from '@/utilities/windowSize';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const trueSidebar = sidebarStore((state) => state.trueSidebar);
  const { width } = useWindowSize();
  const isLargeScreen = width > 1600;

  return (
    <header className="header-height bg-zinc-900 opacity-95 w-full absolute overflow-hidden">
      <div className="ml-5 mr-5 py-2">
        <div className="flex items-center justify-between">
          {!isLargeScreen ? (
            <button className="text-white text-lg" onClick={trueSidebar}>
              =
            </button>
          ) : (
            <div></div>
          )}
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

export default Header;
