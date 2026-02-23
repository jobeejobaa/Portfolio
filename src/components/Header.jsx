import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">CV</Link>
        <Link to="/mes-projets" className="nav-link">Mes projets</Link>
      </nav>
    </header>
  )
}

export default Header
