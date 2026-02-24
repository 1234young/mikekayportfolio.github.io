import { useState } from "react";
import { useHead } from '@unhead/react'
import "./About.css";
import MikeYoung from "../../assets/mikeyoung.webp";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

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
    <section id="about">
      <div className="row">
        <div className="about-col-1">
          <img src={MikeYoung} alt="About Mike Young" />
        </div>

        <div className="about-col-2">
          <h1>About Me</h1>
          <p>
            A dedicated front-end developer specializing in the modern JavaScript, React and advanced CSS
            ecosystem. I build dynamic, single-page applications using React and
            with a strong focus on state management and component-based
            architecture. I'm passionate about continuous learning and applying
            new technologies to solve real-world problems. I thrive on the
            challenge of making websites not only look stunning but also function
            flawlessly across all devices.
          </p>

          <div className="tab-title">
            <button
              type="button"
              className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
            <button
              type="button"
              className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>

          <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
            <ul>
              <li>
                <span>UI/UX</span>
                <br />
                Designing Web/App Interfaces
              </li>
              <li>
                <span>Web Development</span>
                <br />
                Web App development.
              </li>
              <li>
                <span>App Development</span>
                <br />
                Building Android and iOS Apps.
              </li>
            </ul>
          </div>

          <div
            className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`}
            id="education"
          >
            <ul>
              <li>
                <span>2023</span>
                <br />
                UI/UX Design Training at Kirinyaga University.
              </li>
              <li>
                <span>2024</span>
                <br/>
                Web App Development Training at Kirinyaga University.
              </li>
              <li>
                <span>2026</span>
                <br />
                Mobile App Development Training at Kirinyaga University.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
