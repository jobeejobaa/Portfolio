import { useState } from 'react'

function Card({
  image,
  titre,
  contexte,
  showIntroArrow,
  stackTechnique,
  fonctionnalites,
  role,
  difficultes,
  linkHref,
  linkLabel = 'Voir sur GitHub',
  deploiement,
  lienDemo,
}) {
  const [detailsVisible, setDetailsVisible] = useState(false)

  const isExternal = linkHref?.startsWith('http')
  const features = Array.isArray(fonctionnalites) ? fonctionnalites : (fonctionnalites ? [fonctionnalites] : [])

  const hasDetails =
    stackTechnique || features.length > 0 || role || difficultes || linkHref || lienDemo || deploiement

  const toggleDetails = (e) => {
    // Empêche le toggle si l'utilisateur clique sur un lien dans l'overlay
    if (e.target.tagName === 'A') return
    setDetailsVisible((prev) => !prev)
  }

  return (
    <article className="card">
      <div className="card-preview">
        <h3 className="card-title">{titre}</h3>
        {contexte && (
          <div className="card-block">
            <p className="card-text">{contexte}</p>
            {showIntroArrow && !detailsVisible && (
              <div className="card-arrow">
                <span className="card-arrow-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            )}
          </div>
        )}

        {image && (
          <div
            className={`card-image-wrap${detailsVisible ? ' card-image-wrap--open' : ''}`}
            onClick={hasDetails ? toggleDetails : undefined}
            role={hasDetails ? 'button' : undefined}
            aria-expanded={hasDetails ? detailsVisible : undefined}
            aria-label={hasDetails ? `${detailsVisible ? 'Masquer' : 'Afficher'} les détails de ${titre}` : undefined}
            style={hasDetails ? { cursor: 'pointer' } : undefined}
          >
            <img
              src={image}
              alt={`Aperçu : ${titre}`}
              className="card-image"
            />

            {hasDetails && (
              <div className={`card-details${detailsVisible ? ' card-details--visible' : ''}`}>
                {stackTechnique && (
                  <div className="card-block">
                    <p className="card-label">Stack</p>
                    <p className="card-text">{stackTechnique}</p>
                  </div>
                )}

                {features.length > 0 && (
                  <div className="card-block">
                    <p className="card-label">Fonctionnalités</p>
                    <ul className="card-list">
                      {features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {role && (
                  <div className="card-block">
                    <p className="card-label">Mon rôle</p>
                    <p className="card-text">{role}</p>
                  </div>
                )}

                {difficultes && (
                  <div className="card-block">
                    <p className="card-label">Difficultés</p>
                    <p className="card-text">{difficultes}</p>
                  </div>
                )}

                <div className="card-links">
                  {linkHref && (
                    <a
                      href={linkHref}
                      className="card-link"
                      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {linkLabel}
                    </a>
                  )}
                  {lienDemo && (
                    <a
                      href={lienDemo}
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le site
                    </a>
                  )}
                  {deploiement && !lienDemo && (
                    <span className="card-deploiement">Déploiement prévu : {deploiement}</span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default Card
