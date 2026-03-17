import { useState, useRef } from 'react'

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
  const [detailsOpen, setDetailsOpen] = useState(false)

  // Distingue tap vs scroll sur mobile
  const touchStartY = useRef(null)
  const didScroll = useRef(false)

  const isExternal = linkHref?.startsWith('http')
  const features = Array.isArray(fonctionnalites)
    ? fonctionnalites
    : fonctionnalites
    ? [fonctionnalites]
    : []

  const hasDetails =
    stackTechnique || features.length > 0 || role || difficultes || linkHref || lienDemo || deploiement

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY
    didScroll.current = false
  }

  const handleTouchMove = (e) => {
    if (touchStartY.current !== null) {
      if (Math.abs(e.touches[0].clientY - touchStartY.current) > 8) {
        didScroll.current = true
      }
    }
  }

  // Sur mobile : tap sur la flèche = ouvre/ferme les détails
  const handleArrowTap = (e) => {
    e.stopPropagation()
    if (didScroll.current) return
    setDetailsOpen((prev) => !prev)
  }

  return (
    <article className={`card${detailsOpen ? ' card--open' : ''}`}>
      <h3 className="card-title">{titre}</h3>

      {contexte && <p className="card-text card-contexte">{contexte}</p>}

      {image && (
        <div className="card-image-wrap">
          <img src={image} alt={`Aperçu : ${titre}`} className="card-image" />
        </div>
      )}

      {hasDetails && showIntroArrow && (
        <div
          className="card-arrow"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleArrowTap}
          aria-label={detailsOpen ? 'Masquer les détails' : 'Voir les détails'}
        >
          <span className={`card-arrow-icon${detailsOpen ? ' card-arrow-icon--up' : ''}`} aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

      {/* Détails : visibles au hover (CSS) ou au tap (classe JS) */}
      {hasDetails && (
        <div className={`card-details-wrap${detailsOpen ? ' card-details-wrap--open' : ''}`}>
          <div className="card-details-inner">
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
                <a href={lienDemo} className="card-link" target="_blank" rel="noopener noreferrer">
                  Voir le site
                </a>
              )}
              {deploiement && !lienDemo && (
                <span className="card-deploiement">Déploiement prévu : {deploiement}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export default Card
