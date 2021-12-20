import '../styles/globals.css'
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg" href="/ironclad/head-blue.svg"></link>
    </Head>
    <NextNProgress color="var(--b-bright)" options={{ showSpinner: false }}/>
    <Component {...pageProps} />
  </>)
}

export default MyApp
