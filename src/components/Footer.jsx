import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 mt-auto" style={{ background: 'var(--glass-bg)', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
      <div className="container text-center">
        <p className="mb-1" style={{ color: 'var(--text-primary)' }}>
          &copy; {currentYear} Hostinec pod Kaštany. Všechna práva vyhrazena.
        </p>
        <p className="mb-0">
          <span className="opacity-75">
            ul. 5. května 29, 403 40 Skorotice | Tel: 775 291 560
          </span>
          <br />
          <Link to="/podminky" className="text-secondary opacity-75 text-decoration-none small hover-white" style={{ fontSize: '0.8rem' }}>Podmínky používání</Link>
        </p>

        <div className="mt-2 mb-2 d-flex justify-content-center align-items-center flex-wrap gap-3">
          <a href="https://www.facebook.com/hostinecpodkastany/?locale=cs_CZ" target="_blank" rel="noopener noreferrer" className="text-decoration-none d-flex align-items-center" style={{ color: '#1877F2' }}>
            <i className="bi bi-facebook fs-5 me-1"></i> <span className="d-none d-sm-inline">Facebook</span>
          </a>
          <a href="https://www.instagram.com/hostinec_podkastany/" target="_blank" rel="noopener noreferrer" className="text-decoration-none d-flex align-items-center" style={{ color: '#E4405F' }}>
            <i className="bi bi-instagram fs-5 me-1"></i> <span className="d-none d-sm-inline">Instagram</span>
          </a>
          <span className="text-muted mx-1">|</span>
          <a href="https://wolt.com/cs/cze/usti-nad-labem/restaurant/hostinec-pod-kastany" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#00C2E8' }}>
            <strong>Wolt</strong>
          </a>
          <a href="https://www.foodora.cz/restaurant/h1bx/hostinec-pod-kastany" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#D70F64' }}>
            <strong>Foodora</strong>
          </a>
        </div>
        <div className="admin-login-link mt-1">
          <Link to="/login" title="Přihlášení pro administrátory" style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
            <i className="bi bi-person-circle"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;