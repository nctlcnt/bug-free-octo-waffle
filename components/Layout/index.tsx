import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default ({ isHome = false, children, bgColor = '' }) => {
  return (
    <>
      {isHome ? (
        <>{children}</>
      ) : (
        <div className={'flex flex-col flex-grow h-full' + bgColor}>
          <Head>
            <title>Blog</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta name="description" content="My projects"></meta>
          </Head>
          <Header />
          <div className={'m-auto w-4/5'}>{children}</div>
          <Footer />
        </div>
      )}
    </>
  )
}
