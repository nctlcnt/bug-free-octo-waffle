import '../styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  const { isHome } = pageProps
  return (
    <Layout bgColor={pageProps.bgColor} isHome={isHome}>
      <Component {...pageProps} />
    </Layout>
  )
}
