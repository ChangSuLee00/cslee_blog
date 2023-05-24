import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="flex-1 flex justify-center items-center bg-zinc-800 w-full h-screen">
      <div className="py-10 px-10">{children}</div>
    </div>
  );
};

export default Content;
