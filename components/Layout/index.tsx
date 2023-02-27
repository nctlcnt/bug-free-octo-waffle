import Footer from './Footer'
import Header from './Header'
import Main from './Main'

export default ({ left, right, isHome }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Main left={left} right={right} isHome={isHome} />
      <Footer />
    </div>
  )
}
