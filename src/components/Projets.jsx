import Card from './Card'

const PROJECTS = [
  {
    id: 1,
    image: ‘/projets/ecommerce.png’,
    titre: ‘Application e-commerce – Projet Fullstack Rails’,
    contexte:
      "Projet réalisé dans le cadre de ma certification Fullstack pour un client réel. L’objectif était de concevoir une application e-commerce fonctionnelle avec gestion dynamique des produits et administration sécurisée.",
    stackTechnique: ‘Ruby on Rails – PostgreSQL – Bootstrap – MVC – Git’,
    fonctionnalites: [
      ‘Catalogue produits dynamique’,
      ‘Système de gestion via un panel administrateur sécurisé’,
      ‘Modification des contenus sans intervention technique’,
      ‘Structure MVC complète’,
      ‘Intégration responsive avec Bootstrap’,
    ],
    role:
      "Développement complet de l’application en Ruby on Rails, incluant : Conception de la structure backend, mise en place du panel administrateur sécurisé, intégration front avec Bootstrap, gestion des modèles et relations en base de données, adaptation aux besoins du client.",
    difficultes:
      "La principale difficulté a été la sécurisation et la gestion des droits d’accès au panel administrateur. J’ai travaillé sur la structuration des rôles et la protection des routes afin d’assurer l’intégrité des données.",
    linkHref: ‘https://github.com/THP-Lab/template-marketplace’,
    linkLabel: ‘Voir sur GitHub’,
    lienDemo: ‘https://haubergeriedepontius.com/’,
    couleur: ‘corail’,
    tags: [‘MVC’, ‘Admin sécurisé’, ‘Client réel’],
  },
  {
    id: 2,
    image: ‘/projets/ocean-katz.png’,
    titre: ‘The Ocean Katz – site vitrine personnel’,
    contexte:
      "Projet personnel, indépendant de ma formation. L’objectif est de créer un site vitrine autour de l’univers de la plongée/apnée pour approfondir mes compétences en intégration web et design d’interface.",
    stackTechnique: ‘HTML – CSS – JavaScript – Ruby on Rails – Docker’,
    fonctionnalites: [
      ‘Type de projet : site vitrine / présentation personnelle’,
      ‘Mise en page responsive pensée pour mobile, tablette et desktop’,
      "Travail sur l’univers graphique (typographies, couleurs, visuels liés à l’océan)",
      "Intégration d’interactions front (JavaScript) pour améliorer l’expérience utilisateur",
      "Structure d’application Ruby on Rails avec préparation au déploiement (Docker, Vercel prévu)",
    ],
    role:
      "Conception de l’interface (maquettage et choix graphiques), intégration HTML/CSS/JavaScript, mise en place de la structure Ruby on Rails et préparation du déploiement via Docker. Projet géré de A à Z en autonomie.",
    difficultes:
      "Le principal défi a été de trouver un bon équilibre entre une identité visuelle forte et une mise en page lisible sur tous les écrans, tout en gardant un code propre et facilement maintenable.",
    linkHref: ‘https://github.com/jobeejobaa/Ocean-Katz’,
    linkLabel: ‘Voir sur GitHub’,
    lienDemo: null,
    couleur: ‘jaune’,
    tags: [‘Responsive’, ‘Design custom’, ‘Docker’],
  },
  {
    id: 3,
    image: ‘/projets/apnea-flow.png’,
    titre: "Apnea Flow – Plateforme fullstack de gestion de cours d’apnée",
    contexte:
      "Projet fullstack développé de A à Z en autonomie. Apnea Flow met en relation des instructeurs certifiés et des élèves souhaitant progresser en apnée, avec deux rôles utilisateurs distincts, une API REST complète et une interface moderne déployée sur Railway.",
    stackTechnique: ‘React – Vite – Tailwind CSS – Node.js – Express – Prisma – PostgreSQL – JWT’,
    fonctionnalites: [
      ‘Authentification sécurisée JWT (deux rôles : élève / instructeur)’,
      ‘Réservation de cours avec calendrier interactif’,
      ‘Demandes de cours privés avec notifications en temps réel (polling 30s)’,
      ‘Interface bilingue Français / Anglais avec toggle instantané’,
      ‘Upload de photo de profil, design glassmorphism responsive’,
    ],
    role:
      "Conception et développement complet : modélisation BDD (Prisma/PostgreSQL), API REST (Node.js/Express), frontend React avec Context API, déploiement sur Railway.",
    difficultes:
      "Gérer deux rôles utilisateurs avec vues et permissions différentes, et implémenter le polling temps réel pour les notifications instructeurs.",
    linkHref: ‘https://github.com/jobeejobaa/ApneaFlow1’,
    linkLabel: ‘Voir sur GitHub’,
    lienDemo: ‘https://apneaflow1-production.up.railway.app’,
    couleur: ‘menthe’,
    tags: [‘Auth JWT’, ‘Polling temps réel’, ‘Railway’],
  },
]

function Projets() {
  return (
    <section id="projets" className="projets">
      <h2 className="section-title">Mes projets</h2>
      {PROJECTS.map((project) => (
        <Card
          key={project.id}
          image={project.image}
          titre={project.titre}
          contexte={project.contexte}
          showIntroArrow={true}
          stackTechnique={project.stackTechnique}
          fonctionnalites={project.fonctionnalites}
          role={project.role}
          difficultes={project.difficultes}
          linkHref={project.linkHref}
          linkLabel={project.linkLabel}
          deploiement={project.deploiement}
          lienDemo={project.lienDemo}
          couleur={project.couleur}
          tags={project.tags}
        />
      ))}
    </section>
  )
}

export default Projets
