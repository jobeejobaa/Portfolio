const ETAPES = [
  {
    id: 1,
    periode: '2023 – 2024',
    titre: 'Formation Fullstack – The Hacking Project',
    description:
      'Formation intensive au développement web fullstack : Ruby on Rails, JavaScript, PostgreSQL, Git, travail en équipe agile. Réalisation de projets concrets dont une application e-commerce pour un client réel.',
    tags: ['Ruby on Rails', 'JavaScript', 'PostgreSQL', 'Agile'],
    couleur: 'corail',
  },
  {
    id: 2,
    periode: '2022 – 2023',
    titre: 'Reconversion & autodidaxie',
    description:
      "Découverte de la programmation en autodidacte : HTML, CSS, JavaScript. Réalisation de projets personnels pour tester et consolider mes bases avant d'intégrer une formation structurée.",
    tags: ['HTML', 'CSS', 'JavaScript', 'Autodidacte'],
    couleur: 'jaune',
  },
  {
    id: 3,
    periode: '2018 – 2022',
    titre: 'Études en Linguistique',
    description:
      "Licence et Master en Sciences du Langage. Analyse des structures linguistiques, traduction, communication interculturelle. Une base solide pour comprendre la logique des langages — naturels comme informatiques.",
    tags: ['Linguistique', 'Communication', 'Analyse'],
    couleur: 'menthe',
  },
]

function Parcours() {
  return (
    <section id="parcours" className="parcours">
      <h2 className="section-title">Mon parcours</h2>
      <div className="timeline">
        {ETAPES.map((etape) => (
          <div key={etape.id} className={`timeline-item timeline-item--${etape.couleur}`}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-periode">{etape.periode}</span>
              <h3 className="timeline-titre">{etape.titre}</h3>
              <p className="timeline-desc">{etape.description}</p>
              <div className="timeline-tags">
                {etape.tags.map((tag) => (
                  <span key={tag} className={`tag tag--${etape.couleur}`}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Parcours
