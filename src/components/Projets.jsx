import Card from "./Card"

const PROJECTS = [
  {
    id: 1,
    image: "/projets/ecommerce.png",
    titre: "L'Haubergerie de Pontius - E-commerce Fullstack Rails",
    contexte:
      "Projet réalisé dans le cadre de ma certification Fullstack pour un client réel. L'objectif était de concevoir une application e-commerce fonctionnelle avec gestion dynamique des produits et administration sécurisée.",
    stackTechnique: "Ruby on Rails - PostgreSQL - Devise - Stripe - Bootstrap - MVC - Git",
    fonctionnalites: [
      "Catalogue produits dynamique",
      "Paiement en ligne sécurisé via Stripe Checkout",
      "Système de gestion via un panel administrateur sécurisé",
      "Back-office CRUD permettant au client une autonomie totale sur le catalogue",
      "Structure MVC complète",
      "Intégration responsive avec Bootstrap",
    ],
    role: "Développement complet de l'application en Ruby on Rails, incluant : Conception de la structure backend, mise en place du panel administrateur sécurisé, intégration front avec Bootstrap, gestion des modèles et relations en base de données, adaptation aux besoins du client.",
    difficultes:
      "Sécurisation du panel administrateur via Devise : mise en place de l'authentification, gestion des rôles utilisateur/admin et protection des routes côté contrôleur (before_action) pour garantir l'intégrité des données et bloquer tout accès non autorisé.",
    linkHref: "https://github.com/jobeejobaa/template-marketplace",
    linkLabel: "Voir sur GitHub",
    lienDemo: "https://haubergeriedepontius.com/",
    couleur: "corail",
    tags: ["MVC", "Stripe", "Admin sécurisé", "Client réel"],
  },
  {
    id: 2,
    image: "/projets/apnea-flow.png",
    titre: "Apnea Flow - Plateforme fullstack de gestion de cours d'apnée",
    contexte:
      "Projet fullstack développé de A à Z en autonomie. Apnea Flow met en relation des instructeurs certifiés et des élèves souhaitant progresser en apnée, avec deux rôles utilisateurs distincts, une API REST complète et une interface moderne déployée sur Vercel.",
    stackTechnique:
      "React - Vite - Tailwind CSS - Node.js - Express - Prisma - PostgreSQL - JWT",
    fonctionnalites: [
      "Authentification sécurisée JWT (deux rôles : élève / instructeur)",
      "Réservation de cours avec calendrier interactif",
      "Demandes de cours privés avec notifications en temps réel (polling 30s)",
      "Interface bilingue Français / Anglais avec toggle instantané",
      "Upload de photo de profil, design glassmorphism responsive",
    ],
    role: "Conception et développement complet : modélisation BDD (Prisma/PostgreSQL), API REST (Node.js/Express), frontend React avec Context API, déploiement sur Vercel.",
    difficultes:
      "Gérer deux rôles utilisateurs avec vues et permissions différentes, et implémenter le polling temps réel pour les notifications instructeurs.",
    linkHref: "https://github.com/jobeejobaa/ApneaFlow1",
    linkLabel: "Voir sur GitHub",
    lienDemo: "https://apnea-flow1.vercel.app",
    couleur: "menthe",
    tags: ["Auth JWT", "Polling temps réel", "Vercel"],
  },
  {
    id: 3,
    image: "/projets/ocean-katz.png",
    titre: "The Ocean Katz - site vitrine personnel",
    contexte:
      "Projet personnel, indépendant de ma formation. L'objectif est de créer un site vitrine autour de l'univers de la plongée/apnée pour approfondir mes compétences en intégration web et design d'interface.",
    stackTechnique: "HTML - CSS - JavaScript - Ruby on Rails - Docker",
    fonctionnalites: [
      "Type de projet : site vitrine / présentation personnelle",
      "Mise en page responsive pensée pour mobile, tablette et desktop",
      "Travail sur l'univers graphique (typographies, couleurs, visuels liés à l'océan)",
      "Intégration d'interactions front (JavaScript) pour améliorer l'expérience utilisateur",
      "Structure d'application Ruby on Rails avec préparation au déploiement (Docker, Vercel prévu)",
    ],
    role: "Conception de l'interface (maquettage et choix graphiques), intégration HTML/CSS/JavaScript, mise en place de la structure Ruby on Rails et préparation du déploiement via Docker. Projet géré de A à Z en autonomie.",
    difficultes:
      "Le principal défi a été de trouver un bon équilibre entre une identité visuelle forte et une mise en page lisible sur tous les écrans, tout en gardant un code propre et facilement maintenable.",
    linkHref: "https://github.com/jobeejobaa/Ocean-Katz",
    linkLabel: "Voir sur GitHub",
    lienDemo: null,
    couleur: "jaune",
    tags: ["Responsive", "Design custom", "Docker"],
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
