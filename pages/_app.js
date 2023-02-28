import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  // The default export of _app.js is a top-level React component that wraps all the pages in your application.
  // TODO: Learn more about _app.js file. (https://nextjs.org/docs/advanced-features/custom-app)
  return <Component {...pageProps} />
}
