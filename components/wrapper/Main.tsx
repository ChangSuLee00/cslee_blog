import React from 'react';

interface PageProps {
  sidebarView: boolean;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children, sidebarView }) => {
  return (
    <>
      {children}
      {sidebarView && (
        <div className="absolute top-0 left-0 w-full h-full backdrop-filter backdrop-blur-xs pointer-events-none"></div>
      )}
    </>
  );
};

export default Page;
