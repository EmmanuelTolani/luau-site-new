import '../styles/styles.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
          <link rel="shortcut icon" href="  /logo-image-s.png" />
        </Head>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
