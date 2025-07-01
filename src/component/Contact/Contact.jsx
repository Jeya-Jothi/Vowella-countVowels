import "./Contact.css";
function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="head-div">
        <p>Contact</p>
      </div>
      <div className="contact-content">
        <a
          href="mailto:jeyajothi108@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/images/email logo.svg" alt="email logo" />
          <p>Email</p>
        </a>
        <a
          href="https://github.com/Jeya-Jothi"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/images/github logo.svg" alt="github logo" />
          <p>Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/jeya-jothi-841277211"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/images/linkedin logo.svg" alt="linkedin logo" />
          <p>Linkedin</p>
        </a>
        <a
          href="https://jothi-portfolio-9utu.onrender.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/images/logo jj.svg" alt="portfolio logo" />
          <p>Portfolio</p>
        </a>
      </div>
      <div className="copyright-div">
        <p>
          Copyright © {new Date().getFullYear()} | Jeya Jothi | All right
          reserved{" "}
        </p>
      </div>
    </div>
  );
}

export default Contact;
