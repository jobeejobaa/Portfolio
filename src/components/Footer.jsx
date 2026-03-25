import { useLanguage } from "../contexts/LanguageContext"

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <p className="footer-copy">{t("footer.copy")}</p>
    </footer>
  )
}

export default Footer
