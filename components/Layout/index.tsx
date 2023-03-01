import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default ({ isFull = false, children, bgColor = '' }) => {
  return (
    <div className={'flex flex-col ' + bgColor}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/images/profile.gif" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="My projects"></meta>
      </Head>
      <Header />
      <div className={isFull ? '' : 'm-auto w-4/5'}>{children}</div>
      <Footer />
    </div>
  )
}
