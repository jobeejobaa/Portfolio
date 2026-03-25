import { useLanguage } from "../contexts/LanguageContext"

const LANGUAGES = [
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
]

function Header() {
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="header">
      <nav className="nav">
        <a href="#accueil" className="nav-logo">JDW</a>
        <ul className="nav-links">
          <li><a href="#parcours">{t("nav.parcours")}</a></li>
          <li><a href="#projets">{t("nav.projets")}</a></li>
          <li><a href="#contact">{t("nav.contact")}</a></li>
        </ul>
        <div className="nav-langs">
          {LANGUAGES.map(({ code, flag, label }) => (
            <button
              key={code}
              className={`lang-btn${lang === code ? " lang-btn--active" : ""}`}
              onClick={() => setLang(code)}
              aria-label={label}
              title={label}
            >
              {flag}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
