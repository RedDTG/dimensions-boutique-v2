import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr" data-theme="light">
      <Head>
        <meta name="robots" content="none" />
      </Head>
      <body data-theme="dark" className='flex flex-col min-h-screen h-auto'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
