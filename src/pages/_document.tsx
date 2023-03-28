import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from './components/header'
import { Footer } from './components/footer'

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
