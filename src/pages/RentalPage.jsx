import React, { useState } from 'react';
import supabase from '../supabaseClient';
import { motion as Motion } from 'framer-motion';
import heroPozadi from '../assets/hostinec-vnitrek.jpg';

function RentalPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: 'Oslava',
        date: '',
        guests: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const phoneRegex = /^[0-9\s+\-]*$/;
            if (!phoneRegex.test(value)) return;
        }

        if (name === 'guests') {
            const guestRegex = /^[0-9]*$/;
            if (!guestRegex.test(value)) return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.functions.invoke('send-email', {
                body: formData
            });

            if (error) throw error;

            console.log('Form submitted successfully:', data);
            setSubmitted(true);
        } catch (err) {
            console.error('Error submitting form:', err);
            setError('Nepodařilo se odeslat formulář. Zkuste to prosím později nebo nám zavolejte.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section className="hero-section d-flex align-items-center justify-content-center text-center text-white position-relative"
                style={{
                    backgroundImage: `url(${heroPozadi})`,
                    minHeight: '60vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
                <div className="container position-relative z-1">
                    <Motion.h1
                        className="display-3 fw-bold text-uppercase mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ color: 'white' }}
                    >
                        Pronájem prostor
                    </Motion.h1>
                    <Motion.p
                        className="lead text-light opacity-90 fs-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                    >
                        Uspořádejte u nás nezapomenutelnou akci
                    </Motion.p>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="glass-card d-flex align-items-center justify-content-center rounded-4 shadow-sm p-5" style={{ minHeight: '300px' }}>
                                <i className="bi bi-star-fill display-1 text-primary opacity-25"></i>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--text-primary)' }}>VIP Salónek</h2>
                            <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
                                Hledáte soukromí pro rodinnou oslavu nebo firemní jednání? Náš VIP salónek v patře je přesně pro vás.
                            </p>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Kapacita cca 40 osob</li>
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Vlastní bar s pípou</li>
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Útulné a soukromé prostředí</li>
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Možnost vlastní hudby</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center flex-lg-row-reverse">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="glass-card d-flex align-items-center justify-content-center rounded-4 shadow-sm p-5" style={{ minHeight: '300px' }}>
                                <i className="bi bi-music-note-beamed display-1 text-primary opacity-50"></i>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-5">
                            <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--text-primary)' }}>Plesový Sál</h2>
                            <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
                                Ideální prostor pro větší akce. Od svatební hostiny, přes maturitní plesy až po firemní večírky.
                            </p>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Kapacita až 150 osob</li>
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Velký taneční parket a pódium</li>
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Samostatný bar a předsálí</li>
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Kompletní catering na míru</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="glass-card d-flex align-items-center justify-content-center rounded-4 shadow-sm p-5" style={{ minHeight: '300px' }}>
                                <i className="bi bi-house-door-fill display-1 text-primary opacity-25"></i>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--text-primary)' }}>Pronájem celé hospody</h2>
                            <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
                                Chcete mít celou restauraci jen pro sebe? Nabízíme možnost pronájmu celého objektu pro uzavřenou společnost.
                            </p>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Kapacita restaurace + zahrádky</li>
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Úplné soukromí</li>
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Flexibilní uspořádání stolů</li>
                                <li className="mb-2 d-flex align-items-center" style={{ color: 'var(--text-secondary)' }}><i className="bi bi-check-circle-fill text-primary me-3"></i>Individuální přístup k menu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 text-white" id="poptavka">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-5">
                                <h2 className="display-5 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Nezávazná poptávka</h2>
                                <p style={{ color: 'var(--text-secondary)' }}>Máte zájem o pronájem? Vyplňte formulář a my se vám ozveme s nabídkou.</p>
                            </div>

                            {error && (
                                <div className="alert alert-danger text-center mb-4" role="alert">
                                    {error}
                                </div>
                            )}

                            {submitted ? (
                                <div className="alert alert-success text-center p-5 rounded-4" role="alert">
                                    <i className="bi bi-check-circle-fill display-1 mb-3 text-success d-block"></i>
                                    <h3 className="h2 fw-bold">Děkujeme za poptávku!</h3>
                                    <p className="lead">Váš formulář byl úspěšně odeslán. Budeme vás kontaktovat co nejdříve.</p>
                                    <button className="btn btn-outline-success mt-3" onClick={() => setSubmitted(false)}>Odeslat další poptávku</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="glass-card p-4 p-md-5 rounded-4">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label" style={{ color: 'var(--text-primary)' }}>Jméno a příjmení</label>
                                            <input type="text" className="form-control" style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', borderColor: 'var(--input-border)' }} id="name" name="name" value={formData.name} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label" style={{ color: 'var(--text-primary)' }}>E-mail</label>
                                            <input type="email" className="form-control" style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', borderColor: 'var(--input-border)' }} id="email" name="email" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="phone" className="form-label" style={{ color: 'var(--text-primary)' }}>Telefon</label>
                                            <input type="tel" className="form-control" style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', borderColor: 'var(--input-border)' }} id="phone" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9\s+\-]*" inputMode="tel" placeholder="+420 123 456 789" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="eventType" className="form-label" style={{ color: 'var(--text-primary)' }}>Typ akce</label>
                                            <select className="form-select" style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', borderColor: 'var(--input-border)' }} id="eventType" name="eventType" value={formData.eventType} onChange={handleChange}>
                                                <option value="Oslava" style={{ color: 'var(--text-primary)', background: 'var(--input-bg)' }}>Oslava</option>
                                                <option value="Svatba" style={{ color: 'var(--text-primary)', background: 'var(--input-bg)' }}>Svatba</option>
                                                <option value="Firemní večírek" style={{ color: 'var(--text-primary)', background: 'var(--input-bg)' }}>Firemní večírek</option>
                                                <option value="Ples" style={{ color: 'var(--text-primary)', background: 'var(--input-bg)' }}>Ples</option>
                                                <option value="Jiné" style={{ color: 'var(--text-primary)', background: 'var(--input-bg)' }}>Jiné</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="date" className="form-label" style={{ color: 'var(--text-primary)' }}>Preferované datum</label>
                                            <input type="date" className="form-control" style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', borderColor: 'var(--input-border)' }} id="date" name="date" value={formData.date} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="guests" className="form-label" style={{ color: 'var(--text-primary)' }}>Odhadovaný počet hostů</label>
                                            <input type="number" className="form-control" style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', borderColor: 'var(--input-border)' }} id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" inputMode="numeric" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label" style={{ color: 'var(--text-primary)' }}>Zpráva / Doplňující informace</label>
                                            <textarea className="form-control" style={{ background: 'var(--input-bg)', color: 'var(--text-primary)', borderColor: 'var(--input-border)' }} id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                                        </div>
                                        <div className="col-12 text-center mt-4">
                                            <button type="submit" className="btn btn-primary btn-lg px-5 rounded-pill fw-bold" disabled={loading}>
                                                {loading ? (
                                                    <span><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Odesílám...</span>
                                                ) : (
                                                    'Odeslat poptávku'
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RentalPage;
