import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import cookieImg from '../assets/cookie.png';

function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <Motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed-bottom p-3 d-flex justify-content-center justify-content-md-end"
                    style={{ zIndex: 1050 }}
                >
                    <div
                        className="glass-card p-4 rounded-4 shadow-lg border border-secondary position-relative"
                        style={{
                            maxWidth: '400px',
                            backdropFilter: 'blur(12px)',
                            background: 'rgba(20, 20, 20, 0.9)',
                            border: '1px solid rgba(255, 193, 7, 0.15)'
                        }}
                    >
                        {/* Cookie Image */}
                        <img
                            src={cookieImg}
                            alt="Cookie"
                            className="position-absolute"
                            style={{
                                width: '100px',
                                top: '-40px',
                                left: '-30px',
                                filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))',
                                transform: 'rotate(-15deg)',
                                zIndex: 1060
                            }}
                        />

                        <div className="d-flex align-items-start gap-3 ps-4">
                            <div>
                                <h5 className="fw-bold text-white mb-2 ps-2" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.5px' }}>
                                    POUŽÍVÁME COOKIES
                                </h5>
                                <p className="small mb-4 text-light opacity-75 ps-2">
                                    Tento web používá pouze nezbytné soubory cookies pro zajištění správného fungování a vašeho pohodlí.
                                </p>
                                <button
                                    onClick={handleAccept}
                                    className="btn btn-primary w-100 fw-bold rounded-pill text-uppercase"
                                    style={{
                                        background: 'linear-gradient(135deg, #ffca2c 0%, #ffc107 100%)',
                                        border: 'none',
                                        boxShadow: '0 4px 15px rgba(255, 193, 7, 0.3)',
                                        color: '#000'
                                    }}
                                >
                                    Rozumím & Souhlasím
                                </button>
                            </div>
                        </div>
                    </div>
                </Motion.div>
            )}
        </AnimatePresence>
    );
}

export default CookieConsent;