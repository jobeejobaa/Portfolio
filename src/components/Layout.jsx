import Header from './Header'
import Footer from './Footer'
import Background from './Background'

function Layout({ children }) {
  return (
    <>
      {/* Fond vagues turquoise + corail */}
      <Background />

      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
