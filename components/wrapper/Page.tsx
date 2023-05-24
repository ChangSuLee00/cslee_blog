import { sidebarStore } from '@/store/sidebarStore';
import React from 'react';

interface PageProps {
  sidebarView: boolean;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children, sidebarView }) => {
  const falseSidebar = sidebarStore((state) => state.falseSidebar);
  return (
    <div className="w-full relative">
      {children}
      {sidebarView && (
        <div
          className="absolute top-0 left-0 w-full h-full backdrop-filter backdrop-blur-xs"
          onClick={falseSidebar}
        ></div>
      )}
    </div>
  );
};

export default Page;
