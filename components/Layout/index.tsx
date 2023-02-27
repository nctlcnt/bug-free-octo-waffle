import Footer from './Footer'
import Header from './Header'

export default ({ isHome = false, children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {isHome ? <div className="w-4/5 m-auto">{children}</div> : children}
      <Footer />
    </div>
  )
}
