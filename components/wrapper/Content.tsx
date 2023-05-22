import React from 'react';

interface ContentProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Content: React.FC<ContentProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex-1 flex justify-center items-center bg-zinc-800 w-full h-screen"
    >
      <div className="py-10 px-10">{children}</div>
    </div>
  );
};

export default Content;
