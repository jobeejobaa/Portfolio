import { useLanguage } from "../contexts/LanguageContext"

const EMOJIS = ["🗣️", "🤝", "💻"]
const COULEURS = ["menthe", "corail", "jaune"]

function Parcours() {
  const { t } = useLanguage()
  const etapes = t("parcours.etapes")

  return (
    <section id="parcours" className="parcours">
      <h2 className="section-title">{t("parcours.title")}</h2>
      <p className="parcours-sous-titre">{t("parcours.subtitle")}</p>

      <div className="parcours-timeline">
        <div className="parcours-ligne" aria-hidden="true" />
        {etapes.map((etape, i) => (
          <div key={i} className="parcours-etape">
            <div className={`parcours-icone parcours-icone--${COULEURS[i]}`}>
              <span aria-hidden="true">{EMOJIS[i]}</span>
            </div>
            <strong className="parcours-titre">{etape.titre}</strong>
            <span className="parcours-sous">{etape.sous}</span>
          </div>
        ))}
      </div>

      <p className="parcours-citation">"{t("parcours.citation")}"</p>
    </section>
  )
}

export default Parcours
