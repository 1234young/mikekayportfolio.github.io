
import { useState } from 'react';
import { useHead } from '@unhead/react'
import Logo from '../../assets/logo.webp';
import './NavBar.css';
import { Link } from 'react-router-dom';
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav className="navbar">
      <img src={Logo} alt="logo" className="logo" />
      <h1>Welcome</h1>

      <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/services">Services</Link></li>
         <li><Link to="/contact">Contact</Link></li>
      
      </ul>
    </nav>
 

   </>
  );
}
