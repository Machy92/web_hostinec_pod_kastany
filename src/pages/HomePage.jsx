import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import logo from '../assets/logo.png';
import heroPozadi from '../assets/hostinec-vnitrek.jpg';
import interierRestaurace from '../assets/interier-restaurace.jpg';
import galerie1 from '../assets/galerie1.jpg';
import galerie2 from '../assets/galerie2.jpg';
import galerie3 from '../assets/galerie3.jpg';
import galerie4 from '../assets/galerie4.jpg';
import woltLogo from '../assets/Wolt-removebg-preview.png';
import foodoraLogo from '../assets/Foodora-removebg-preview.png';

import foodBurger from '../assets/food-burger.png';
import foodFriedCheese from '../assets/food-fried-cheese.png';
import foodChickenStrips from '../assets/food-chicken-strips.png';
import foodBeer from '../assets/food-beer.png';
import foodTraditional from '../assets/food-traditional.png';


function HomePage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const [activeTab, setActiveTab] = useState('burgery');

  const interactiveData = {
    burgery: {
      title: "Naše Burgery",
      description: "Poctivé burgery z vyzrálého hovězího masa. Každý burger připravujeme s láskou, používáme domácí bulky a čerstvou zeleninu. Maso si sami meleme a dochucujeme podle naší tajné receptury.",
      ingredients: ["Vyzrálé hovězí maso", "Domácí bulka", "Čedar", "Slanina", "Čerstvá zelenina", "Domácí dip"],
      image: foodBurger
    },
    syr: {
      title: "Smažený Sýr",
      description: "Česká klasika, kterou milujeme. Používáme kvalitní goudu nebo eidam, kterou obalujeme v trojobalu a smažíme dozlatova. Podáváme s hranolkami a naší tatarskou omáčkou.",
      ingredients: ["Kvalitní sýr (Gouda/Eidam)", "Domácí strouhanka", "Hranolky", "Tatarská omáčka", "Petrželka"],
      image: foodFriedCheese
    },
    stripsy: {
      title: "Kuřecí Stripsy",
      description: "Křupavé kuřecí kousky obalené v naší speciální směsi koření. Šťavnaté uvnitř a extra křupavé na povrchu. Ideální volba k pivu nebo jako lehčí hlavní chod.",
      ingredients: ["Kuřecí prsa", "Speciální směs koření", "Hranolky", "BBQ nebo česnekový dip"],
      image: foodChickenStrips
    }
  };

  const galleryImages = [
    { src: galerie1, alt: 'Fotka z naší restaurace 1' },
    { src: galerie2, alt: 'Fotka z naší restaurace 2' },
    { src: galerie3, alt: 'Fotka z naší restaurace 3' },
    { src: galerie4, alt: 'Fotka z naší restaurace 4' },
  ];
  const lightboxSlides = galleryImages.map(img => ({ src: img.src }));

  return (
    <div>
      <section id="hero" className="hero-section d-flex align-items-center justify-content-center text-center text-white position-relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.5)' }}></div>

        <div className="container position-relative z-1">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={logo} alt="Logo Hostince pod Kaštany" className="logo mb-4" style={{ maxWidth: '280px' }} />

            <Motion.h1
              className="display-4 fw-bold text-uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-gradient-gold">Poctivé Burgery</span> <span className="text-white">& Skvělé Pivo</span>
            </Motion.h1>

            <Motion.p
              className="lead my-4 text-light opacity-75 fs-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Přijďte se k nám dobře najíst a napít se dobrého českého piva z pivovaru Bakalář.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <RouterLink className="btn btn-primary fw-bold px-4 py-2 rounded-pill btn-glow" to="/rezervace">
                Rezervovat stůl
              </RouterLink>

              <div className="d-flex justify-content-center w-100 mt-4">
                <div className="d-inline-flex justify-content-center align-items-center gap-4 py-2 px-4 rounded-pill"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                  <Motion.a
                    href="https://wolt.com/cs/cze/usti-nad-labem/restaurant/hostinec-pod-kastany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    <img src={woltLogo} alt="Wolt" style={{ height: '40px', width: 'auto' }} />
                  </Motion.a>
                  <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.3)' }}></div>
                  <Motion.a
                    href="https://www.foodora.cz/restaurant/h1bx/hostinec-pod-kastany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <img src={foodoraLogo} alt="Foodora" style={{ height: '45px', width: 'auto' }} />
                  </Motion.a>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      <section id="filozofie" className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-title-wrapper">
              <h2 className="display-5 fw-bold" style={{ color: 'var(--text-primary)' }}>NA CO SE MŮŽETE TĚŠIT</h2>
            </div>
          </div>
          <div className="row text-center g-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="glass-card p-4 h-100">
                <i className="bi bi-egg-fried display-4 text-primary mb-3 d-block"></i>
                <h3 className="h5 my-2 text-uppercase fw-bold" style={{ color: 'var(--text-primary)' }}>Naše Speciality</h3>
                <p className="small" style={{ color: 'var(--text-secondary)' }}>Specializujeme se na burgery, kterých máme velké portfolio. Najdete u nás ale i klasiku jako smažený sýr, vždy čerstvý a v několika druzích strouhanek.</p>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="glass-card p-4 h-100">
                <i className="bi bi-cup-straw display-4 text-primary mb-3 d-block"></i>
                <h3 className="h5 my-2 text-uppercase fw-bold" style={{ color: 'var(--text-primary)' }}>Poctivé Nápoje</h3>
                <p className="small" style={{ color: 'var(--text-secondary)' }}>Točíme pivo Bakalář z královského pivovaru v Rakovníku (zal. 1454). Nabízíme také velký výběr domácích limonád a točený Aperol.</p>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="glass-card p-4 h-100">
                <i className="bi bi-people-fill display-4 text-primary mb-3 d-block"></i>
                <h3 className="h5 my-2 text-uppercase fw-bold" style={{ color: 'var(--text-primary)' }}>Prostor pro Vás</h3>
                <p className="small" style={{ color: 'var(--text-secondary)' }}>Naše útulná restaurace nabízí 9 stolů. Pro soukromé oslavy máme salonek pro 20 osob a venkovní zahrádka s hřištěm pojme až 70 hostů.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kuchyne" className="py-5 bg-transparent position-relative">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold" style={{ color: 'var(--text-primary)' }}>NAŠE KUCHYNĚ</h2>
            <p className="lead" style={{ color: 'var(--text-secondary)' }}>Zakládáme si na kvalitních surovinách a poctivé přípravě.</p>
          </div>

          <div className="row g-4 align-items-center">

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-4 glass-card">
                <div className="overflow-hidden" style={{ height: '250px' }}>
                  <img src={foodBurger} alt="Gourmet Burger" className="img-fluid w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale" />
                </div>
                <div className="card-body p-4 text-center">
                  <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Poctivé Burgery</h3>
                  <p className="card-text" style={{ color: 'var(--text-secondary)' }}>Naše burgery připravujeme z vyzrálého hovězího masa, které si sami meleme. Podáváme v domácí bulce s čerstvou zeleninou a našimi omáčkami.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-4 glass-card">
                <div className="overflow-hidden" style={{ height: '250px' }}>
                  <img src={foodFriedCheese} alt="Smažený sýr" className="img-fluid w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale" />
                </div>
                <div className="card-body p-4 text-center">
                  <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Smažené Speciality</h3>
                  <p className="card-text" style={{ color: 'var(--text-secondary)' }}>Milujeme klasiku. Náš smažený sýr v poctivém trojobalu nebo křupavé kuřecí stripsy s domácími dipy jsou sázkou na jistotu.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-4 glass-card">
                <div className="overflow-hidden" style={{ height: '250px' }}>
                  <img src={foodBeer} alt="Pivo Bakalář" className="img-fluid w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale" />
                </div>
                <div className="card-body p-4 text-center">
                  <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Pivo Bakalář</h3>
                  <p className="card-text" style={{ color: 'var(--text-secondary)' }}>K dobrému jídlu patří dobré pivo. Čepujeme pro vás Bakaláře z Rakovníka, pivo s tradicí od roku 1454, které má říz a plnou chuť.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nabidka" className="py-5 text-white position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: '#1a1a1a' }}></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-20"
          style={{
            backgroundImage: `url(${heroPozadi})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>

        <div className="container position-relative z-1">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold text-gradient-gold">Ochutnejte To Nejlepší</h2>
            <p className="lead text-light opacity-75">Vyberte si z našich nejoblíbenějších kategorií.</p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-4" data-aos="fade-right">
              <div className="d-flex flex-column gap-3">
                {[
                  { id: 'burgery', label: 'Burgery', desc: 'Hovězí maso, domácí bulky' },
                  { id: 'syr', label: 'Smažák & Sýry', desc: 'Gouda, Eidam, Hermelín' },
                  { id: 'stripsy', label: 'Kuřecí Stripsy', desc: 'Křupavé, domácí dipy' }
                ].map((item) => (
                  <Motion.button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className="btn text-start p-4 rounded-4 w-100 position-relative overflow-hidden"
                    style={{
                      background: activeTab === item.id
                        ? 'rgba(20, 20, 20, 0.8)'
                        : 'rgba(255, 255, 255, 0.05)',
                      border: activeTab === item.id ? '1px solid #ffca2c' : '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: activeTab === item.id
                        ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                        : 'none',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === item.id && (
                      <div className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ background: 'radial-gradient(circle at top right, rgba(255,202,44,0.15), transparent 70%)' }}>
                      </div>
                    )}

                    <div className="d-flex align-items-center gap-4 position-relative z-1">
                      <div>
                        <span
                          className="d-block h5 fw-bold mb-1"
                          style={{
                            color: activeTab === item.id ? '#fff' : 'rgba(255,255,255,0.8)',
                            transition: 'color 0.3s ease',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {item.label}
                        </span>
                        <span
                          className="small"
                          style={{
                            color: activeTab === item.id ? '#ffca2c' : 'rgba(255,255,255,0.4)',
                            transition: 'color 0.3s ease',
                            fontWeight: activeTab === item.id ? '600' : '400'
                          }}
                        >
                          {item.desc}
                        </span>
                      </div>

                      <div
                        className="ms-auto"
                        style={{
                          transform: activeTab === item.id ? 'translateX(0)' : 'translateX(-10px)',
                          opacity: activeTab === item.id ? 1 : 0,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <i className={`bi bi-chevron-right fs-5 text-warning`}></i>
                      </div>
                    </div>
                  </Motion.button>
                ))}
              </div>
            </div>

            <div className="col-lg-8" data-aos="fade-left">
              <div style={{ display: 'grid', gridTemplateAreas: '"stack"' }}>
                {Object.entries(interactiveData).map(([key, data]) => (
                  <Motion.div
                    key={key}
                    style={{ gridArea: 'stack' }}
                    initial={{ opacity: 0, zIndex: 0 }}
                    animate={{
                      opacity: activeTab === key ? 1 : 0,
                      zIndex: activeTab === key ? 10 : 0,
                      scale: activeTab === key ? 1 : 0.98
                    }}
                    transition={{ duration: 0.4 }}
                    className={`bg-dark rounded-4 p-2 border border-secondary shadow-lg overflow-hidden ${activeTab === key ? 'position-relative' : 'position-absolute w-100 h-100'}`}
                  >
                    <div className="row g-0 h-100">
                      <div className="col-md-6 position-relative">
                        <div className="h-100 overflow-hidden rounded-3" style={{ minHeight: '300px' }}>
                          <img src={data.image} alt={data.title} className="img-fluid w-100 h-100 object-fit-cover" />
                        </div>
                      </div>
                      <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                        <h3 className="h2 fw-bold mb-3 text-primary">{data.title}</h3>
                        <p className="lead text-light mb-4 fs-6">{data.description}</p>

                        <div className="mt-auto">
                          <h5 className="text-uppercase text-muted small fw-bold mb-2">Co v tom najdete:</h5>
                          <div className="d-flex flex-wrap gap-2">
                            {data.ingredients.map((ing, idx) => (
                              <span key={idx} className="badge bg-secondary bg-opacity-25 text-light border border-secondary px-3 py-2 rounded-pill fw-normal">
                                {ing}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pribeh" className="py-5 position-relative overflow-hidden">
        <div className="container position-relative z-1">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-4" style={{ transform: 'rotate(-3deg)', zIndex: -1, opacity: 0.2 }}></div>
                <img src={interierRestaurace} alt="Interiér restaurace" className="img-fluid rounded-4 shadow-lg" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 mt-5 mt-lg-0" data-aos="fade-left">
              <div className="ps-lg-4">
                <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--text-primary)' }}>OD PIVNICE K RESTAURACI</h2>
                <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Hostinec provozujeme od prosince 2016. Z původní pivnice nás láska ke gastronomii vedla k vybudování nové kuchyně.
                  V únoru 2025 jsme hostinec zrekonstruovali do podoby útulné restaurace.
                </p>

                <RouterLink to="/nas-pribeh" className="btn btn-outline-secondary ß btn-lg rounded-pill px-4">
                  Přečíst si celý příběh
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galerie" className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-title-wrapper">
              <h2 className="display-5 fw-bold" style={{ color: 'var(--text-primary)' }}>NAHLÉDNĚTE K NÁM</h2>
            </div>
          </div>
          <div className="row g-4">
            {galleryImages.map((image, i) => (
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={i * 100} key={i}>
                <div className="gallery-item position-relative overflow-hidden rounded-4 shadow-lg" style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}>
                  <img
                    src={image.src}
                    className="img-fluid w-100 h-100 object-fit-cover transition-transform duration-500"
                    style={{ height: '250px', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    alt={image.alt}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-50 opacity-0 hover-opacity-100 transition-opacity duration-300"
                    style={{ transition: 'opacity 0.3s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '0'}
                  >
                    <i className="bi bi-zoom-in text-white display-4"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="akce" className="py-4">
        <div className="container">
          <div className="text-center mb-4" data-aos="fade-up">
            <div className="section-title-wrapper mb-3">
              <h2 className="h2 fw-bold" style={{ color: 'var(--text-primary)' }}>SVATBY, PLESY A OSLAVY</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>Uspořádejte u nás vaši akci. Vše zařídíme na klíč.</p>
          </div>
          <div className="row text-center g-3">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="glass-card p-3 h-100 position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-br from-primary to-transparent opacity-10" style={{ pointerEvents: 'none' }}></div>
                <i className="bi bi-music-note-beamed display-5 text-primary mb-2 d-block"></i>
                <h4 className="h5 fw-bold text-uppercase" style={{ color: 'var(--text-primary)' }}>Plesový sál</h4>
                <p className="small mb-0" style={{ color: 'var(--text-secondary)' }}>Pronajměte si náš sál s předsálím a barem o celkové kapacitě 150 lidí. Ideální pro plesy, zábavy nebo velké svatby. Rádi vám připravíme kompletní catering.</p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="glass-card p-3 h-100 position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-bl from-primary to-transparent opacity-10" style={{ pointerEvents: 'none' }}></div>
                <i className="bi bi-star-fill display-5 text-primary mb-2 d-block"></i>
                <h4 className="h5 fw-bold text-uppercase" style={{ color: 'var(--text-primary)' }}>VIP Salónek</h4>
                <p className="small mb-0" style={{ color: 'var(--text-secondary)' }}>Pro menší akce, firemní večírky nebo narozeninové oslavy je ideální náš VIP salónek v patře. Má vlastní bar s pípou a pojme cca 40 lidí.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="social" className="py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25"
          style={{
            backgroundImage: `url(${heroPozadi})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px)'
          }}></div>
        <div className="container position-relative z-1 text-center">
          <div className="mb-4">
            <h2 className="display-6 fw-bold text-white">SLEDUJTE NÁS NA SOCIÁLNÍCH SÍTÍCH</h2>
            <p className="lead text-light opacity-75">Buďte v obraze o našich novinkách, akcích a denním menu.</p>
          </div>

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="https://www.facebook.com/hostinecpodkastany/?locale=cs_CZ" target="_blank" rel="noopener noreferrer"
              className="btn btn-primary d-flex align-items-center gap-2 px-4 py-3 rounded-pill btn-lg shadow-lg hover-lift">
              <i className="bi bi-facebook fs-4"></i>
              <span className="fw-bold">Facebook</span>
            </a>

            <a href="https://www.instagram.com/hostinec_podkastany/" target="_blank" rel="noopener noreferrer"
              className="btn d-flex align-items-center gap-2 px-4 py-3 rounded-pill btn-lg shadow-lg hover-lift"
              style={{ background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)', color: 'white', border: 'none' }}>
              <i className="bi bi-instagram fs-4"></i>
              <span className="fw-bold">Instagram</span>
            </a>
          </div>
        </div>
      </section>

      <Motion.section
        id="navstivte-nas"
        className="py-5 text-center position-relative"
        style={{
          background: 'var(--glass-bg)',
          borderTop: '1px solid var(--glass-border)',
          borderRadius: 0
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container position-relative z-1">
          <div className="section-title-wrapper mb-5">
            <h2 className="h3 fw-bold" style={{ color: 'var(--text-primary)' }}>TĚŠÍME SE NA VÁS</h2>
          </div>
          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>Najdete nás ve Skoroticích, kousek od kostela sv. Václava.</p>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="d-flex flex-wrap justify-content-center gap-3 align-items-center p-3">
                <span className="mb-0" style={{ color: 'var(--text-primary)' }}><i className="bi bi-geo-alt-fill text-primary me-2"></i><strong>Adresa:</strong> ul. 5. května 29, 403 40 Skorotice</span>
                <span className="d-none d-md-block text-secondary">|</span>
                <span className="mb-0" style={{ color: 'var(--text-primary)' }}><i className="bi bi-telephone-fill text-primary me-2"></i><strong>Rezervace:</strong> 775 291 560</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <RouterLink className="btn btn-primary fw-bold px-4 py-2 rounded-pill btn-glow" to="/rezervace">Online Rezervace</RouterLink>
          </div>
        </div>
      </Motion.section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={lightboxSlides}
        index={index}
      />
    </div>
  );
}

export default HomePage;