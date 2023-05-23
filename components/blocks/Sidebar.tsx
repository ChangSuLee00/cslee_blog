import Link from 'next/link';
import React from 'react';

interface SidebarProps {
  sidebarView: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarView }) => {
  const sidebarClass = sidebarView ? 'sidebar sidebar-open' : 'sidebar';
  return (
    <div
      className={`${sidebarClass} w-300px h-screen bg-black flex flex-col fixed left-0 overflow-auto z-50`}
    >
      <div className="mt-10">
        <nav className="flex flex-col space-y-1">
          <div className="text-white">hi</div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
