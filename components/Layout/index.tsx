import Footer from './Footer'
import Header from './Header'

export default ({ isHome = false, children, bgColor = '' }) => {
  return (
    <div className={'flex flex-col ' + bgColor}>
      <Header />
      <div className={'w-4/5 m-auto '}>{children}</div>
      <Footer />
    </div>
  )
}
