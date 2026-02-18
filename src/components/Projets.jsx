import Card from './Card'

const PROJECTS = [
  {
    id: 1,
    titre: 'Application e-commerce – Projet Fullstack Rails',
    contexte:
      "Projet réalisé dans le cadre de ma certification Fullstack pour un client réel. L'objectif était de concevoir une application e-commerce fonctionnelle avec gestion dynamique des produits et administration sécurisée.",
    stackTechnique: 'Ruby on Rails – PostgreSQL – Bootstrap – MVC – Git',
    fonctionnalites: [
      'Catalogue produits dynamique',
      'Système de gestion via un panel administrateur sécurisé',
      'Modification des contenus sans intervention technique',
      'Structure MVC complète',
      'Intégration responsive avec Bootstrap',
    ],
    role:
      "Développement complet de l'application en Ruby on Rails, incluant : Conception de la structure backend, mise en place du panel administrateur sécurisé, intégration front avec Bootstrap, gestion des modèles et relations en base de données, adaptation aux besoins du client.",
    difficultes:
      "La principale difficulté a été la sécurisation et la gestion des droits d'accès au panel administrateur. J'ai travaillé sur la structuration des rôles et la protection des routes afin d'assurer l'intégrité des données.",
    linkHref: 'https://github.com/THP-Lab/template-marketplace',
    linkLabel: 'Voir sur GitHub',
  },
  {
    id: 2,
    titre: 'Bloc-note',
    contexte: 'Application de prise de notes réalisée en React. Projet personnel pour pratiquer les composants et la gestion d\'état.',
    stackTechnique: 'React – JavaScript (ES6) – Git',
    fonctionnalites: [
      'Création et édition de notes',
      'Composants React réutilisables',
      'Gestion du state (hooks)',
    ],
    role: 'Développement frontend complet de l\'application React.',
    difficultes: null,
    linkHref: 'https://github.com/jobeejobaa/Bloc-note',
    linkLabel: 'Voir sur GitHub',
  },
  {
    id: 3,
    titre: 'Ocean Katz',
    contexte: 'Site de présentation personnel. Projet pour mettre en pratique l\'intégration et le design web.',
    stackTechnique: 'HTML – CSS – JavaScript (ou stack du projet)',
    fonctionnalites: ['Site vitrine', 'Mise en page responsive'],
    role: 'Conception et développement du site de présentation.',
    difficultes: null,
    linkHref: 'https://github.com/jobeejobaa/Ocean-Katz',
    linkLabel: 'Voir sur GitHub',
    deploiement: 'Vercel', // à déployer ; quand c’est en ligne, ajoute lienDemo: 'https://...'
    lienDemo: null, // ex. 'https://ocean-katz.vercel.app' une fois déployé
  },
]

function Projets() {
  return (
    <section id="projets" className="projets">
      <h2 className="section-title">Mes projets</h2>
      <p className="projets-intro">
        Vous pourrez trouver ci-dessous la liste de mes projets. J&apos;en ai réalisé certains lors de ma formation chez The Hacking Project, et d&apos;autres sont des projets personnels.
      </p>
      {PROJECTS.map((project) => (
        <Card
          key={project.id}
          titre={project.titre}
          contexte={project.contexte}
          stackTechnique={project.stackTechnique}
          fonctionnalites={project.fonctionnalites}
          role={project.role}
          difficultes={project.difficultes}
          linkHref={project.linkHref}
          linkLabel={project.linkLabel}
          deploiement={project.deploiement}
          lienDemo={project.lienDemo}
        />
      ))}
    </section>
  )
}

export default Projets
