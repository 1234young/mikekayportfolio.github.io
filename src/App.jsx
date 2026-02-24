
import NavBar from "./components/NavBar/NavBar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import Project from "./components/Projects/Project.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <>
     <NavBar />
     <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
     </Routes>
 
      <About />
      <Services />
      <Project />
      <Footer />

    </>
  );
}

