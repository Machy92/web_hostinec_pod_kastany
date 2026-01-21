import { useRef, useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import logo from '../assets/logo.png';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const collapseDivRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    if (collapseDivRef.current.classList.contains('show')) {
      const toggler = document.querySelector('.navbar-toggler');
      if (toggler) {
        toggler.click();
      }
    }
  };

  const scrollToSection = (sectionId) => {
    handleLinkClick();

    if (location.pathname === '/') {
      scroller.scrollTo(sectionId, {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 500
      });
    } else {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          spy: true,
          smooth: false,
          offset: -70,
          duration: 0
        });
      }, 100);
    }
  };

  const isWhiteText = (theme === 'dark') || (!isScrolled);

  const colorClass = isWhiteText ? 'nav-link-custom-white' : 'nav-link-custom-black';

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'shadow-sm' : ''} ${isWhiteText ? 'navbar-dark' : 'navbar-light'}`}
      style={{
        backgroundColor: isScrolled
          ? (theme === 'dark' ? 'rgba(43, 48, 53, 0.95)' : 'rgba(255, 255, 255, 0.7)')
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled
          ? (theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)')
          : 'none',
        transition: 'all 0.4s ease',
        boxShadow: isScrolled
          ? (theme === 'dark' ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)')
          : 'none'
      }}
    >
      <div className="container">
        <RouterLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-2" />
          <span className={`d-none d-sm-inline ${colorClass}`}>
            Hostinec pod Kaštany
          </span>
        </RouterLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseDivRef}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className={`nav-link ${colorClass}`} onClick={() => scrollToSection('filozofie')} style={{ cursor: 'pointer' }}>
                Naše filozofie
              </a>
            </li>

            <li className="nav-item">
              <a className={`nav-link ${colorClass}`} onClick={() => scrollToSection('galerie')} style={{ cursor: 'pointer' }}>
                Galerie
              </a>
            </li>

            <li className="nav-item">
              <RouterLink className={`nav-link ${colorClass}`} to="/nas-pribeh" onClick={handleLinkClick}>
                Příběh
              </RouterLink>
            </li>
            <li className="nav-item">
              <RouterLink className={`nav-link ${colorClass}`} to="/menu" onClick={handleLinkClick}>
                Menu
              </RouterLink>
            </li>
            <li className="nav-item">
              <RouterLink className={`nav-link ${colorClass}`} to="/pronajem" onClick={handleLinkClick}>
                Pronájem
              </RouterLink>
            </li>
            <li className="nav-item ms-lg-4 mt-2 mt-lg-0">
              <RouterLink className="btn btn-primary fw-bold" to="/rezervace" onClick={handleLinkClick}>Rezervovat stůl</RouterLink>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0 d-flex align-items-center">
              <a href="https://wolt.com/cs/cze/usti-nad-labem/restaurant/hostinec-pod-kastany" target="_blank" rel="noopener noreferrer" className="text-decoration-none me-3" style={{ color: '#00C2E8' }}>
                <strong>Wolt</strong>
              </a>
              <a href="https://www.foodora.cz/restaurant/h1bx/hostinec-pod-kastany" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#D70F64' }}>
                <strong>Foodora</strong>
              </a>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <button
                onClick={toggleTheme}
                className={`btn btn-link nav-link px-2 d-flex align-items-center ${colorClass}`}
                style={{ transition: 'color 0.3s' }}
                aria-label="Přepnout tmavý/světlý režim"
              >
                {theme === 'dark' ? <i className="bi bi-sun-fill fs-5"></i> : <i className="bi bi-moon-fill fs-5"></i>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;