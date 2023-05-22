import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Main from '@/components/wrapper/Main';
import Navbar from '@/components/blocks/Navbar';
import Page from '@/components/wrapper/Page';
import Sidebar from '@/components/blocks/Sidebar';
import { sidebarStore } from '../store/sidebarStore';

export default function App({ Component, pageProps }: AppProps) {
  const sidebarView = sidebarStore((state) => state.sidebar);

  return (
    <>
      <Main>
        <Sidebar sidebarView={sidebarView} />
        <Page sidebarView={sidebarView}>
          <Navbar />
          <Component {...pageProps} />
        </Page>
      </Main>
    </>
  );
}
