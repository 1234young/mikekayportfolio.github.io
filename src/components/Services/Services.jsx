import './Services.css';
import { useHead } from '@unhead/react'
import FrontendDevelopment from '../../assets/frontend-development.webp';
import UIUXDesign from '../../assets/ui-ux.webp';
import WebPerfomance from '../../assets/web.webp';

export default function Services() {
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
    <section id="services">
      <div className="services-container">
        <h2 className="services-title">
          My <span>Services.</span>
        </h2>
        <p className="services-subtitle">
         What I can do for you...<span>⚡</span>
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>
              I build fast, responsive, and interactive user interfaces using
              modern technologies like React, JavaScript, and advanced CSS.
            </p>
            <img src={FrontendDevelopment} alt="Frontend Development" />
          </div>

          <div className="service-card">
            <h3>UI / UX Design</h3>
            <p>
              I design clean and intuitive user experiences with a focus on
              usability, accessibility, and modern aesthetics.
            </p>
            <img src={UIUXDesign} alt="UI / UX Design" />
          </div>

          <div className="service-card">
            <h3>Web Performance</h3>
            <p>
              I optimize websites for speed, SEO, and performance to ensure
              smooth user experiences across all devices.
            </p>
            <img src={WebPerfomance} alt="Web Performance" />
          </div>
        </div>
      </div>
    </section>
  );
}