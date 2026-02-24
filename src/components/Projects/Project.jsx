import { useState } from "react";
import "./Project.css";
import { useHead } from '@unhead/react'
import Screenshota from "../../assets/Screenshota.webp";
import Screenshoti from "../../assets/Screenshoti.webp";
import Screenshote from "../../assets/Screenshote.webp";

const projectsData = [
  {
    title: "Fitness Web App",
    description:
      "A modern fitness tracking app with authentication, responsive design, and glassmorphism UI.",
    image: Screenshota,
    liveUrl: "https://github.com/1234young/mikeyoung.github.io/",
    githubUrl: "https://github.com/1234young/mikeyoung.github.io",
    inProgress: true,
  },
  {
    title: "Workout Planner Web App",
    description:
      "A responsive workout planning app designed to help users organize routines and track progress efficiently.",
    image: Screenshoti,
    liveUrl: "https://workout-planner-com-io.onrender.com",
    githubUrl: "https://github.com/1234young/youngmikekay2.github.io",
  },
  {
    title: "Passenger Pulse Web App",
    description:
      "A modern data-driven web app designed to monitor passenger activity and deliver real-time insights efficiently.",
    image: Screenshote,
    liveUrl: "https://1234young.github.io/mikekay.github.io/",
    githubUrl: "https://github.com/1234young/mikekay.github.io",
  },
];

export default function Projects() {
  const [showToast, setShowToast] = useState(false);

  const handleLiveDemoClick = (project, e) => {
    if (!project.inProgress) return;

    e.preventDefault(); 
    setShowToast(true);

    setTimeout(() => {
      window.open(project.githubUrl, "_blank");
      setShowToast(false);
    }, 3000);
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
    <>
      {/* ✅ Toast */}
      {showToast && (
        <div className="toast toast-info">
          🚧 Fitness Web App in progress...
        </div>
      )}

      <section id="projects">
        <div className="projects-container">
          <h2 className="projects-title">
            My <span>Projects</span>
          </h2>

          <p>
            A curated selection of projects showcasing my skills in building
            responsive, high-performance web applications.
          </p>

          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-actions">
                    <a
                      href={project.liveUrl}
                      className="project-btn primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLiveDemoClick(project, e)}
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn secondary"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}