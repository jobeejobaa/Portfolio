function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">On travaille ensemble ?</h2>
      <p className="contact-intro">
        Je suis disponible pour un poste Junior Fullstack ou Frontend — n'hésite pas à me contacter !
      </p>
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
