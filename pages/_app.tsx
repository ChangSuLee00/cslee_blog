import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/blocks/Navbar';
import Main from '@/components/wrapper/Main';
import Sidebar from '@/components/blocks/Sidebar';
import { sidebarStore } from '../store/sidebarStore';

export default function App({ Component, pageProps }: AppProps) {
  const sidebarView = sidebarStore((state) => state.sidebar);

  return (
    <>
      <Sidebar sidebarView={sidebarView} />
      <Main sidebarView={sidebarView}>
        <Navbar />
        <Component {...pageProps} />
      </Main>
    </>
  );
}
