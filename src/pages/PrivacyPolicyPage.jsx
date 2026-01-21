import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion as Motion } from 'framer-motion';
import heroImage from '../assets/interier-restaurace.jpg';

function PrivacyPolicyPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div>
            <div className="position-relative w-100" style={{ height: '50vh', minHeight: '400px', overflow: 'hidden' }}>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.4)',
                        transform: 'scale(1.1)'
                    }}
                ></div>

                <div className="position-absolute bottom-0 start-0 w-100 h-50"
                    style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }}>
                </div>

                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center px-3">
                    <Motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <i className="bi bi-shield-check display-1 text-white mb-4 d-block" style={{ textShadow: '0 0 20px rgba(255, 193, 7, 0.5)' }}></i>
                    </Motion.div>

                    <Motion.h1
                        className="display-3 text-white fw-bold mb-3 text-uppercase"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ letterSpacing: '4px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                    >
                        Podmínky <span style={{ color: 'var(--gold-accent)' }}>používání</span>
                    </Motion.h1>

                    <Motion.p
                        className="lead text-white fs-5 opacity-75"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ maxWidth: '600px' }}
                    >
                        Jsme transparentní. Přečtěte si, jak chráníme vaše soukromí a jaká máte práva.
                    </Motion.p>
                </div>
            </div>

            {/* ===== HLAVNÍ OBSAH ===== */}
            <div className="container py-5" style={{ marginTop: '-80px', position: 'relative', zIndex: 10 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">

                        {/* 1. ÚVOD */}
                        <Motion.div
                            className="glass-card p-5 mb-4 rounded-4 shadow-lg"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="d-flex align-items-center mb-4">
                                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                    <i className="bi bi-info-circle-fill fs-3 text-primary"></i>
                                </div>
                                <h2 className="h3 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>1. Úvodní ustanovení</h2>
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Tyto podmínky upravují používání webových stránek <strong>Hostinec pod Kaštany</strong>. Vstupem na tyto stránky a jejich používáním vyjadřujete svůj souhlas s těmito podmínkami. Cílem tohoto dokumentu je poskytnout vám jasné a srozumitelné informace o tom, jak fungujeme.
                            </p>
                        </Motion.div>

                        <Motion.div
                            className="glass-card p-5 mb-4 rounded-4 shadow-lg"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="d-flex align-items-center mb-4">
                                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                    <i className="bi bi-person-badge-fill fs-3 text-primary"></i>
                                </div>
                                <h2 className="h3 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>2. Správce údajů</h2>
                            </div>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <p className="small text-uppercase fw-bold mb-1" style={{ color: 'var(--gold-accent)' }}>Název</p>
                                    <p className="fs-5 fw-bold" style={{ color: 'var(--text-primary)' }}>Hostinec pod Kaštany</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="small text-uppercase fw-bold mb-1" style={{ color: 'var(--gold-accent)' }}>Sídlo</p>
                                    <p className="fs-5" style={{ color: 'var(--text-secondary)' }}>5. května 29, 403 40 Skorotice</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="small text-uppercase fw-bold mb-1" style={{ color: 'var(--gold-accent)' }}>Email</p>
                                    <p className="fs-5" style={{ color: 'var(--text-secondary)' }}>info@hostinecpodkastany.cz</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="small text-uppercase fw-bold mb-1" style={{ color: 'var(--gold-accent)' }}>Telefon</p>
                                    <p className="fs-5" style={{ color: 'var(--text-secondary)' }}>+420 775 291 560</p>
                                </div>
                            </div>
                            <p className="mt-4 pt-4 border-top" style={{ borderColor: 'var(--glass-border)', color: 'var(--text-secondary)' }}>
                                Jsme správcem vašich osobních údajů dle nařízení GDPR (EU) 2016/679.
                            </p>
                        </Motion.div>

                        <Motion.div
                            className="glass-card p-5 mb-4 rounded-4 shadow-lg"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="d-flex align-items-center mb-4">
                                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                    <i className="bi bi-list-check fs-3 text-primary"></i>
                                </div>
                                <h2 className="h3 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>3. Proč zpracováváme údaje?</h2>
                            </div>
                            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                                Vaše údaje potřebujeme primárně k tomu, abychom vám mohli poskytnout ty nejlepší služby.
                            </p>

                            <div className="d-flex mb-3">
                                <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                                <div>
                                    <h5 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>Rezervace a E-shop</h5>
                                    <p className="small" style={{ color: 'var(--text-secondary)' }}>Zpracováváme jméno, email a telefon pro potvrzení vaší rezervace.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                                <div>
                                    <h5 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>Komunikace</h5>
                                    <p className="small" style={{ color: 'var(--text-secondary)' }}>Odpovědi na vaše dotazy zaslané přes kontaktní formulář.</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                                <div>
                                    <h5 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>Oprávněný zájem</h5>
                                    <p className="small" style={{ color: 'var(--text-secondary)' }}>Zlepšování služeb a ochrana našeho majetku.</p>
                                </div>
                            </div>
                        </Motion.div>

                        <Motion.div
                            className="glass-card p-5 mb-4 rounded-4 shadow-lg"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="d-flex align-items-center mb-4">
                                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                    <i className="bi bi-cookie fs-3 text-primary"></i>
                                </div>
                                <h2 className="h3 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>4. Cookies</h2>
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Používáme cookies, aby náš web běžel jako po másle.
                            </p>
                            <div className="row g-3 mt-2">
                                <div className="col-md-6">
                                    <div className="p-3 rounded-3 h-100" style={{ background: 'var(--input-bg)', border: '1px solid var(--input-border)' }}>
                                        <h6 className="fw-bold" style={{ color: 'var(--text-primary)' }}>Technické cookies</h6>
                                        <p className="small mb-0" style={{ color: 'var(--text-secondary)' }}>Nezbytné pro fungování stránek (např. odeslání formuláře).</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 rounded-3 h-100" style={{ background: 'var(--input-bg)', border: '1px solid var(--input-border)' }}>
                                        <h6 className="fw-bold" style={{ color: 'var(--text-primary)' }}>Analytické cookies</h6>
                                        <p className="small mb-0" style={{ color: 'var(--text-secondary)' }}>Pomáhají nám měřit návštěvnost. Data jsou anonymní.</p>
                                    </div>
                                </div>
                            </div>
                        </Motion.div>

                        <Motion.div
                            className="glass-card p-5 mb-4 rounded-4 shadow-lg"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="d-flex align-items-center mb-4">
                                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                    <i className="bi bi-hand-thumbs-up-fill fs-3 text-primary"></i>
                                </div>
                                <h2 className="h3 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>5. Vaše práva</h2>
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Máte plnou kontrolu nad svými údaji. Kdykoliv nás můžete požádat o:
                            </p>
                            <ul className="mb-0" style={{ color: 'var(--text-secondary)' }}>
                                <li className="mb-2"><strong>Výpis</strong> toho, co o vás víme.</li>
                                <li className="mb-2"><strong>Opravu</strong> nepřesných údajů.</li>
                                <li className="mb-2"><strong>Výmaz</strong> vašich údajů z našich systémů („právo být zapomenut“).</li>
                                <li><strong>Odvolání souhlasu</strong> se zpracováním.</li>
                            </ul>
                        </Motion.div>

                        <div className="text-center mt-5">
                            <Motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <p className="small opacity-50 mb-1" style={{ color: 'var(--text-secondary)' }}>Dokument je platný od</p>
                                <p className="fw-bold fs-5" style={{ color: 'var(--text-primary)' }}>21. ledna 2026</p>
                            </Motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicyPage;
