import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
      {/* Formes organiques arrière-plan */}
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="blob blob-3" aria-hidden="true" />
      <div className="blob blob-4" aria-hidden="true" />

      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
