import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';

export default function Hero({ onExplore, onNavigateTickets }) {
  // Countdown to January 1, 2027 00:00:00
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2027-01-01T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="welcome-hero-section">
      <div className="welcome-hero-container">
        {/* Left Side: Typography, Prominent Key Countdown & CTA (NO FORM) */}
        <div className="welcome-hero-content">
          <h1 className="welcome-main-title">
            <span className="title-lead">Bienvenue en</span>
            <span className="title-accent">2027 au Bénin</span>
          </h1>

          <p className="welcome-subtext">
            Bonne et heureuse année 2027 ! Portons un toast aux accomplissements d'hier et à l'avenir prometteur de demain. Célébrez le passage vers 2027 lors de la plus grande soirée de prestige à Cotonou.
          </p>

          {/* PROMINENT KEY ELEMENT: The Grand Countdown to 2027 */}
          <div className="key-countdown-card">
            <div className="countdown-card-header">
              <Clock size={16} className="clock-icon" />
              <span>COMPTE À REBOURS OFFICIEL • NOUVEL AN 2027</span>
            </div>

            <div className="countdown-timer-display">
              <div className="timer-unit">
                <span className="timer-val">{timeLeft.days}</span>
                <span className="timer-lbl">JOURS</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit">
                <span className="timer-val">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="timer-lbl">HEURES</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit">
                <span className="timer-val">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="timer-lbl">MINUTES</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit highlight-unit">
                <span className="timer-val highlight-val">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="timer-lbl">SECONDES</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="welcome-cta-row">
            <button className="welcome-pill-btn" onClick={onNavigateTickets}>
              <span>Découvrir les Formules (FCFA)</span>
              <ArrowRight size={16} />
            </button>
            <button className="welcome-ghost-btn" onClick={onExplore}>
              En savoir plus
            </button>
          </div>
        </div>

        {/* Right Side: Image affichée au complet sans border ni container */}
        <div className="welcome-hero-media">
          <img
            src="/assets/welcome_2027.jpg"
            alt="Célébration 2027 au Bénin"
            className="hero-full-artwork"
          />
        </div>
      </div>
    </section>
  );
}
