import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { ImageModal } from '@/components/imageModal'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ImageModal />
      <Analytics />
    </>
  )

}
