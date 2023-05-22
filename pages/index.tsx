import React from 'react';
import Meta from '@/components/wrapper/Meta';
import Content from '@/components/wrapper/Content';
import { sidebarStore } from '@/store/sidebarStore';

const Home: React.FC = () => {
  const falseSidebar = sidebarStore((state) => state.falseSidebar);
  const metaTags = {
    title: 'Main',
    description: 'Test',
  };

  return (
    
    <>
      <Meta props={metaTags} />
      <Content onClick={falseSidebar} >
        <div>hi</div>
      </Content>
    </>
  );
};

export default Home;
