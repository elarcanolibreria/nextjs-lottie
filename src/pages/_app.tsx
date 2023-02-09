import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Script src='https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.9.6/lottie.js' strategy='beforeInteractive' />
    <Component {...pageProps} />
    </> 
  )
}
