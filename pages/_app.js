import '../styles/globals.css'
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [dark, setMode] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
    let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(matched){
      setMode(true)
    }
  }, []);
  return (<>
    <Head>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ironclad Web Development" />
      <meta property="og:description" content="Conner Ow (IroncladDev) is a Teen Fullstack web developer who has been coding for over five years.  He is currently trying to build up his portfolio and dig deeper into the world of freelancing." />
      <meta property="og:image" content="/homepage.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="800" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="copyright" content="2021" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg" href={dark ? "/ironclad/head-white.svg" : "/ironclad/head-blue.svg"}></link>
    </Head>
    <noscript><h1>Javascript isn&apos;t allowed!?  Can you imagine??</h1><br/><br/>Please enable javascript in your browser to experience the true awesomeness of this site.</noscript>
    <NextNProgress color="var(--b-bright)" options={{ showSpinner: false }} />
    <Component {...pageProps} />
  </>)
}

export default MyApp
