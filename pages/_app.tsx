import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/blocks/Header';
import Page from '@/components/wrapper/Page';
import Sidebar from '@/components/blocks/Sidebar';
import { sidebarStore } from '../store/sidebarStore';
import useWindowSize from '@/utilities/windowSize';
import Main from '@/components/wrapper/Main';
import Content from '@/components/wrapper/Content';

export default function App({ Component, pageProps }: AppProps) {
  const sidebarView = sidebarStore((state) => state.sidebar);
  const { width } = useWindowSize();
  const isLargeScreen = width > 1600;

  return (
    <Main>
      <Sidebar sidebarView={sidebarView || isLargeScreen} />
      <Page sidebarView={sidebarView}>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
      </Page>
    </Main>
  );
}
