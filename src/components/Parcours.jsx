const ETAPES = [
  {
    id: 1,
    emoji: '🗣️',
    titre: 'Linguiste',
    sous: 'LEA Anglais / Espagnol',
    couleur: 'menthe',
  },
  {
    id: 2,
    emoji: '🤝',
    titre: 'Commerciale',
    sous: '10 ans — Relation client',
    couleur: 'corail',
  },
  {
    id: 3,
    emoji: '💻',
    titre: 'Développeuse',
    sous: 'Fullstack — 2025/2026',
    couleur: 'jaune',
  },
]

function Parcours() {
  return (
    <section id="parcours" className="parcours">
      <h2 className="section-title">Mon parcours</h2>
      <p className="parcours-sous-titre">
        Trois étapes, une logique : comprendre, créer, connecter
      </p>

      <div className="parcours-timeline">
        <div className="parcours-ligne" aria-hidden="true" />
        {ETAPES.map((etape) => (
          <div key={etape.id} className="parcours-etape">
            <div className={`parcours-icone parcours-icone--${etape.couleur}`}>
              <span aria-hidden="true">{etape.emoji}</span>
            </div>
            <strong className="parcours-titre">{etape.titre}</strong>
            <span className="parcours-sous">{etape.sous}</span>
          </div>
        ))}
      </div>

      <p className="parcours-citation">
        "Coder, c'est apprendre un nouveau langage — et ça, c'est mon terrain."
      </p>
    </section>
  )
}

export default Parcours
