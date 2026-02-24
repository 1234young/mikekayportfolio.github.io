import "./Footer.css";
import { useHead } from '@unhead/react'
import CV from "../../assets/MK-CV.pdf";
import { Link } from "react-router-dom";

export default function Footer() {
  // helper function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useHead({
      title: 'Mike | Frontend Developer',
      meta: [
        { name: 'description', content: "Hi, I'm Mike — a passionate frontend developer specializing in React." },
        { name: 'keywords', content: 'Mike, frontend developer, React developer, portfolio, web developer' },
        // Open Graph
        { property: 'og:title', content: 'Mike | Frontend Developer' },
        { property: 'og:description', content: 'Frontend developer specializing in React.' },
        { property: 'og:url', content: 'https://youngmike.dev/' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: 'https://youngmike.dev/' },
      ],
    })

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h3>Young Mike Owuor</h3>
          <p>Frontend / Web Developer building modern,<br></br> clean, and  responsive web apps.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/" onClick={scrollToTop}>Home</Link>
          <Link to="/about" onClick={scrollToTop}>About</Link>
          <Link to="/services" onClick={scrollToTop}>Services</Link>
          <Link to="/contact" onClick={scrollToTop}>Contact</Link>
          
          <a href={CV} download>
            Download CV
          </a>
        </div>

        <div className="footer-socials">
          <h4>Connect</h4>
          <a
            href="https://github.com/1234young/mikeyoung.github.io"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/youngmike"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:youngmike703@gmail.com">Email</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p><i class="fa-solid fa-copyright"></i>  {new Date().getFullYear()} Young Mike Owuor. All rights reserved.</p>
      </div>
    </footer>
  );
}