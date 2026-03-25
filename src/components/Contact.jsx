import { useLanguage } from "../contexts/LanguageContext"

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">{t("contact.title")}</h2>
      <p className="contact-intro">{t("contact.intro")}</p>
      <div className="contact-buttons">
        <a href="mailto:johannadelfieux@gmail.com" className="btn-contact btn-email">
          ✉ johannadelfieux@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/jdelfieux"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-contact btn-linkedin"
        >
          in LinkedIn
        </a>
        <a
          href="https://github.com/jobeejobaa"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-contact btn-github"
        >
          ⌥ GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact
