import Layout from './components/Layout'
import Hero from './components/Hero'
import Parcours from './components/Parcours'
import Projets from './components/Projets'
import Contact from './components/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <Parcours />
      <Projets />
      <Contact />
    </Layout>
  )
}

export default App
