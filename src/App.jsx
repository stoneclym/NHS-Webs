import { useState } from 'react';
import { Nav, Footer } from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Volunteer from './pages/Volunteer';
import Meetings from './pages/Meetings';
import Contact from './pages/Contact';

const App = () => {
  const [page, setPage] = useState('Home');

  const handleNavigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const sections = {
    pillars: true,
    mission: true,
    quickLinks: true,
    gallery: true,
  };

  return (
    <>
      <Nav active={page} onNavigate={handleNavigate} />
      <div key={page}>
        {page === 'Home' && <Home onNavigate={handleNavigate} sections={sections} />}
        {page === 'About' && <About />}
        {page === 'Membership' && <Membership />}
        {page === 'Volunteer' && <Volunteer />}
        {page === 'Meetings' && <Meetings />}
        {page === 'Contact' && <Contact />}
      </div>
      <Footer onNavigate={handleNavigate} />
    </>
  );
};

export default App;
