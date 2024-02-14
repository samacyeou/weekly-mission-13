import '@/styles/index.css';
import '@/styles/reset.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="modal" />
      <Component {...pageProps} />
    </>
  );
}