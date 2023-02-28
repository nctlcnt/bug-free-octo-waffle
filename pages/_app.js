import '../styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  // The default export of _app.js is a top-level React component that wraps all the pages in your application.
  // TODO: Learn more about _app.js file. (https://nextjs.org/docs/advanced-features/custom-app)
  return (
    <Layout bgColor={pageProps.bgColor}>
      <Component {...pageProps} />
    </Layout>
  )
}
