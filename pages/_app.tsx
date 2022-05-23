import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import AnimationContextProvider from '../context/animationContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimationContextProvider>
  );
}

export default MyApp;
