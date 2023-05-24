import React from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <div className="flex w-full">{children}</div>;
};

export default Main;
