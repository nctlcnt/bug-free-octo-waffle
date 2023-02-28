import Footer from './Footer'
import Header from './Header'

export default ({ isHome = false, children, className = '' }) => {
  return (
    <div className={'flex flex-col ' + className}>
      <Header />
      {isHome ? <div className="w-4/5 m-auto">{children}</div> : children}
      <Footer />
    </div>
  )
}
