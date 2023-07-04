import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { ImageModal } from '@/components/imageModal'

export default function Document() {
  return (
    <Html lang="fr" data-theme="light">
      <Head>
        <meta name="robots" content="none" />
      </Head>
      <ImageModal />
      <body className='flex flex-col min-h-screen h-auto'>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
