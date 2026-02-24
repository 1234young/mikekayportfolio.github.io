import { useHead } from '@unhead/react'
import { Link } from "react-router-dom";
import "./Hero.css";
import Mike from "../../assets/mikekay.webp";

const ROLES = ["✔️ Front-End Developer", "✔️ Web Developer", "✔️ React Specialist", "✔️ UI Engineer"];

export default function Hero() {

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
    <section className="hero" aria-label="Introduction section">

      <div className="hero-glass">
        <div className="hero-copy">
          <h1>
            Hi, I’m <span>Mike Young</span>
          </h1>

          <p>
            I’m a Front-End Developer specializing in building responsive, accessible,
            and high-performance web applications. <br /><br />
            I transform complex ideas into intuitive digital experiences using
            modern technologies such as <strong>React</strong>, <strong>JavaScript</strong>,
            and advanced <strong>CSS</strong>.
            <br /><br />
            My focus is on crafting clean, user-centric interfaces that are fast,
            engaging, and designed to tell a compelling story.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn primary">
              Get in Touch
            </Link>
            <Link to="/projects" className="btn outline">
              View Projects
            </Link>
          </div>
        </div>

        <div className="hero-media">
           <div className="hero-image">
            <img src={Mike} alt="Mike Young" />
          </div>
          <ul className="hero-roles">
            {ROLES.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
