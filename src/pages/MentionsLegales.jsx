import { Link } from 'react-router-dom'

function MentionsLegales() {
  return (
    <div className="legal">
      <Link to="/" className="back">← Retour au portfolio</Link>
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Johanna Delfieux Watts<br />
        Développeuse Frontend<br />
        Paris, France
      </p>

      <h2>Contact</h2>
      <p>
        E-mail : <a href="mailto:johannadelfieux@gmail.com">johannadelfieux@gmail.com</a><br />
      </p>

      <h2>Hébergement</h2>
      <p>
        Ce site est un portfolio personnel. En cas d'hébergement par un tiers, les informations d'hébergement seront indiquées ici.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble du contenu de ce site (textes, mise en page, structure) est protégé par le droit d'auteur. Toute reproduction non autorisée est interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Aucune donnée personnelle n'est collectée via ce site à l'exception des informations que vous choisissez d'envoyer par e-mail ou via un formulaire de contact.
      </p>
    </div>
  )
}

export default MentionsLegales
