import useWindowSize from '@/utilities/windowSize';
import React from 'react';

interface SidebarProps {
  sidebarView: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarView }) => {
  const { width } = useWindowSize();
  const isLargeScreen = width > 1600;
  const sidebarClass = sidebarView ? 'sidebar sidebar-open' : 'sidebar';

  return (
    <>
      {isLargeScreen ? (
        <div
          className={`w-300px h-screen bg-black flex flex-col left-0 overflow-auto z-50`}
        >
          <div className="mt-10">
            <nav className="flex flex-col space-y-1">
              <div className="text-white">hi</div>
            </nav>
          </div>
        </div>
      ) : (
        <div
          className={`${sidebarClass} fixed w-300px h-screen bg-black flex flex-col left-0 overflow-auto z-50`}
        >
          <div className="mt-10">
            <nav className="flex flex-col space-y-1">
              <div className="text-white">hi</div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
