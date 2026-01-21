import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion as Motion } from 'framer-motion';

import fotkaHistorie from '../assets/fotka-historie.jpg';
import fotkaInterier from '../assets/fotka-interier.jpg';
import fotkaPersonal1 from '../assets/fotka-personal-1.jpg';
import fotkaPersonal2 from '../assets/fotka-personal-2.jpg';
import fotkaPersonal3 from '../assets/fotka-personal-3.jpg';


function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="position-relative w-100" style={{ height: '60vh', minHeight: '400px', overflow: 'hidden' }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${fotkaHistorie})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)'
          }}
        ></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center px-3">
          <Motion.h1
            className="display-1 text-white fw-bold mb-3 text-uppercase"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ letterSpacing: '5px', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}
          >
            Náš Příběh
          </Motion.h1>
          <Motion.p
            className="lead text-white-50 fs-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Od pivnice k restauraci, kde se cítíte jako doma.
          </Motion.p>
        </div>
      </div>

      <div className="container py-5">
        <section id="historie" className="py-5">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="pe-lg-4">
                <h2 className="display-5 mb-4 fw-bold text-uppercase"><span className="text-gradient-gold">Od roku 2016</span></h2>
                <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>Když jsme v prosinci 2016 hostinec přebírali, byla to klasická pivnice. Místo, kam se chodilo hlavně na pivo. My jsme ale měli vizi.</p>
                <p style={{ color: 'var(--text-secondary)' }}>Láska ke gastronomii a touha vytvořit místo, kde se bude skvěle jíst, nás vedla k zásadnímu rozhodnutí – vybudovat od základů novou, moderní kuchyň. Nebyla to lehká cesta, ale věděli jsme, že poctivá kuchyně je srdcem každého dobrého podniku.</p>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
              <div className="position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-4" style={{ transform: 'rotate(-3deg)', zIndex: -1, opacity: 0.2 }}></div>
                <img src={fotkaHistorie} alt="Původní vzhled hostince" className="img-fluid rounded-4 shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section id="rekonstrukce" className="py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2" data-aos="fade-left">
              <div className="ps-lg-4">
                <h2 className="display-5 mb-4 fw-bold text-uppercase"><span className="text-gradient-gold">Nová éra v roce 2025</span></h2>
                <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>Zlomový bod přišel v únoru 2025. Rozhodli jsme se pro kompletní rekonstrukci.</p>
                <p style={{ color: 'var(--text-secondary)' }}>Chtěli jsme, aby se naši hosté cítili příjemně, útulně, prostě "jako doma". Z původní pivnice se stala restaurace s 9 stoly pro 4 osoby a odděleným salonkem pro 20 hostů, který je ideální pro soukromé oslavy. Nezapomněli jsme ani na venkovní posezení – naše zahrádka s oploceným dětským hřištěm a velkým pískovištěm teď v létě pojme až 70 hostů.</p>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 mt-5 mt-lg-0" data-aos="fade-right">
              <div className="position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-4" style={{ transform: 'rotate(3deg)', zIndex: -1, opacity: 0.2 }}></div>
                <img src={fotkaInterier} alt="Nový interiér restaurace" className="img-fluid rounded-4 shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section id="tym" className="py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-title-wrapper">
              <h2 className="display-5 fw-bold" style={{ color: 'var(--text-primary)' }}>Tým, který se o vás stará</h2>
            </div>
            <p className="lead mt-3" style={{ color: 'var(--text-secondary)' }}>Jsme rodinný podnik a na osobním přístupu si zakládáme.</p>
          </div>
          <div className="row text-center g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="glass-card p-4 h-100">
                <div className="mb-4 position-relative d-inline-block">
                  <img src={fotkaPersonal1} alt="Majitel" className="rounded-circle shadow-lg object-fit-cover" style={{ width: '150px', height: '150px', border: '3px solid var(--gold-accent)' }} />
                </div>
                <h4 className="h4 fw-bold" style={{ color: 'var(--text-primary)' }}>Jméno Příjmení</h4>
                <p className="text-primary mb-3 fw-bold">Majitel & Šéfkuchař</p>
                <p className="fst-italic small" style={{ color: 'var(--text-secondary)' }}>"Vaření není práce, ale vášeň. A na našich burgerech je to znát."</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="glass-card p-4 h-100">
                <div className="mb-4 position-relative d-inline-block">
                  <img src={fotkaPersonal2} alt="Manažerka" className="rounded-circle shadow-lg object-fit-cover" style={{ width: '150px', height: '150px', border: '3px solid var(--gold-accent)' }} />
                </div>
                <h4 className="h4 fw-bold" style={{ color: 'var(--text-primary)' }}>Jméno Příjmení</h4>
                <p className="text-primary mb-3 fw-bold">Manažerka & Duše podniku</p>
                <p className="fst-italic small" style={{ color: 'var(--text-secondary)' }}>"Největší radostí je pro mě spokojený zákazník, který se k nám rád vrací."</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="glass-card p-4 h-100">
                <div className="mb-4 position-relative d-inline-block">
                  <img src={fotkaPersonal3} alt="Mistr výčepu" className="rounded-circle shadow-lg object-fit-cover" style={{ width: '150px', height: '150px', border: '3px solid var(--gold-accent)' }} />
                </div>
                <h4 className="h4 fw-bold" style={{ color: 'var(--text-primary)' }}>Jméno Příjmení</h4>
                <p className="text-primary mb-3 fw-bold">Mistr výčepu</p>
                <p className="fst-italic small" style={{ color: 'var(--text-secondary)' }}>"Naše pivo je vždy perfektně načepované. Na to dohlížím osobně."</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;