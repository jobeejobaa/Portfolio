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
    lienDemo: "https://haubergeriedepontius.com/",
    couleur: "corail",
    tags: ["MVC", "Stripe", "Admin sécurisé", "Client réel"],
  },
  {
    id: 2,
    image: "/projets/dune-carle-cros.png",
    titre: "Dune Carle Cros - Site portfolio artiste",
    contexte:
      "Site portfolio web réalisé pour une cliente réelle, l'artiste muraliste Dune Carle Cros (fresques monumentales, vitrines de prestige, graffiti). L'objectif était de mettre en valeur ses œuvres et ses collaborations avec des marques prestigieuses (Grand Seiko Place Vendôme, Tasaki Londres/Monaco, Kenzo, Casa Barbara...).",
    stackTechnique: "HTML - CSS - Vercel",
    fonctionnalites: [
      "Galerie d'œuvres organisée par catégories (Murs & Fresques, Vitrines, Expos, Festivals, Atelier, Custom)",
      "Navigation par sections : Œuvres, Artiste, Clients, Contact",
      "Section biographie avec chiffres clés (15+ années d'expérience, 100+ projets)",
      "Section références clients (Grand Seiko, Tasaki, Kenzo, Casa Barbara, Maison Lepage, Franck Provost...)",
      "Lien direct Instagram et contact mail/téléphone",
      "Mise en page responsive mobile / tablette / desktop",
    ],
    role: "Conception et intégration complète du site : maquettage, choix graphiques, intégration HTML/CSS, déploiement sur Vercel. Projet géré de A à Z en autonomie, en itération directe avec la cliente.",
    difficultes:
      "Organiser une grande quantité d'images (centaines d'œuvres réparties en sous-catégories) avec une navigation fluide et une UX cohérente, tout en gardant un code propre et maintenable sans framework.",
    lienDemo: "https://dune-portfolio.vercel.app/",
    couleur: "noir",
    tags: ["Client réel", "Galerie", "Vercel"],
  },
  {
    id: 3,
    image: "/projets/apnea-flow.png",
    titre: "Apnea Flow - Plateforme fullstack de gestion de cours d'apnée",
    contexte:
      "Projet fullstack développé de A à Z en autonomie. Apnea Flow met en relation des instructeurs certifiés et des élèves souhaitant progresser en apnée, avec deux rôles utilisateurs distincts, une API REST complète, un frontend déployé sur Vercel et un backend hébergé sur Railway.",
    stackTechnique:
      "React - Vite - Tailwind CSS - Node.js - Express - Prisma - PostgreSQL - JWT - Vercel - Railway",
    fonctionnalites: [
      "Authentification sécurisée JWT (deux rôles : élève / instructeur)",
      "Réservation de cours avec calendrier interactif",
      "Demandes de cours privés avec notifications en temps réel (polling 30s)",
      "Interface bilingue Français / Anglais avec toggle instantané",
      "Upload de photo de profil, design glassmorphism responsive",
    ],
    role: "Conception et développement complet : modélisation BDD (Prisma/PostgreSQL), API REST (Node.js/Express), frontend React avec Context API, déploiement frontend sur Vercel et backend sur Railway.",
    difficultes:
      "Gérer deux rôles utilisateurs avec vues et permissions différentes, et implémenter le polling temps réel pour les notifications instructeurs.",
    linkHref: "https://github.com/jobeejobaa/ApneaFlow1",
    lienDemo: "https://apnea-flow1.vercel.app",
    couleur: "menthe",
    tags: ["Auth JWT", "Polling temps réel", "Vercel + Railway"],
  },
  {
    id: 4,
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
    couleur: "jaune",
    tags: ["Responsive", "Design custom", "Docker"],
  },
  {
    id: 5,
    image: "/projets/jeu-10000-thumb.png",
    titre: "Le 10 000 - jeu de dés multijoueur en React",
    contexte:
      "Projet personnel : réinvention numérique du jeu de dés du 10 000. L'app détecte le mouvement du téléphone pour lancer les dés (comme si on les secouait vraiment), propose un mode feuille de score pour jouer avec de vrais dés, et un mode en ligne multijoueur temps réel via Firebase.",
    stackTechnique: "React 19 - Vite - Firebase Realtime Database - Vitest - Vite PWA - Vercel",
    fonctionnalites: [
      "Lancer de dés par détection de mouvement (Device Motion API, avec gestion de la permission iOS)",
      "3 modes de jeu : local sur un téléphone, feuille de score avec de vrais dés, ou partie en ligne multijoueur (Firebase)",
      "Moteur de scoring complet du 10 000 (brelans, suites, dés isolés, hot dice) entièrement testé en unitaire (Vitest)",
      "Bot IA jouant avec une vraie stratégie (seuils adaptatifs selon les dés restants et le score)",
      "Gestion des farkles consécutifs avec pénalité triple farkle, historique des parties, reprise de partie sauvegardée",
    ],
    role: "Conception et développement complet en autonomie : logique de jeu pure et testée (scoring, état de partie, bot), hook custom de détection de mouvement, synchronisation temps réel Firebase pour le mode en ligne, déploiement Vercel.",
    difficultes:
      "Modéliser une logique de scoring pure et testable (nombreuses combinaisons de dés, hot dice, farkles) tout en la partageant à l'identique entre le mode solo/local et le mode multijoueur Firebase, sans dupliquer les règles.",
    linkHref: "https://github.com/jobeejobaa/10000",
    lienDemo: "https://10000-tau.vercel.app/",
    couleur: "corail",
    tags: ["React", "Firebase", "Multijoueur", "Device Motion", "Tests unitaires"],
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
          lienDemo={project.lienDemo}
          couleur={project.couleur}
          tags={project.tags}
        />
      ))}
    </section>
  )
}

export default Projets
