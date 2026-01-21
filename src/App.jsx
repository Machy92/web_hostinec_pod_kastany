import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar.jsx';
import ScrollArrow from './components/ScrollArrow.jsx';
import AuthGuard from './components/AuthGuard.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import CookieConsent from './components/CookieConsent.jsx';

import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import ReservationPage from './pages/ReservationPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import RentalPage from './pages/RentalPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // PWA Redirect: If installed (standalone) and at root, go to admin
    if (window.matchMedia('(display-mode: standalone)').matches) {
      if (window.location.pathname === '/') {
        window.location.replace('/admin');
      }
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100 premium-bg">
        <Navbar />
        <ScrollArrow />

        <CookieConsent />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/rezervace" element={<ReservationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/nas-pribeh" element={<AboutPage />} />

            <Route path="/pronajem" element={<RentalPage />} />
            <Route path="/podminky" element={<PrivacyPolicyPage />} />
            <Route
              path="/admin"
              element={
                <AuthGuard>
                  <AdminPage />
                </AuthGuard>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;