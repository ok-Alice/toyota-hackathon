import type { AppProps } from 'next/app';
import { Provider as JotaiProvider } from 'jotai';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';

import 'styles/globals.scss';
import { Preloader } from 'components/Preloader';

import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet" />
      </Head>
      <JotaiProvider>
        {router.pathname === '/login' ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Preloader />
            <Component {...pageProps} />
          </Layout>
        )}
      </JotaiProvider>
    </>
  );
}
