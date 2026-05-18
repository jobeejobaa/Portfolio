function Background() {
  return (
    <div className="bg-decoration" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dégradé de base : du rose pastel (haut-droit) au violet profond (bas-gauche) */}
          <linearGradient id="grad-base" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EAAFC8" />
            <stop offset="45%" stopColor="#D5A0CC" />
            <stop offset="55%" stopColor="#A887C4" />
            <stop offset="100%" stopColor="#654EA3" />
          </linearGradient>

          {/* Vagues rose pastel */}
          <linearGradient id="grad-pink" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5C8DC" />
            <stop offset="100%" stopColor="#EAAFC8" />
          </linearGradient>

          {/* Vagues violet profond */}
          <linearGradient id="grad-purple" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#654EA3" />
            <stop offset="100%" stopColor="#8E72BC" />
          </linearGradient>
        </defs>

        {/* Fond plein : transition douce rose → violet */}
        <rect width="1440" height="900" fill="url(#grad-base)" />

        {/* Vagues rose décoratives (haut-droit) */}
        <path
          d="M1440,0 L1440,360 C1180,330 980,440 720,370 C460,305 220,370 0,310 L0,0 Z"
          fill="url(#grad-pink)"
          opacity="0.55"
        />
        <path
          d="M1440,220 C1200,300 980,270 760,350 C540,425 280,400 0,480 L0,300 C260,250 540,270 780,210 C1000,155 1240,180 1440,120 Z"
          fill="url(#grad-pink)"
          opacity="0.35"
        />

        {/* Vagues violet décoratives (bas-gauche) */}
        <path
          d="M0,900 L0,540 C260,580 500,460 780,540 C1020,610 1240,550 1440,600 L1440,900 Z"
          fill="url(#grad-purple)"
          opacity="0.55"
        />
        <path
          d="M0,720 C220,640 480,660 720,580 C940,510 1220,540 1440,450 L1440,650 C1220,700 980,680 760,740 C540,790 240,780 0,800 Z"
          fill="url(#grad-purple)"
          opacity="0.35"
        />

        {/* Vagues centrales — chevauchement doux pour fondre les deux zones */}
        <path
          d="M0,460 C300,420 600,500 900,440 C1140,395 1300,420 1440,400 L1440,500 C1300,520 1100,490 880,540 C620,600 320,560 0,580 Z"
          fill="url(#grad-pink)"
          opacity="0.18"
        />
        <path
          d="M0,500 C320,470 620,540 920,490 C1160,450 1320,470 1440,455 L1440,560 C1300,575 1100,545 880,590 C620,640 320,605 0,620 Z"
          fill="url(#grad-purple)"
          opacity="0.18"
        />
      </svg>
    </div>
  )
}

export default Background
