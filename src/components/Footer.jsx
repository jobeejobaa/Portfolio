import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <Link to="/mentions-legales" className="footer-link">Mentions légales</Link>
    </footer>
  )
}

export default Footer
