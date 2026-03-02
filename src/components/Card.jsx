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
  const isExternal = linkHref?.startsWith('http')
  const features = Array.isArray(fonctionnalites) ? fonctionnalites : (fonctionnalites ? [fonctionnalites] : [])

  const hasDetails =
    stackTechnique || features.length > 0 || role || difficultes || linkHref || lienDemo || deploiement

  return (
    <article className="card">
      <div className="card-preview">
        {image && (
          <div className="card-image-wrap">
            <img
              src={image.startsWith('/') ? image.slice(1) : image}
              alt={`Aperçu : ${titre}`}
              className="card-image"
            />
          </div>
        )}
        <h3 className="card-title">{titre}</h3>
        {contexte && (
          <div className="card-block">
            <p className="card-text">{contexte}</p>
            {showIntroArrow && (
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
      </div>

      {hasDetails && (
        <div className="card-details">
          {stackTechnique && (
            <div className="card-block">
              <p className="card-text">{stackTechnique}</p>
            </div>
          )}

          {features.length > 0 && (
            <div className="card-block">
              <ul className="card-list">
                {features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {role && (
            <div className="card-block">
              <p className="card-text">{role}</p>
            </div>
          )}

          {difficultes && (
            <div className="card-block">
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
    </article>
  )
}

export default Card
