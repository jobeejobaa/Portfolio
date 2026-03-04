function Footer() {
  return (
    <footer className="footer">
      <div className="footer-legal-wrapper">
        <a href="#mentions-legales" className="footer-link">
          Mentions légales
        </a>
        <div id="mentions-legales" className="legal-popup" aria-hidden="true">
          <h2>Mentions légales</h2>

          <h3>Éditeur du site</h3>
          <p>
            Johanna Delfieux Watts<br />
            Développeuse Frontend Junior<br />
            Paris, France
          </p>

          <h3>Contact</h3>
          <p>
            E-mail :{' '}
            <a href="mailto:johannadelfieux@gmail.com">
              johannadelfieux@gmail.com
            </a>
          </p>

          <h3>Hébergement</h3>
          <p>
            Ce site est un portfolio personnel. En cas d&apos;hébergement par un
            tiers, les informations d&apos;hébergement seront indiquées ici.
          </p>

          <h3>Propriété intellectuelle</h3>
          <p>
            L&apos;ensemble du contenu de ce site (textes, mise en page,
            structure) est protégé par le droit d&apos;auteur. Toute
            reproduction non autorisée est interdite.
          </p>

          <h3>Données personnelles</h3>
          <p>
            Aucune donnée personnelle n&apos;est collectée via ce site à
            l&apos;exception des informations que vous choisissez d&apos;envoyer
            par e-mail ou via un formulaire de contact.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
