import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import MesProjets from './pages/MesProjets'
import MentionsLegales from './pages/MentionsLegales'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mes-projets" element={<MesProjets />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Route>
    </Routes>
  )
}

export default App
