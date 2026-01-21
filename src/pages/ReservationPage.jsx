// src/pages/ReservationPage.jsx
import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import supabase from '../supabaseClient';
import heroImage from '../assets/fotka-interier.jpg';

function ReservationPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guestCount, setGuestCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError(false);

        const { data, error: supabaseError } = await supabase
            .from('reservations')
            .insert([{
                name: name,
                email: email,
                phone: phone,
                date: date,
                time: time,
                guest_count: guestCount
            }]);

        setLoading(false);

        if (supabaseError) {
            console.error('Chyba při vkládání:', supabaseError);
            setError(true);
            setMessage('Něco se pokazilo. Zkuste to prosím znovu.');
        } else {
            console.log('Rezervace úspěšná:', data);
            setMessage('Děkujeme! Vaše rezervace byla úspěšně odeslána. Brzy se vám ozveme s potvrzením.');
            setName('');
            setEmail('');
            setPhone('');
            setDate('');
            setTime('');
            setGuestCount(1);
        }
    };

    return (
        <div className="reservation-page position-relative" style={{
            minHeight: '100vh',
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.7)', zIndex: 0 }}></div>

            <style>
                {`
                    .glass-card {
                        background: var(--glass-bg);
                        backdrop-filter: blur(20px);
                        -webkit-backdrop-filter: blur(20px);
                        border: 1px solid var(--glass-border);
                        box-shadow: var(--glass-shadow);
                    }
                    .form-control-glass {
                        background: var(--input-bg) !important;
                        border: 1px solid var(--input-border) !important;
                        color: var(--text-primary) !important;
                        transition: all 0.3s ease;
                    }
                    .form-control-glass:focus {
                        background: var(--input-focus-bg) !important;
                        border-color: var(--gold-accent) !important;
                        box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25) !important;
                    }
                    .text-gold { color: var(--gold-accent) !important; }
                    .text-secondary-theme { color: var(--text-secondary) !important; }
                    .btn-gold {
                        background: linear-gradient(135deg, var(--gold-accent) 0%, #a38452 100%);
                        border: none;
                        color: #000;
                        transition: transform 0.2s, box-shadow 0.2s;
                    }
                    .btn-gold:hover {
                        background: linear-gradient(135deg, #d4b583 0%, #b59461 100%);
                        box-shadow: 0 4px 15px rgba(197, 165, 114, 0.4);
                        color: #000;
                    }
                    input[type="date"]::-webkit-calendar-picker-indicator,
                    input[type="time"]::-webkit-calendar-picker-indicator {
                        filter: invert(var(--calendar-invert, 1)) opacity(0.6);
                        cursor: pointer;
                    }
                `}
            </style>

            <div className="position-relative w-100" style={{ height: '40vh', minHeight: '300px', overflow: 'hidden', zIndex: 1 }}>

                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center px-3">
                    <Motion.h1
                        className="display-1 text-white fw-bold mb-3 text-uppercase"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ letterSpacing: '8px', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
                    >
                        Rezervace
                    </Motion.h1>
                    <Motion.div
                        className="bg-gold"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{ height: '2px', width: '100px', marginBottom: '1.5rem' }}
                    ></Motion.div>
                    <Motion.p
                        className="lead text-white-50 fs-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
                    >
                        Zajistěte si svůj stůl v srdci našeho hostince
                    </Motion.p>
                </div>
            </div>

            <div className="container py-5" style={{ marginTop: '-100px', position: 'relative', zIndex: 10 }}>
                <Motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="row justify-content-center"
                >
                    <div className="col-lg-8 col-xl-7">
                        <div className="card glass-card rounded-4 overflow-hidden">
                            <div className="card-body p-4 p-md-5">
                                <h3 className="text-center mb-2 text-uppercase fw-bold" style={{ letterSpacing: '3px', color: 'var(--text-primary)' }}>
                                    Rezervační formulář
                                </h3>
                                <p className="text-center text-muted mb-5 small text-uppercase" style={{ letterSpacing: '1px' }}>
                                    Vyplňte prosím své údaje
                                </p>

                                {message && (
                                    <Motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className={`alert ${error ? 'alert-danger bg-danger text-white border-0' : 'alert-success bg-success text-white border-0'} d-flex align-items-center mb-4 rounded-3 shadow-sm`}
                                        role="alert"
                                    >
                                        <i className={`bi ${error ? 'bi-exclamation-triangle-fill' : 'bi-check-circle-fill'} me-3 fs-4`}></i>
                                        <div>{message}</div>
                                    </Motion.div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <div className="form-floating mb-1">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-glass rounded-3"
                                                    id="name"
                                                    placeholder="Jméno a příjmení"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                                <label htmlFor="name" className="text-secondary">Jméno a příjmení</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating mb-1">
                                                <input
                                                    type="email"
                                                    className="form-control form-control-glass rounded-3"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                                <label htmlFor="email" className="text-secondary">E-mail</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating mb-1">
                                                <input
                                                    type="tel"
                                                    className="form-control form-control-glass rounded-3"
                                                    id="phone"
                                                    placeholder="Telefon"
                                                    value={phone}
                                                    onChange={(e) => {
                                                        const val = e.target.value.replace(/\D/g, '').slice(0, 9);
                                                        setPhone(val);
                                                    }}
                                                    required
                                                    maxLength={9}
                                                    pattern="[0-9]{9}"
                                                    title="Telefonní číslo musí mít přesně 9 číslic"
                                                />
                                                <label htmlFor="phone" className="text-secondary">Telefon</label>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="form-floating mb-1">
                                                <input
                                                    type="date"
                                                    className="form-control form-control-glass rounded-3"
                                                    id="date"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                    required
                                                />
                                                <label htmlFor="date" className="text-secondary">Datum</label>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="form-floating mb-1">
                                                <input
                                                    type="time"
                                                    className="form-control form-control-glass rounded-3"
                                                    id="time"
                                                    value={time}
                                                    onChange={(e) => setTime(e.target.value)}
                                                    required
                                                />
                                                <label htmlFor="time" className="text-secondary">Čas</label>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="form-floating mb-1">
                                                <input
                                                    type="number"
                                                    className="form-control form-control-glass rounded-3"
                                                    id="guestCount"
                                                    value={guestCount}
                                                    min="1"
                                                    onChange={(e) => setGuestCount(e.target.value)}
                                                    required
                                                />
                                                <label htmlFor="guestCount" className="text-secondary">Počet hostů</label>
                                            </div>
                                        </div>

                                        <div className="col-12 mt-5">
                                            <Motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                className="btn btn-primary w-100 py-3 fw-bold text-uppercase fs-6 rounded-pill"
                                                disabled={loading}
                                                style={{ letterSpacing: '2px' }}
                                            >
                                                {loading ? (
                                                    <span><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Odesílám...</span>
                                                ) : (
                                                    'Rezervovat stůl'
                                                )}
                                            </Motion.button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </div>
    );
}

export default ReservationPage;